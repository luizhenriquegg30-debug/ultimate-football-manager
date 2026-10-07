// UFM APP V18.6.1
const CACHE='ufm-app-v18-6-1';
const SHELL=['./manifest.webmanifest','./icons/ufm-icon.svg','./offline.html'];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)));
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.startsWith('ufm-app-')&&k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message',event=>{
  if(event.data?.type==='SKIP_WAITING')self.skipWaiting();
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;

  // Never cache the version probe.
  if(url.pathname.endsWith('/version.json')){
    event.respondWith(fetch(event.request,{cache:'no-store'}));
    return;
  }

  // Always prefer the network for navigations and HTML.
  if(event.request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/ultimate-football-manager/')){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(event.request,{cache:'no-store'});
        if(fresh && fresh.ok){
          const c=await caches.open(CACHE);
          c.put('./index.html',fresh.clone()).catch(()=>{});
        }
        return fresh;
      }catch(e){
        return (await caches.match('./index.html')) || (await caches.match('./offline.html'));
      }
    })());
    return;
  }

  event.respondWith((async()=>{
    const cached=await caches.match(event.request);
    const network=fetch(event.request).then(async fresh=>{
      if(fresh && fresh.ok){
        const c=await caches.open(CACHE);
        c.put(event.request,fresh.clone()).catch(()=>{});
      }
      return fresh;
    }).catch(()=>null);
    return cached || await network || Response.error();
  })());
});
