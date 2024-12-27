---
Q: true
pin: false
最終更新日時: Invalid date
関連:
  - "[[プログラミング]]"
2ホップリンク: https://www.notion.so/0a41298b69ab4dc794deb8b3d3d1ee05, https://www.notion.so/14c680a9513f402cb546a22bda05f95b, https://www.notion.so/34f92ffc1e4c4d1b857b21a7d6b1b1de, https://www.notion.so/3d616c7cd72f4094801215141f8c2728, https://www.notion.so/68683c8593d4479c99a07fde3e6774bc, https://www.notion.so/7aabe6e7f03a44b28cdaeb92e3ef259b, https://www.notion.so/90e8af62936e4d72a8ce6914ad492062, https://www.notion.so/9ba61d2d4f2044349a218692fcc1e00b, https://www.notion.so/ca8169668e454da2a8959019045176b4, https://www.notion.so/d38b1d3b7fcd4e1d91dcec4bb1a4e39b, https://www.notion.so/de44079af2ea4e5aa1a89d5652190257, https://www.notion.so/ebd3d7a92c894323b0da135a2bdefa13, https://www.notion.so/fa1ab1433fe44fb981cf3eecfca12657
---
  

- JSとJSXの違いとコンパイル
- Reactのコンセプト。コンポーネント、プロップス、ステート
- コンポーネントと再利用性、ネスト
- PropsやStateはReactの公式チュートリアルをやっていたらわかるかも
- nextjsでReactを動かす
- ネットワーク境界
- サーバーで処理するか、クライアントで処理するか
    - サーバーコンポーネントとクライアントコンポーネント

  

どうでもいいこと

- 〇〇ランドは丸々王国って訳したほうがいいのでは？

  

2024年2月16日 はゆっくりNext触っていいこー

目標は4章！

- インストール
- 最初からTypescript使うのがいいチュートリアル
- 4章までおわった
- Tailwindとかのちょっとした知識が要求されるけど比較的わかりやすいかも。

  

  

  

12章

- サーバーアクション
    
    - サーバーアクションはAPIを作る必要がない
    - 逆に言うと今までAPIを作ってやってたことをショートカットする機能がサーバーアクションなのかもしれない
    
    > **知っておくべきこと**: HTML では、URL を属性に渡します`action`。この URL は、フォーム データの送信先 (通常は API エンドポイント) になります。
    > 
    > ただし、React では、この`action`属性は特別な prop とみなされます。つまり、React はその上に構築され、アクションを呼び出すことができるようになります。
    > 
    > サーバー アクションは舞台裏で`POST`API エンドポイントを作成します。これが、サーバー アクションを使用するときに API エンドポイントを手動で作成する必要がない理由です。
    
    - セキュリティ的にもいいらしい
    - キャッシュのこととか色々わからないことはある
- 型の検証用ライブラリ Zod
- Schemaっていう単語よく聞くけど、あれだよね変数名と型の定義（宣言）のことだよね
- SQLの使い方わからない
- 再検証とリダイレクトわからない
- 動的ルートセグメント

- NextのLinkコンポーネント
- これあとで調べる。

```JavaScript
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  // ...
}
```

- UUID と自動インクリメントキー

> **注:**フォーム内で非表示の入力フィールドを使用することもできます (例`<input type="hidden" name="id" value={invoice.id} />`)。ただし、値は HTML ソースにフルテキストとして表示されるため、ID などの機密データには理想的ではありません。

これなに

- **revalidatePathとredirect**

  

  

2024年3月22日