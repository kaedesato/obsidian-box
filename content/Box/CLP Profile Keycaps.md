---
{}
---
[https://github.com/vvhg1/clp-keycaps](https://github.com/vvhg1/clp-keycaps)

> [!important] DESとLameのいいとこどりを目指したキーキャップ


![](https://github.com/vvhg1/clp-keycaps/raw/main/assets/CLP_Keycaps.png)


  
## 種類 分類表

全19種類 多すぎ・・・

表

|                    | **Normal**        | **Homing**               | **Tilted 7°**               | **Tilted 14°**               |
| ------------------ | ----------------- | ------------------------ | --------------------------- | ---------------------------- |
| **Saddle**         | Saddle            | Saddle Homing            | Tilted 7°                   | Tilted 14°                   |
| **Dished**         | Dished            | Dished Homing            | Tilted 7° Dished            | Tilted 14° Dished            |
| **R4 (Dished)**    |                   |                          | Tilted 7° Dished R4         | Tilted 14° Dished R4         |
| **Left (Saddle)**  |                   |                          | Tilted 7° Slanted 10° Left  | Tilted 14° Slanted 10° Left  |
| **Right (Saddle)** |                   |                          | Tilted 7° Slanted 10° Right | Tilted 14° Slanted 10° Right |
| **Lower Side**     | Saddle Lower Side | Saddle Lower Side Homing |                             | Tilted 14° Double Slanted    |

親指用 2種類、Thumb, Tilted 7° 1.5U

  

- Saddle （シリンドリカル）
    - **Saddle** – Chicago Stenoキーキャップに似た鞍型のキーキャップ。
    - **Saddle Homing** – Chicago Stenoキーキャップに似た鞍型のキーキャップで、小さな3つの突起があり、主にホーム行の人差し指用。
    - **Tilted 7°** – **Dished**と同様ですが、トッププロファイルが7°傾斜し、前面が低くなっています。
    - **Tilted 14°** – **Dished**と同様ですが、トッププロファイルが14°傾斜し、前面が低くなっています。
- Dished （スフェリカル）
    - **Dished** – 通常の皿型キーキャップ。
    - **Dished Homing** – 通常の皿型キーキャップで、小さな3つの突起があり、主にホーム行の人差し指用。
    - **Tilted 7° Dished** – **Tilted 7°**と同様ですが、トッププロファイルが皿型です。
    - **Tilted 14° Dished** – **Tilted 14°**と同様ですが、トッププロファイルが皿型です。
- R4用 (Dishedオンリー)
    - **Tilted 7° Dished R4** – **Tilted 7° Dished**と同様ですが、最上段用の高いプロファイルです。
    - **Tilted 14° Dished R4** – **Tilted 14° Dished**と同様ですが、最上段用の高いプロファイルです。
    
- Slanted （Saddleオンリー） （傾斜）
    - **Tilted 7° Slanted 10°** – **Tilted 7°**と同様ですが、トッププロファイルが左右いずれかに10°傾斜したバリエーションです。
    - **Tilted 14° Slanted 10°** – **Tilted 14°**と同様ですが、トッププロファイルが左右いずれかに10°傾斜したバリエーションです。
    
- Lower Side
    - **Tilted 14° Double Slanted** – **Tilted 14°**と同様ですが、トッププロファイルが両側に傾斜しており、2つの傾斜したキーキャップの間に配置されることを意図しています。
    - **Saddle Lower Side** – **Saddle**と同様ですが、片側が低くなっており、**Double Slanted**キーキャップへの移行がスムーズになります。
    - **Saddle Lower Side Homing** – **Saddle Homing**と同様ですが、片側が低くなっており、**Double Slanted**キーキャップへの移行がスムーズになります。

- 親指用
    - **Thumb** – **Dished**と同様ですが、前面が低くなっています。
    - **Tilted 7° 1.5u** – **Tilted 7°**と同様ですが、サイズが1.5uです。

  

3x6キーボードの利用表（左手）

簡易系

  

基本エルゴ形

||小指|小指|薬指|中指|人差し指|人差し指|
|---|---|---|---|---|---|---|
|R3|Tilted14 Right|Tilted7 Right|Tilted7|Tilted7|Tilted7 Left|Tilted14 Left|
|R2|Double Slanted|Lower Side|Normal|Normal|Lower Side|Double Slanted|
|R1|Tilted14 Left|Tilted7 Left|Tilted7|Tilted7|Tilted7 Right|Tilted14 Right|


  

### キット あとで考える。

- mini-corne-saddle
    - Normal 6
    
- Base
    
    - Thumb 6個
    - 1.5U 2個
- Ergo Kit
    
      
- R4 Kit
    
    R4-7、R4-14 12個ずつ
    

    

  

## 印刷について

`stl`フォルダのSTLファイルをJLCPCBなどにアップロードするとできる。

`stl/assemblies` に複数まとめて印刷できるやつがある、これを使うとかなりの費用減になる。

  

### assembliesの内容

全9種類おおすぎ。。。
- Assembly10Saddle
	- そのまんま、1個ホーミングが入っている
- Assembly10Tilt14
	- サドルです
- Assembly10Tilt7
	- サドルです
- Assembly10of14Slanted
	- Tilted 14°Slanted 10°の左右が5個ずつ入っている
- Assembly10of7Slanted
	- 同様です。
- Assembly4PairDoubleslant
- Assembly4EachR4
	- 14度と7度のR4を4つずつ入れているやつ。
	- R4はDishedしか無いので...
	- Lower Sideのセット
	- ホーミングが2個、あいだ用が4個、連接が4つ。
- AssemblyThumbOther
	- なぞ
- AssemblyThumbHoming
	- 謎
	- 1.5Uが2個と、ホーミングが2個づつ、Dishedが2個？

### Ergonautに必要なキット




### 印刷の素材

> ==**JLCPCBのSLSナイロンは良好な結果を出すようです。**==MJFナイロンもおそらく機能しますが、未テストで少し高価です。

> レジンプリントのキーキャップは射出成型されたものとそっくりで、とても滑らかです。ただし、「粘着感」があり、指が滑らないという感覚があります。これは一部のマウスで見かけるラバーコーティングに近い感覚です。使い続けると改善されるようですが、個人的にはあまり好みではありません。
> 
> 一方、SLSナイロン製のキーキャップは、典型的なSLS特有の粗いテクスチャがあります。見た目はそれほど美しくないかもしれませんが、手触りは抜群です。このテクスチャによる触覚的なフィードバックが心地よく、指が滑りやすい性質があります。そのため、指を持ち上げる必要がなく、滑るように動かすだけでスムーズに移動できます。

  

  

---

ChatGPTによるGitHubのreadme.mdの翻訳

# CLP Contoured Low Profile MX Keycaps

- このリポジトリには以下のフォルダが含まれています：
    - **fusion360** – [Autodesk Fusion 360](https://www.autodesk.com/products/fusion-360/overview)用のソースファイル。
    - **fusion360/assemblies** – 最大10個のキーキャップを組み合わせたソースファイル。これらのファイルは、モデルをSTLファイルにエクスポートするために使用されます。複数のモデルを1つのファイルに結合することで、3Dプリントサービスの料金を節約できます。多くの場合、プリントサービスはモデルごとに最低料金を請求するためです。
    - **stl** – どのCADソフトウェアやスライサーソフトウェアでも使用できる3Dモデル。
    - **stl/assemblies** – [JLCPCB](https://3d.jlcpcb.com/3d-printing/stereolithography)や[PCBWay](https://www.pcbway.com/rapid-prototyping/3d-printing/)などの3Dプリントサービスで使用できる結合済みのファイル。複数のモデルを1つのファイルに結合することでプリント料金を節約できます。他の組み合わせが必要な場合は、`fusion360/assemblies`フォルダ内のソースファイルを使用して独自のSTLファイルを作成してください。
    - **assets** – 画像やキーキャップの実際の写真が含まれるフォルダ。
- 現在、19種類のキーキャップモデルが利用可能です：
    - **Saddle Homing** – Chicago Stenoキーキャップに似た鞍型のキーキャップで、小さな3つの突起があり、主にホーム行の人差し指用。
    - **Saddle** – Chicago Stenoキーキャップに似た鞍型のキーキャップ。
    - **Dished Homing** – 通常の皿型キーキャップで、小さな3つの突起があり、主にホーム行の人差し指用。
    - **Dished** – 通常の皿型キーキャップ。
    - **Tilted 7°** – **Dished**と同様ですが、トッププロファイルが7°傾斜し、前面が低くなっています。
    - **Tilted 14°** – **Dished**と同様ですが、トッププロファイルが14°傾斜し、前面が低くなっています。
    - **Tilted 7° Dished** – **Tilted 7°**と同様ですが、トッププロファイルが皿型です。
    - **Tilted 14° Dished** – **Tilted 14°**と同様ですが、トッププロファイルが皿型です。
    - **Tilted 7° Dished R4** – **Tilted 7° Dished**と同様ですが、最上段用の高いプロファイルです。
    - **Tilted 14° Dished R4** – **Tilted 14° Dished**と同様ですが、最上段用の高いプロファイルです。
    - **Tilted 7° Slanted 10°** – **Tilted 7°**と同様ですが、トッププロファイルが左右いずれかに10°傾斜したバリエーションです。
    - **Tilted 14° Slanted 10°** – **Tilted 14°**と同様ですが、トッププロファイルが左右いずれかに10°傾斜したバリエーションです。
    - **Tilted 14° Double Slanted** – **Tilted 14°**と同様ですが、トッププロファイルが両側に傾斜しており、2つの傾斜したキーキャップの間に配置されることを意図しています。
    - **Saddle Lower Side** – **Saddle**と同様ですが、片側が低くなっており、**Double Slanted**キーキャップへの移行がスムーズになります。
    - **Saddle Lower Side Homing** – **Saddle Homing**と同様ですが、片側が低くなっており、**Double Slanted**キーキャップへの移行がスムーズになります。
    - **Thumb** – **Dished**と同様ですが、前面が低くなっています。
    - **Tilted 7° 1.5u** – **Tilted 7°**と同様ですが、サイズが1.5uです。

## 印刷方法

- 最良の結果を得るには、高解像度のレジンプリンターや、[JLCPCB](https://3d.jlcpcb.com/3d-printing/stereolithography)や[PCBWay](https://www.pcbway.com/rapid-prototyping/3d-printing/)などのオンライン印刷サービスを使用してください。==**JLCPCBのSLSナイロンは良好な結果を出すようです。**==MJFナイロンもおそらく機能しますが、未テストで少し高価です。
- 自分でキーキャップを印刷したい場合は、`stl`フォルダのSTLファイルを使用してください。複数のキーキャップを一度に印刷したい場合は、`stl/assemblies`フォルダのSTLファイルを使用してください。これらのファイルはすでに結合され、印刷可能です。
- FDM印刷のヒント（[u/justapcgamer](https://www.reddit.com/user/justapcgamer/)からの提供）：
    - 0.2mmノズルを使用すると、表面の感触やキーキャップの軸の寸法精度が格段に向上します。
    - 使用できない場合は、可能な限り細かいレイヤー高さで印刷してください。ただし、0.4mmノズルで印刷した場合は、軸の内部をトリミングするなどの後処理が必要になることが多いです。
    - 可能な限り低いレイヤー高さを使用してください。
    - 片側の底縁を基にして、60〜80度の角度で印刷してください。どのスライスが好みの表面品質になるかによります。80度では表面が良くなりますが、オーバーハングが荒くなります。この画像は70度です：
    - 軸の内部にはサポートを使用しないでください。スライサーでサポートなしに指定してください。
    - 上端にはサポートを使用して、下側が垂れ下がってスイッチに干渉しないようにします。
    - バッチで印刷してください。単一のキーキャップを印刷する場合、冷却を増やしてください。小さいため、複数印刷すると冷却時間が十分で、より良い表面が得られます。
    - プリンターのツールヘッドが片側の冷却が優れている場合は、キーキャップの表面（指が触れる側）がより冷却される側を向くようにして、より良い仕上がりにしてください。
    - マットなフィラメントは少し粗く感じ、シルクPLAは滑りやすくなりますが、通常のPLAが最も良い仕上がりを提供します。

## 謝辞

このプロジェクトは、多くの先人の知恵を借りることなく実現することはできませんでした。特に、braindefender氏の[KLP Lame keycaps](https://github.com/braindefender/KLP-Lame-Keycaps/)には多くのインスピレーションを得ました。そして、氏は優れたフィードバックやアイデアを提供してくれただけでなく、私が見落としていたエラーを修正してくれたり、キーキャップの3D印刷に関する経験を共有してくれたりしました。本当にありがとうございます。このプロジェクトがここまでの品質と多様性を持つことができたのは、彼のおかげです！

もう一つのインスピレーション源は、[Pseudoku's Distorted Ellipsoidal Saddle (DES) and Chicago Stenographer](https://github.com/toniz4/PseudoMakeMeKeyCapProfiles)です。

## ライセンス

すべてのモデルはGNU GPL v3ライセンスの下でライセンスされています。詳細については[LICENSE](https://www.notion.so/kaedesato/LICENSE)ファイルをご覧ください。

---

  

### 参照

[https://kbd.news/CLP-keycap-profile-2182.html](https://kbd.news/CLP-keycap-profile-2182.html)

[https://kbd.news/CLP-How-I-found-my-keycaps-2224.html](https://kbd.news/CLP-How-I-found-my-keycaps-2224.html)