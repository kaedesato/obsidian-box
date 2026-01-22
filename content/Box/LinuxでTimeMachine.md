---
modified: 2026-01-23T01:28
---

Linuxとは…（省略）

TimeMachineとは… Macで使えるバックアップシステム。使ったことないけど完成度高いイメージ。
OSの全体のコピーを取りつつ、差分バックアップで過去のある時点に戻れる。

---


### Timeshiftってやつでできるっぽい。

Linuxのファイルシステム（**ext4**）でディスクをフォーマットしておく必要がある。
→ Linuxの権限の設定の保持ができないため。

[Linux Mint Timeshift バックアップツールの使い方と重要なポイント - アラコキからの Raspberry Pi 電子工作](https://arakoki70.com/?p=10673)


```sh
sudo dnf update
sudo dnf install timeshift
```

あとは、シンプルなGUIなのでGUIに従ってやればいい…



### 念の為Rescuezillaでもバックアップを作っておく。
