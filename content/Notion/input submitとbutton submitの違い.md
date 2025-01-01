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
フォーム内の `<input type="submit" />` と `<button />` は、どちらもフォームを送信するために使用できますが、それぞれに違いがあります。

### 違い

1. **デフォルトの動作**:
    - `<input type="submit" />` はデフォルトでフォームを送信するためのボタンとして機能します。
    - `<button />` タグ自体はデフォルトでフォームを送信することはありませんが、`<button type="submit">` と指定することで送信ボタンとして機能します。`<button>` タグのデフォルトのタイプは "submit" です。
2. **カスタマイズ**:
    - `<input type="submit" />` は値（`value` 属性）を使ってボタンの表示テキストを指定します。
    - `<button>` はボタンの中に HTML を直接記述できるため、より柔軟に内容をカスタマイズできます。例えば、アイコンやスタイル付きのテキストを含めることができます。
        
        ```HTML
        <button class="btn btn-primary w-20">
            <span class="icon">🎵</span> Upload
        </button>
        ```
        
3. **アクセシビリティ**:
    - `<button>` の方がアクセシビリティやセマンティクスにおいて柔軟性があります。例えば、スクリーンリーダー向けに詳細な説明を追加することが容易です。

### 推奨される使い方

どちらを使うべきかは、プロジェクトの要件によりますが、一般的なガイドラインは以下の通りです:

- **単純な送信ボタン**: ただ送信するだけで特にカスタマイズが必要ない場合は、`<input type="submit" />` を使うのが簡単です。
- **カスタマイズされたボタン**: ボタンの中にアイコンを含めたり、複雑なスタイリングやコンテンツが必要な場合は、`<button type="submit">` を使うと良いでしょう。

### 修正例

上記のコードで `<button>` を使用する場合、`type="submit"` を明示的に指定すると良いでしょう。また、ボタンのラベルも追加する必要があります。

```HTML
<div class="my-4">
	<form action="?/upload" method="post" enctype="multipart/form-data">
		<input
			type="file"
			name="audio"
			accept="audio/*"
			class="file-input file-input-bordered w-full max-w-xs"
		/>
		<div class="my-5">
			<input type="submit" class="btn btn-primary w-20" value="Upload" />
			<button type="submit" class="btn btn-primary w-20">
                Submit
            </button>
		</div>
	</form>
</div>
```

これで、どちらのボタンも適切にフォームを送信することができ、利用する目的に応じたカスタマイズが可能です。