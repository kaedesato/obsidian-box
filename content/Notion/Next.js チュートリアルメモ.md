---
Q: false
pin: false
最終更新日時: Invalid date
関連:
  - "[[プログラミング]]"
2ホップリンク: https://www.notion.so/0a41298b69ab4dc794deb8b3d3d1ee05, https://www.notion.so/14c680a9513f402cb546a22bda05f95b, https://www.notion.so/34f92ffc1e4c4d1b857b21a7d6b1b1de, https://www.notion.so/3d616c7cd72f4094801215141f8c2728, https://www.notion.so/68683c8593d4479c99a07fde3e6774bc, https://www.notion.so/7aabe6e7f03a44b28cdaeb92e3ef259b, https://www.notion.so/90e8af62936e4d72a8ce6914ad492062, https://www.notion.so/9ba61d2d4f2044349a218692fcc1e00b, https://www.notion.so/ca8169668e454da2a8959019045176b4, https://www.notion.so/d38b1d3b7fcd4e1d91dcec4bb1a4e39b, https://www.notion.so/de44079af2ea4e5aa1a89d5652190257, https://www.notion.so/ebd3d7a92c894323b0da135a2bdefa13, https://www.notion.so/fa1ab1433fe44fb981cf3eecfca12657
date: 2024-12-27T22:34
modified: 2024-12-27T22:34
created: 2024-12-27T22:34
---
  

他のフレームワークにも活かせそう。Webプログラミングの要素詰め合わせセットになっている。

React/Nextの記法的なところを除いてまとめる

  

Chapter1

- プロジェクト作成
    - 作成用のコマンドがある
- フォルダ構造を理解する
- プレースホルダーを用意しておくと便利
    - テスト用のデータ
    - mockAPI.io
    - データベースへのシード（初期データを入れる）
- TypeScript
    - 型安全性を高める
    - Prismaというものを使うとより安全に型宣言できる

  

Chapter2

- グローバルスタイル
- 最上位コンポーネント
    - ルートレイアウト
- Tailwind CSS
    - クラス名を追加して要素をスタイリングできる
- CSSモジュール
- tailwindもCSSモジュールもどっちでもいい、どっちも同時に使える
- clsxはクラス名を切り替えるためのライブラリです
- そのほかのスタイリング
    - scss
    - CSS-in-JSライブラリ

  

Chapter3

- フォントの最適化
- 累積レイアウトシフト
- フォントは、フォールバックフォントかシステムフォントでレンダリングして、そのあとにカスタムフォントでレンダリング。
- Next.jsはその辺を最適化してくれる。
    - サーバーサイドにフォントファイルを保存
- プライマリフォントを設定する
    - セカンダリフォントを設定する
- 画像の最適化
    - サイズが動的に変わる。
- imgの代わりのImageコンポーネント
    - webPとかに自動でしてくれる
- WicthとHeightを設定するとレイアウトがずれにくくなる

  

Chapter4

- ルーティング
    - ファイルシステムルーティング
- Page.tsxとLayout.tsx
- layout.tsxは子フォルダにすべて影響する
- 部分レンダリング
- ルートレイアウト

  

Chapter5

- Linkコンポーネント
    - aタグに置き換えていろいろな機能が追加されたもの
    - ページを更新せずに移動できるようになる。
- URLの値を読み込んで、どのページにいるかを認識する
- clsxを使って条件分岐してクラスを変更できる

  

Chapter6

- GitHubにプッシュ
- Vercelにデプロイ
    - 自動的に再デプロイ
- PostgreSQLデータベース
    - Vercelで用意できる
- .envにPostgresのシークレットキーを入れる
    - gitignoreを確認せよ
- データベースのシード

  

Chapter7

- データの取得
    - API→クエリ→SQLコマンド
- APIを使う理由
    - データベースを直接公開しないようにするため
- React Server Componentsを利用するとAPIを使わずに安全にデータベースクエリを使うことができる
- サーバーコンポーネント
    - Promiseをサポートして非同期にできる
- SQLのSDKがある
- リクエストウォーターフォール
- Promise.allによって並列処理をする

  

Chapter8

- 静的レンダリングと動的レンダリング
- 静的レンダリングはビルド時にサーバーでレンダリングする
    - CDNで高速化できる
    - サーバーの負荷軽減、高速化、SEO対策などで有利
- 静的レンダリングは静的なコンテンツ・UIしかできない
- 動的レンダリングはリクエスト時にレンダリングする
    - リアルタイムデータを扱えたり、ユーザー独自のコンテンツ、Cookieなどが扱えるようになる
- 動的レンダリングを利用すると、最も遅いデータフェッチに依存する

  

Chapter9

- チャンク？
- コンポーネントごとにロードする
- loading.tsxでロード中の代替画面を作れる
- ロードスケルトンはロード中のフォールバックです。
- ルートグループによって、そのディレクトリでしか有効にならないようにできる
- コンポーネントのストリーミング
- Suspenceというものを使う
- コンポーネントをグループ化することで、同時に読み込むことができる
    - そうすると、逐次読み込みに比べて画面が崩れなくなる
- サスペンスの境界線をどこに置くのか
    - とりあえず適当でいい

> [!info] Learn Next.js: Streaming  
> Improve your application's loading experience with streaming and loading skeletons.  
> [https://nextjs.org/learn/dashboard-app/streaming#deciding-where-to-place-your-suspense-boundaries](https://nextjs.org/learn/dashboard-app/streaming#deciding-where-to-place-your-suspense-boundaries)  

  

Chapter10

- Nextjsの機能、部分的プリレンダリング
- 簡単に言うと、コンポーネントについて、静的な部分を先にレンダリングできる。
- Suspenseでラッピングすると自動でこの機能を使ってくれる

  

- これまでにやったこと
- サーバーとデータベースは近いところに置く
- サーバーコンポーネントを使って、データベースを安全に保つ
- SQLクエリでデータ転送量の最適化を行う
- Promise.allで並列化をします
- ストリーミングを実装し、ページを部分的に読み込むようにしました。

  

  

Chapter11

- URL検索パラメータ
    - ブックマークできたり共有できたり追跡できたり
- デバウンス
    - 関数が起動できる速度を変える
    - 連打できないようにする
    - use-debounce
- ページネーション

  

  

Chapter12

- サーバーアクションとサーバーコンポーネント・・・？
- サーバーアクションを使うとAPIエンドポイントを作る必要がない
- サーバーアクションを使って、入力チェックなどを行うことができる。
- サーバーアクションを使うと、キャッシュを使って再検証ができる？
- 型検証ライブラリのZodを使うと楽ができる

  

8章

ダイナミックレンダリングとスタティックレンダリング

9章

- ローディングスケルトン
- (overview) はロードされない
- かっこは読み込まれないから
- 若干コードの間違いがある
- Props経由でロードするのではなく、コンポーネントで直接ローディングを書いてしまう方がいい。

10章

一旦サラッと読む

11章

URLクエリ

デバウンス