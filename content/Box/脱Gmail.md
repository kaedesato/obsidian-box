---
modified: 2025-12-13T15:32
---
結論としては
[[ThunderbirdでGmailを使う]]
になりそう


いま
Cloudflare Email routingで転送してる
Gmail独自のラベルとかアーカイブが使いづらいと思っている
クライアントはPCはThunderbird、
スマホはGmailにしようかなと思っている

とりあえず、IMAPに対応したメールボックスと、SMTPサーバーを用意する必要がある
（別々でもいい。多少有料でもいい）

いままで検討してだめだったやつ
- Outlook
	- microsoftが嫌いなので…
- Protonmail
	- IMAPとSMTPは課金だった月3ドル
- Yahoo
	- なんか高齢者がつかってるイメージ

ハードル
- 送信サーバーの信頼性
	- 個人で立てたDockerとかでメールを送信すると迷惑メールに入りそう
- OAuthでGoogleアカウントと紐付けているサービスはGmailになってしまう


移行先案

| サービス    | 年払月換算 | 用量  |
| ------- | ----- | --- |
| さくら     | 110   | 20  |
| Outlook | 0     |     |
| lolipop | 200   | 120 |
| zoho    | 120   | 5   |
