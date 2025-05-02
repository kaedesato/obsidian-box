---
modified: 2025-05-02T14:15
tags:
  - programming
---

[[SvelteKit]]
[[Netlify]]


> なんか基本は自動的にデプロイされるらしく、ここに書かれていることはやらなくていいらしい。

なんかサーバーサイドの処理がある場合、
Functinosをデプロイする必要がある。
（これ、どのドキュメントにも書かれてない…）

いろいろ実験しておかないと…


Netlify.toml


```toml
[build]
  command = "npm run build"
  publish = "build"
  functions = ".netlify/functions-internal"

[functions]
 directory = ".netlify/functions-internal"
```
