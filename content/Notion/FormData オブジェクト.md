---
modified: 2025-01-05T18:37
---
  

  

```TypeScript
async function handleSubmit(event: Event) {
    event.preventDefault(); // フォームのデフォルトの送信動作を防ぎます。
    uploading = true; // アップロード中の状態を示すフラグを立てます。

    try {
        const formData = new FormData(event.target as HTMLFormElement); // フォームデータを収集します。
        const response = await fetch('/', {
            method: 'POST', // POSTメソッドでリクエストを送信します。
            body: formData // フォームデータをリクエストのボディに含めます。
        });

        const result = await response.json(); // レスポンスをJSONとして解析します。
        uploading = false; // アップロードが完了したのでフラグを下ろします。

        if (result.error) {
            throw(Error) // エラーがあれば例外を投げます。
        }
    } catch (error) {
        console.error(error); // エラーをコンソールに出力します。
        uploading = false; // エラーが発生してもフラグを下ろします。
    }
}
```

### 詳細な説明

1. `**event.preventDefault()**`:
    - フォームのデフォルトの送信動作（ページのリロードなど）を防ぎます。
2. `**uploading = true**`:
    - アップロード中であることを示すために、`uploading` フラグを `true` に設定します。これにより、UIでスピナーなどを表示することができます。
3. `**const formData = new FormData(event.target as HTMLFormElement)**`:
    - フォームのデータを `FormData` オブジェクトに変換します。`event.target` は送信されたフォームを指します。
4. `**const response = await fetch('/', { method: 'POST', body: formData })**`:
    - フォームデータを含むPOSTリクエストをサーバーに送信します。`fetch` 関数は非同期で動作し、レスポンスが返ってくるまで待機します。
5. `**const result = await response.json()**`:
    - サーバーからのレスポンスをJSON形式で解析します。
6. `**uploading = false**`:
    - アップロードが完了したので、`uploading` フラグを `false` に設定します。
7. `**if (result.error) { throw(Error) }**`:
    - レスポンスにエラーが含まれている場合、例外を投げます。
8. `**catch (error)**`:
    - 例外が発生した場合のエラーハンドリングを行います。エラーをコンソールに出力し、`uploading` フラグを `false` に戻します。

この関数は、フォームの送信を非同期で処理し、アップロードの進行状況を管理するために使用されます。