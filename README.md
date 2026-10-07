# UFM App V18.5.2

Esta pasta transforma a UFM V18.5.2 em um Progressive Web App (PWA).

## Publicar no GitHub Pages
Substitua o `index.html` do repositório pelos arquivos desta pasta e envie também:
- manifest.webmanifest
- sw.js
- offline.html
- version.json
- pasta icons/

Como os caminhos são relativos, funciona no endereço GitHub Pages `/ultimate-football-manager/`.

## Instalar no Android
Abra o site publicado no Chrome. No menu do navegador, escolha "Instalar app" ou "Adicionar à tela inicial".
O UFM abrirá em janela própria, como aplicativo.

## Atualizações
O `index.html` usa estratégia network-first. Quando uma nova versão for publicada no GitHub Pages,
o app procura a versão nova ao abrir. Firebase continua sendo o backend das contas e saves.

## APK / Play Store
Esta entrega é a camada PWA. Ela mantém Web + App usando o mesmo jogo e o mesmo Firebase.
Um APK nativo pode ser empacotado depois com Capacitor sem reescrever o UFM.
