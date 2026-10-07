UFM APP V18.6.1 — ATUALIZAÇÃO AUTOMÁTICA

Esta é uma atualização do MESMO aplicativo/PWA. Não reinstale o UFM.

O que mudou:
- version.json é consultado sem cache ao abrir/voltar ao app;
- Service Worker usa updateViaCache: none;
- HTML/navegação usa network-first;
- caches antigos do UFM são removidos na ativação;
- o app verifica atualização ao abrir, voltar para a tela e a cada 5 minutos.

Para publicar:
1. Envie/substitua index.html, sw.js, version.json, manifest.webmanifest, offline.html e a pasta icons no mesmo repositório.
2. Faça o commit.
3. Abra o UFM já instalado com internet. A primeira abertura após esta correção pode exigir fechar e abrir o app novamente, pois a versão antiga ainda controla essa primeira transição.
