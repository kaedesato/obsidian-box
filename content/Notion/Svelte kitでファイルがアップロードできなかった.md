---
Q: false
pin: false
最終更新日時: Invalid date
---
  

結論としては、

> `<form>`タグの`enctype="multipart/form-data"`属性を設定することで、ファイルをアップロードできるようにします。

これができていなかった

  

ChatGPTさんの回答

  

SvelteKitでファイルをアップロードし、サーバーのローカルに保存する方法を解説します。具体的には、Form actionを使って実装します。

まず、`+page.svelte`にアップロードフォームを作成します。そして、`+page.server.ts`でアップロードされたファイルを処理し、ローカルに保存します。

### `+page.svelte`

以下は、ファイルアップロードフォームを含む`+page.svelte`の例です。

```Plain
<script lang="ts">
    import { formAction } from '$app/forms';
</script>

<form method="post" enctype="multipart/form-data" use:formAction>
    <input type="file" name="file" />
    <button type="submit">Upload</button>
</form>
```

### `+page.server.ts`

次に、サーバーサイドの処理を行う`+page.server.ts`を設定します。`Form actions`を使って、アップロードされたファイルを処理します。

```TypeScript
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return fail(400, { error: 'No file uploaded' });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const uploadPath = path.join('uploads', file.name);

        // Ensure the uploads directory exists
        fs.mkdirSync('uploads', { recursive: true });

        // Save the file to the uploads directory
        fs.writeFileSync(uploadPath, buffer);

        return {
            success: true,
            fileName: file.name
        };
    }
};
```

### 詳細な説明

1. `**+page.svelte**`
    - `<form>`タグの`enctype="multipart/form-data"`属性を設定することで、ファイルをアップロードできるようにします。
    - `use:formAction`を使ってフォームの送信アクションを設定します。
2. `**+page.server.ts**`
    - `request.formData()`を使って、フォームデータを取得します。
    - フォームデータからファイルを取り出します。
    - ファイルが存在しない場合は、400エラーを返します。
    - ファイルをバッファに変換し、保存先のパスを設定します。
    - `fs.writeFileSync`を使ってファイルをローカルディスクに保存します。
    - 保存が成功した場合、成功レスポンスを返します。

### 必要なパッケージ

Node.jsの`fs`モジュールはファイルシステム操作に使用されます。通常、これはNode.jsに組み込まれているため、追加でインストールする必要はありません。

### 追加の考慮点

- アップロードするファイルのサイズやタイプを制限するための追加のバリデーションを実装することを検討してください。
- セキュリティ上の理由から、アップロードされたファイルの保存先を適切に管理し、アクセス制御を行うことが重要です。

これで、SvelteKitを使ってファイルをアップロードし、サーバーのローカルディスクに保存する基本的な方法が実装できます。