---
modified: 2025-05-03T20:50
---

自分で運営してるサーバーだからこそ、バックアップしておかないと死にそう。


### JSONのダウンロード


### パスキーの取り扱い
Proton PassにJSONをインポートするとパスキーがうまくインポートされない。
VaultWardenからBitWardenでは、うまくインポートできて、パスキーがしっかり動作する。


TOTPは課金してみないと分からない。
今度実験します。
→ これVaultWardenからVaultWardenでうまく動くかどうかを確かめればいいだけかも？



### VaultWardenのサーバーデータのバックアップ。

cronで、rsyncで、どっかに転送する。
まだやってない。

転送先がきまってない。
- S3 もしくは S3互換サーバー
- Googleドライブ



#### 番外編 データベースをBaaSにする

一応、VaultWardenはPostgresやMySQLのDBを使える。
なので、SupabaseやCloudflare R2などを使ってデータをそこに保存することができる。