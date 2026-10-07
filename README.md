UFM V18.6.3 — CLOUD SAVE FIX

Corrige o erro do Firestore:
invalid-argument: Nested arrays are not supported.

A carreira continua com a mesma estrutura dentro do jogo e no save local.
Na nuvem, ela passa a ser armazenada em `careerJson` como JSON serializado.
Ao carregar, o UFM desserializa automaticamente.
Compatibilidade: se uma conta antiga ainda possuir `career` no formato anterior, o carregador continua aceitando-o.

Não desinstale nem limpe os dados antes de confirmar `✓ NUVEM • CONTA ...`.
