---
modified: 2025-12-26T21:26
---
Flatpakでインストールした場合、DiscordとかのGUIで設定しても無理。
KDEシステム設定で自動起動を作る必要がある。

そしてデスクトップが起動する前にコマンドが走ってしまうので
`~/.config/autostart/` にあるデスクトップファイルKWriteなどで以下のように編集して
2秒ほど寝かせて起動する。

```
Exec=/bin/sh -c "sleep 2; /usr/bin/flatpak run com.discordapp.Discord "
```

ちなみに隠しファイルの表示は`Ctrl + H`でできる
