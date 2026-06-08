---
modified: 2026-05-20T16:08
---


ざっくり概要
- Steam Machine（2026）は、小ささ、価格、スペックのバランスが非常に優れている
	- ちっちゃいPCが欲しい人はガチでおすすめ。
- Steam Machineの本当にすごいところは、ソフトウェア
- 実はSteamはドライバーを開発している。
- AMD&AMDの環境なら、SteamOSの恩恵を受けれる
	- SteamOSはSteamデバイスに特化しすぎているので、Bazziteとかがおすすめ。
- これからはAMDの時代が来る…来てほしい…！






---



### Steam Machineについて… ハードウェア

こんにちは。脱WindowsVTuberの佐藤かえでです。
ここ最近ずっと気になっている『Steam Machine (2026)』について、話します。
1っヶ月くらい前かな？Steamからいくつかのデバイスが発表されました。
その中の一つがSteam Machineで、簡単に言うとデスクトップ版Steam Deckです。

なんかネットとか見てると、しょぼいとか、普通にゲーミングPC買ったほうがいいとか言ってる人がいるけど…
Steam Machineのすごいところは、大きさと値段とスペックのバランスがめちゃめちゃいいというとこなんですよ。

私は、相方から洗脳を受けて、ちっちゃいPCを使うようになったんだけど、スペックの維持したまま小さくしようとするとめちゃめちゃコストがかかるんよ。いま使ってるマザーボードも前にNoteに書いたやつなんだけど、ノートパソコン用のCPUをデスクトップに組み込んだと言うやつで、そういう感じで、特殊なハードウェアを使う必要があるんだけど、
Steam Machineはそれの最高峰レベルだと思っている。
というのも、これだけ小さくて、グラフィック重視のパソコンって、市場にほとんどなくて、あったとしても結構高いんだよね。MinisforumのAtomManとか、ZotacのZboxとかになる。20万以上する... 
ちょうどいいスペックで、小さくて、値段も安いというのがなくて、Steam Machineはめちゃめちゃいいと思う。

まあ、でも逆に言うと、サイズにこだわりがないのであれば、もっと安く作れる。
だから、Steam Machineは小さいPCが欲しい人向けの標品ににはなっている。

あと、スペック不足じゃない？みたいな話があるんだけど、
Steam MachineはLinuxをベースにしたSteamOSでできていて、それだけでめちゃめちゃ軽いんだけど、
実はSteamはGPUのドライバーも開発してるんだよね。



---

### Steamはドライバーを開発している

というか、ドライバーどころじゃなくて、もろもろ開発してるんだよね。
普通にLinux自体の開発をしてたり、シェーダーコンパイラとかも開発してたりするんだよね。
あとWindowsのゲームをLinuxで動くようにするProtonというソフトを開発してたり…

そういう、ソフト面の開発がすごいのよ。

それらが最適に組み合わさって、LinuxなのにWindowsより、Windowsゲームを軽く動かせるみたいなことになってるんだよね。


---

### 脱WindowsしてSteamの恩恵を受けよう

Steamが開発しているProtonとかドライバーは、実はオープンソースになっていて誰でも使える。



そこで推奨したいのが**『Bazzite』**です。 Fedora AtomicをベースにしたこのOSは、SteamOSのゲーム体験（Game Mode）を維持しつつ、最新のパッケージと堅牢なシステム管理を提供します。 Steam Machineを買うのも良いですが、もしお手元にAMD構成のPCがあるなら、Bazziteを入れるだけで、同等の『最適化された体験』が得られます。」

一応、Bazziteはnvidiaでも動くんだけど、AMD&AMD環境のほうがいいかなーと思う。
最低でも、Androidアプリが使えるようになる、Waydroidはnvidiaでは動かない。


**(6:30) エンディング：AMDの時代への期待** 「ハードウェアのバランスと、ソフトウェアの執念。この2つが噛み合った時、PCゲーミングは新しいフェーズに入ります。 IntelとNVIDIAが支配的だった時代から、オープンソースドライバーを武器にしたAMDとValveの時代へ。 このパラダイムシフトを、今後も注視していきたいと思います。

それでは、また次回の動画でお会いしましょう。」


---

### メモ

steam machine スペック

CPU セミカスタムAMD Zen 4 6C / 12T
最大4.8 GHz、30W TDP

GPU セミカスタムAMD RDNA3 28CU
最大持続クロック2.45GHz、TDP 110W

RAM
16GB DDR5 + 8GB GDDR6 VRAM

サイズ
高さ152mm（脚を除くと148mm）、奥行き162.4mm、幅156mm
3.8L

重量
2.6kg

AtomMan 3.8L 26万円 5060 VRAM 8GB
Zotac 2.6L 35万円 5070ti VRAM16GB


ドライバー MESA
Vulkan RADV
コンパイラ ACO


一部のタイトルと言うより大体のタイトルでSteamOSが勝ってる
[SteamOS tested on dedicated GPUs: No, it’s not always faster than Windows - Ars Technica](https://arstechnica.com/gadgets/2025/12/steamos-vs-windows-on-dedicated-gpus-its-complicated-but-windows-has-an-edge/)


AMDがMesaに注力するというアプデ
[Radeon™ Software for Linux® 25.20.3 Release Notes](https://www.amd.com/en/resources/support-articles/release-notes/RN-AMDGPU-UNIFIED-LINUX-25-20-3.html)