---
modified: 2025-05-12T13:16
---



### 1. Upstream リポジトリを追加する

Fork したリポジトリを Codespaces で開いたら、まず `git remote -v` でリモートリポジトリの状態を確認します。  
通常、`origin` だけが表示されます。

```sh
git remote -v
```

元のリポジトリ（upstream）が設定されていなければ、次のコマンドで追加します。

```sh
git remote add upstream https://github.com/jackyzha0/quartz.git
```

追加できたか確認：

```sh
git remote -v
```

### 2. Upstream の変更を取得する

元のリポジトリの変更を取得するために、次のコマンドを実行します。

```sh
git fetch upstream
```

### 3. Fork したリポジトリの main ブランチを Upstream の最新の状態に更新する

まず、v4 ブランチに移動します。

```sh
git checkout v4
```

そして、Upstream の main ブランチの変更をマージします。

```sh
git merge upstream/v4
```

### 4. Fork したリポジトリに変更をプッシュする（オプション）

Fork したリポジトリ（GitHub の自分のリポジトリ）にも反映させたい場合は、次のコマンドでプッシュします。

```sh
git push origin main
```

---

これで、元のリポジトリの更新を Fork したリポジトリに反映できます！