UFM CLEAN CORE 1.0

Esta versão remove todos os runtimes JavaScript acumulados da base anterior e inicia um core novo.

Incluído nesta primeira base limpa:
- Firebase Authentication;
- uma conta por UID;
- criação/carregamento básico de carreira;
- save local por UID;
- save Firestore somente em careerJson (string);
- compatibilidade de leitura com careerJson e career antigos;
- navegação básica;
- wizard básico;
- um único autosave;
- PWA/cache novo.

Importante:
Esta é uma reconstrução de base. Sistemas avançados do jogo que dependiam dos scripts removidos
(partidas completas, competições, mercado, scouting, PvP, troféus etc.) precisam ser reintroduzidos
como módulos novos, um por vez, sem copiar os runtimes legados.

Validação: JavaScript inline e Service Worker passaram no node --check.
