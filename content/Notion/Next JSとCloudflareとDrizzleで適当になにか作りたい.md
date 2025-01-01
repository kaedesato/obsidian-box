---
Q: false
pin: false
最終更新日時: Invalid date
関連:
  - "[[プログラミング]]"
  - "[[Next JSとDrizzleとSQLiteのセットアップ]]"
2ホップリンク: https://www.notion.so/0a41298b69ab4dc794deb8b3d3d1ee05, https://www.notion.so/14c680a9513f402cb546a22bda05f95b, https://www.notion.so/34f92ffc1e4c4d1b857b21a7d6b1b1de, https://www.notion.so/3d616c7cd72f4094801215141f8c2728, https://www.notion.so/68683c8593d4479c99a07fde3e6774bc, https://www.notion.so/7aabe6e7f03a44b28cdaeb92e3ef259b, https://www.notion.so/90e8af62936e4d72a8ce6914ad492062, https://www.notion.so/9ba61d2d4f2044349a218692fcc1e00b, https://www.notion.so/ca8169668e454da2a8959019045176b4, https://www.notion.so/d38b1d3b7fcd4e1d91dcec4bb1a4e39b, https://www.notion.so/de44079af2ea4e5aa1a89d5652190257, https://www.notion.so/ebd3d7a92c894323b0da135a2bdefa13, https://www.notion.so/fa1ab1433fe44fb981cf3eecfca12657,https://www.notion.so/53ca0bb5fcaf49e788eee27974e0266d, https://www.notion.so/68683c8593d4479c99a07fde3e6774bc
date: 2024-12-27T22:34
modified: 2024-12-27T22:34
created: 2024-12-27T22:34
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