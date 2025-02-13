---
modified: 2025-01-05T18:37
---
# SNSの二乗三乗の法則

SNSにおける、二乗三乗の法則

ユーザー数が多くなると、費用対効果が悪くなる。

二乗三乗の法則の例

筋肉の力は断面積、体重は体積に比例して増えるため、動物の体の大きさには限界がある

コスト面

- サーバーの一番のコストは、データベースに対する読み書き  
- ユーザー数に対して、読み書きは2乗で増えていく  
- 仮に全てのユーザーが全てのユーザーをフォローしていると考えると、nC2だけ繋がりが生まれるので、二乗に比例する。  
- 実際には、$ O(n)= n nくらいのオーダーになると思う。  

収益面

- 有料会員の収入はユーザー数に比例して増える。  
- オーダーは$ O(n)= n  
- 広告収入についても、ユーザーに比例して増える。$ O(n)= n  

ということで、コストのオーダーが収益のオーダーより大きくなってしまいます。

このことが示すことは、ユーザー数をある程度抑えるか、データベースに対するReadを減らす方法を考えなければならないのです。