---
modified: 2025-12-10T11:06
---


node.jsをサーバー化するのに使うやつ。

まだ使ってないけど、バカ便利そう。

```sh
# pm2をインストール
npm install pm2 -g

# pm2を使ってアプリケーションを起動
pm2 start build/index.js --name "sveltekit-app"

# サーバー再起動時にpm2も自動で起動するように設定
pm2 startup
pm2 save
```


pm2 logs sveltekit-app