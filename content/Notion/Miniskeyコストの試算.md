---
modified: 2025-01-05T18:37
---
# Miniskeyコストの試算

`#miniskey`

`#Misskey`

にじみす先生の情報

- アクティブ400に対して6コア メモリ12GB  
- 800に対して10コアメモリ32GB  

基本情報

- CDNがすべてを解決している気がする。  
- CDNにお金かけたい  
- 無料で使える。。。。やばすぎ。  
- CPUそんなに使わない  
- メモリはユーザー、一人あたり100mbもあればいいかな  
- 50MBでいい気がしてきた  
- Vultrのベアメタル一番安い。  

インフラの費用整理

- Vultr レギュラー 6コア16GB 80ドル  
- これで160人ほど収容したい。  
- にじみす先生はこれの倍くらい収容してた  
- オブジェクトストレージ cloudflare r2 1GB 0.015ドル  
- cloudflareの有料プラン  
- その他  
- ネットワーク利用料は誤差レベルな気がする(1TB10ドル)  
- メール  

インフラの費用

- 2コア16GBで84.59ドル→12700円くらい？（e2）  
- 1コア4GBで31ドル  
- ブートディスク6ドルくらい  
- 帯域幅が1gbps  
- ↑ N2の方がおすすめらしい  
- 1コア25.8ドル、1GB3.44ドル。2コア8GB 79ドルから。  
- ブートストレージは1GB0.2ドルとか  
- 帯域幅が10gbps  
- Vultr 6core 16gb 80ドル  
- 2コア4GBで20ドル  
- ブートストレージ込み  
- オブジェクトストレージ  
- Cloudflare1TB 15ドル  
- read1000万回3.6ドル  
- write100万回4.5ドル  
- GCS 1TB　23ドル  
- Read 1000万回4ドル  
- Write　100万回10ドル  
- Vultr 1TB 5ドル 安すぎない？  
- ネットワーク使用量1TBあたり$10  
- ネットワーク利用料  
- 1GB　0.14ドル(GCP)  
- Vultrは1GB0.01ドル。クソ安い。  
- CDN  
- GCP　1GB 0.09ドル  
- 一応CDNを通したほうが安い  
- Cloudflare無料？？？？  
- よくわからん  
- SQL  
- Alloy 2コア16から。290ドル＋ストレージ1GBあたり0.5ドル（バックアップ込み）  
- cloud SQL 1コア3.75GBから 64ドル＋ストレージ1GBあたり3.2ドル（バックアップ込み）  
- AlloyDB Omniみたいなのがあるらしい  
-  

寄付先

- Misskey  
- にじみす  
- Yukimochi  

Nyasakeの運用

- Vultrのレギュラー 1core 2GB 10ドル  
- ドメイン  
- nyasake.miniskey.comでいい？  
- リレーサーバー  
-