---
modified: 2025-07-14T12:01
---



上から下へ

GitHubのOrganization作った。
Tursoのアカウント作った。
TursoのOrganizationは24ドルらしい。

sv
```sh
npx sv create
```

```sh
npx sv create
Need to install the following packages:
sv@0.8.15
Ok to proceed? (y)

┌  Welcome to the Svelte CLI! (v0.8.15)
│
◇  Where would you like your project to be created?
│  ./
│
◇  Which template would you like?
│  SvelteKit minimal
│
◇  Add type checking with TypeScript?
│  Yes, using TypeScript syntax
│
◆  Project created
│
◇  What would you like to add to your project? (use arrow keys / space bar)
│  prettier, eslint, tailwindcss, drizzle, lucia
│
◇  tailwindcss: Which plugins would you like to add?
│  typography
│
◇  drizzle: Which database would you like to use?
│  SQLite
│
◇  drizzle: Which SQLite client would you like to use?
│  Turso
│
◇  lucia: Do you want to include a demo? (includes a login/register page)
│  Yes
│
◆  Successfully setup add-ons
│
◇  Which package manager do you want to install dependencies with?
│  npm
│
◇  Installing dependencies with npm...
```


prettier, eslint, tailwindcss, drizzle, lucia
一応TailwindのTypographyをいれた。

daisyuiのインストール
```sh
npm i -D daisyui@latest
```


WSL使えない環境でTursoのセットアップ無理だったりする？

行けそう。
とりあえず、TursoのDB作って、アドレスとキーもらってきて、.envに書いた。

開発するときは、localのDBでやったほうが良さそうと思った。
ようは
```
  url: "file:local.db",
```
ということ。

とはいえ、いったんクラウド接続でやる。


なんやかんやあって、Cloudflareにデプロイして、サーバーサイドのコードの処理もうまくいきました。


---

もろもろの件があって、Supabaseを使ってみようかなと思う。
（Local DBがあんまりうまく動かなかった）

