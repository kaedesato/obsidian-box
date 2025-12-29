---
modified: 2025-12-28T16:34
---




できたこと
- Questの無線PCVR
- ハンドトラッキング
- VRCのストリームカメラ

試したけどできてないこと
- オーバーレイ

まだ試してないこと
- Rebocap（多分無理）
- 



---
- **WiVRn**
	- とりあえずVRをやるだけだったら快適に動く。
	- SteamVRではない。
		- SteamVRの機能は使えない。
	- ~~オーバーレイがしょぼいので配信者は使えない~~。
		- SteamVRのオーバーレイとか、VDに慣れた人は結構きついかも。
		- 最新版いれたら全然良くなってた。
- SteamLink
	- なんかドライバーの問題で現時点では動かない。
- ALVR
	- 利用する際はSteamVRに起動オプションをつける。
	- 内蔵グラフィックを無効化すると割と安定して動作する。
	- デスクトップが見れない…
		- wayland難しい



Mesaのアップデート

sudo dnf remove mesa-va-drivers-freeworld
sudo dnf copr enable xxmitsu/mesa-git
sudo dnf update --refresh

sudo dnf copr disable xxmitsu/mesa-git
sudo dnf distro-sync --refresh