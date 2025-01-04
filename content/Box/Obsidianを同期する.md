---
modified: 2025-01-02T00:45
---
[[Obsidian]]

いろいろなやり方があるけど
一番かんたんなやり方は、Remotely Saveを使う方法です。
今回は無料枠が充実しているCloudflareのストレージを同期サーバーにします。

[[DropboxでObsidianを同期する]]

### Cloudflareの準備

![[Cloudflareのアカウントを作る]]

![[Cloudflare R2のバケットを用意する]]

![[Cloudflare R2のAPIキーを発行する]]


### Remotely Saveの設定

まずはプラグインのインストール


| 設定項目    | 入力内容 |
| ------- | ---- |
| エンドポイント |      |
| キー      |      |
| Secret  |      |
| レギオン    |      |
| バケット    |      |

あとはチェックして同期可能

### QRで設定をまるごとコピー

