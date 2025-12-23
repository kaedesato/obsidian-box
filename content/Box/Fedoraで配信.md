---
modified: 2025-12-23T23:04
---


ゲームキャプチャを有効化
obs-vkcaptureってやつをインストールする
```sh
sudo dnf install @development-tools gcc-c++ cmake \
    vulkan-loader-devel vulkan-headers obs-studio-devel \
    libglvnd-devel libX11-devel libxcb-devel wayland-devel
```

``` sh
# ビルド用ディレクトリの作成と移動
mkdir -p build && cd build

# ビルド設定（システムへのインストールを指定）
cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release ..

# コンパイル
make

# インストール（管理者権限が必要）
sudo make install
```


---


H.265対応のドライバーをインストール

```sh
sudo dnf swap mesa-va-drivers mesa-va-drivers-freeworld
```


```sh
flatpak install flathub org.freedesktop.Platform.GL.default
```

