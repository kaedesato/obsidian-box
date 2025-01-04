---
modified: 2025-01-02T00:34
---
  

会議室予約システム作るかー

  

なんか、普通に、Cloudflareとか使わずに、素直なNextとSQLiteで作ればいいや。

Drizzleは使う。

  

  

> [!info] Cloudflare Pages + Next.js + Hono + D1 + Drizzleで始めるフルスタック構成  
> 個人開発でWebサービスを作るにあたり、CloudflareやHonoなど普段の業務では縁のない技術を試してみた。  
> [https://zenn.dev/da1/articles/cloudflare-nextjs-hono-drizzle](https://zenn.dev/da1/articles/cloudflare-nextjs-hono-drizzle)  

  

  

これらのフレームワークが必要なのかどうかを調べる。

  

### Cloudflare Pages、Workers、D1

ホスティングサービス。必要。

  

### Next JS

ルーティングとか、SSGとかやってくれるやつ。

Svelteに対するSvelte kitとは違う立ち位置のような気がするけど、一旦同じものとして使う。

  

### Drizzle

SQL書かなくても良いようにしてくれるやつ。

結構SQLに似てるらしいから、結果的にはSQLを書いていることにはなっている。

とはいえ型チェックとか色々できるらしい。

  

### Hono

こいつなんのためにあるかわからない。

APIを簡単にかける？軽量化できる？

とりあえずよくわかんないけど使ってみる？