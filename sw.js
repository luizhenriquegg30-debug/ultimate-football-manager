// UFM APP V18.6
const CACHE='ufm-app-v18-6';
const STATIC=['./manifest.webmanifest','./icons/ufm-icon.svg','./offline.html'];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)));
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);

  // HTML is NETWORK FIRST: publishing a new index.html on GitHub updates the installed app.
  if(event.request.mode==='navigate'||url.pathname.endsWith('/index.html')){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(event.request,{cache:'no-store'});
        const c=await caches.open(CACHE); c.put('./index.html',fresh.clone());
        return fresh;
      }catch(e){
        return (await caches.match('./index.html')) || (await caches.match('./offline.html'));
      }
    })());
    return;
  }

  // Firebase and other external requests are never intercepted.
  if(url.origin!==self.location.origin) return;

  event.respondWith((async()=>{
    const cached=await caches.match(event.request);
    if(cached) return cached;
    try{
      const fresh=await fetch(event.request);
      const c=await caches.open(CACHE); c.put(event.request,fresh.clone());
      return fresh;
    }catch(e){ return Response.error(); }
  })());
});
