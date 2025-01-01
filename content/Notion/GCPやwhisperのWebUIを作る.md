---
Q: false
pin: false
最終更新日時: Invalid date
date: 2024-12-27T22:34
modified: 2024-12-27T22:34
created: 2024-12-27T22:34
---
  

2024年6月12日

一旦いろいろ作業した。

サービスアカウントキーのJSONを入れた

[https://cloud.google.com/docs/authentication/provide-credentials-adc?hl=ja](https://cloud.google.com/docs/authentication/provide-credentials-adc?hl=ja)

  

`.env`に書いておいて、`dotenv`で読み込んでる。

```Plain
GOOGLE_APPLICATION_CREDENTIALS="./secret/say-test.json"
```

  

あとはサービスアカウントに対して、GCSの編集者ロールを割り当てた。

  

  

明日はこれやりたい。

[https://cloud.google.com/storage/docs/uploading-objects-from-memory?hl=ja](https://cloud.google.com/storage/docs/uploading-objects-from-memory?hl=ja)

[https://cloud.google.com/storage/docs/uploading-objects?hl=ja#storage-upload-object-code-sample](https://cloud.google.com/storage/docs/uploading-objects?hl=ja#storage-upload-object-code-sample)

[https://cloud.google.com/speech-to-text/docs/async-recognize?hl=ja](https://cloud.google.com/speech-to-text/docs/async-recognize?hl=ja)

  

2024年6月13日

  

メモリからオブジェクトのアップロードをやっている。

  

取り合えずコピペで何とかなった。

アップロード完了時に終わりましたみたいな表示が欲しい。