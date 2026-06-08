---
modified: 2025-12-10T11:06
---


### Kiloのモード

各モードごとに、利用するモデルを変える・設定することができるみたい。


### Custom Rules
重要
[Custom Rules \| Kilo Code Docs](https://kilocode.ai/docs/advanced-usage/custom-rules)

`.kilocode/rules/`に保存する。
一応 `.clinerules`も読めるみたい

コーディング規約とかを書いておく
Markdown


### Memory Bank
重要
[Memory Bank \| Kilo Code Docs](https://kilocode.ai/docs/advanced-usage/memory-bank)

現在のプロジェクトの情報を解析して保存しておくもの。

Memory Bankのファイル
- brief.md
- product.md
- context.md
- architecture.md
- tech.md
- tasks.md
など…これ以外を入れてもいいらしいけど、これらは最低でも入れておく（自動的に作られる）



### Codebase Indexing

Vector Storeつくるやつ。
Vectorを保存するDBサーバー（Qdrant）が必要。（Dockerなどで立てる必要がある）

別途、Embeddedプロパイダーが必要になる。
（OpenAIか、Geminiか、Ollama）

規模が大きくなってからでもいい？

Clineは意図的にこの機能が無いみたい…
[Why Cline Doesn't Index Your Codebase (And Why That's a Good Thing) - Cline Blog](https://cline.bot/blog/why-cline-doesnt-index-your-codebase-and-why-thats-a-good-thing)
とりあえず、チャンクでくぎることがプログラミングには向いてないだろ！みたいなこと書いてある。
→ [[Obsidian + Kilo + Qdrant でいい感じのシステム組めそう]]



### Kiloのモデル


![[KiloやClineのモデル選定]]



### 設定

レートリミットの設定
→ 3sにしておくと良い？。Open Routerのフリーのレートリミットが1分間に20Reqなので。


