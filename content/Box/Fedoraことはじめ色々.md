---
modified: 2026-01-23T01:16
---

### Fedoraインストール



### Enable Third Party Repositories

オープンソース信者じゃない限り必ずやろう。
Fedoraは初期設定で、自由ライセンスではないアプリケーションをインストール**できない**（検索に出てこない）ようになっている。
このThird Party Repositoriesを許可すると、アプリの検索でてくるようになる。

初回起動時に出てくる「ようこそセンター」(Welcome Center)から、有効化できる。
もし閉じてしまっても、Fedoraのメニューから「ようこそ」とか「Welcome」で検索すると出せる。

CLI操作ができる人は自分で調べてやって。Fedora公式サイトにある。


###  ソフトのインストール、アップデートの高速化

dnfのの設定を変更する

```sh
sudo nano /etc/dnf/dnf.conf
```

```sh
max_parallel_downloads=20
fastestmirror=True
```


###  日本語環境の整備

![[Fedoraで日本語入力環境の整備]]

---


- [[Fedoraで配信]]
- 自動ログイン設定
- [[Fedora KDEでアプリの自動起動]]





いろいろインストール
Fedoraのアプリのインストール方法はだいたい４種類で
Flatpak, DNF, AppImage, 手動（sh）がある。

- DNF
	- Chrome
	- Brave
	- Antigravity
- Flatpak
	- Steam (?)
	- OBS
	- Discord
	- bottles
	- Zen
	- Obsidian
- appimage