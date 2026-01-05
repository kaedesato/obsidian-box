---
modified: 2026-01-05T09:40
---


Tailscaleのインストール

```sh
sudo dnf install tailscale
sudo systemctl enable --now tailscaled
sudo tailscale up
```


Sunshineのインストール

```sh
flatpak install --system flathub dev.lizardbyte.app.Sunshine
flatpak run --command=additional-install.sh dev.lizardbyte.app.Sunshine

```