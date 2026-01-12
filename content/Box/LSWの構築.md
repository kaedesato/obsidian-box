---
modified: 2026-01-12T13:40
---

> [!important] 多分Wine/Bottlesより安定する
> 



WSLの逆
Linux Subsystem Windows


- virt-manager
	- Virtio driver
- WinApps


---

AIコピペ（わたし編集済み）

### 事前作業 WindowsのISOイメージをダウンロードしておく

[Windows 11 のダウンロード](https://www.microsoft.com/ja-jp/software-download/windows11)

### KVM (Virt-Manager) のセットアップ

#### 手順①：必要なツールのインストール
ターミナルで以下を実行して、仮想化パッケージグループをごっそり入れます。

``` sh
sudo dnf install @virtualization
```

#### 手順②：サービスの起動と自動起動設定
インストールが終わったら、仮想化サービス（libvirtd）を起動します。

``` sh
sudo systemctl enable --now libvirtd
```

#### 手順③：権限の設定
毎回 `sudo` なしで Virt-Manager を開けるように、今のユーザーを `libvirt` グループに追加します。

```  sh
sudo usermod -aG libvirt $(whoami)
```

#### 手順④：再起動
**※ここで一度、PCを再起動（またはログアウト＆ログイン）してください。** これをしないとグループ追加が反映されず、Virt-Managerがエラーを吐くことがあります。


### 3. 次のステップ

再起動後、メニューから **「仮想マシンマネージャー (Virtual Machine Manager)」** を起動してください。

Windows 10 または 11 の ISOファイルは持っていますか？

もし持っていれば、インストールを進めて、RebocapのUSBドングルを仮想マシンに接続（パススルー）する方法を案内します。

ISOの準備状況だけ教えてください！