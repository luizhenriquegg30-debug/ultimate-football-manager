UFM V19 — CORE CONSOLIDADO

- Um único bloco JavaScript principal no index.html.
- Removidos os scripts temporários de diagnóstico V18.6.2/V18.6.3.
- Todas as rotas conhecidas que salvavam a carreira como objeto no documento users/{uid} foram migradas para careerJson (json-v1).
- Carregamento mantém compatibilidade com careerJson e saves antigos em career.
- Service Worker/cache atualizado para V19.0.0.
- O save local por UID permanece como proteção.

Regra daqui em diante: alterar/substituir o módulo afetado no core; não anexar patches de versão no final do HTML.
