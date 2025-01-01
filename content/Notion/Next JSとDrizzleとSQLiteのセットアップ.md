---
Q: false
pin: false
最終更新日時: Invalid date
関連:
  - "[[Next JSとCloudflareとDrizzleで適当になにか作りたい]]"
  - "[[プログラミング]]"
2ホップリンク: https://www.notion.so/14c680a9513f402cb546a22bda05f95b, https://www.notion.so/53ca0bb5fcaf49e788eee27974e0266d,https://www.notion.so/0a41298b69ab4dc794deb8b3d3d1ee05, https://www.notion.so/14c680a9513f402cb546a22bda05f95b, https://www.notion.so/34f92ffc1e4c4d1b857b21a7d6b1b1de, https://www.notion.so/3d616c7cd72f4094801215141f8c2728, https://www.notion.so/68683c8593d4479c99a07fde3e6774bc, https://www.notion.so/7aabe6e7f03a44b28cdaeb92e3ef259b, https://www.notion.so/90e8af62936e4d72a8ce6914ad492062, https://www.notion.so/9ba61d2d4f2044349a218692fcc1e00b, https://www.notion.so/ca8169668e454da2a8959019045176b4, https://www.notion.so/d38b1d3b7fcd4e1d91dcec4bb1a4e39b, https://www.notion.so/de44079af2ea4e5aa1a89d5652190257, https://www.notion.so/ebd3d7a92c894323b0da135a2bdefa13, https://www.notion.so/fa1ab1433fe44fb981cf3eecfca12657
date: 2024-12-27T22:34
---
  
DrizzleのAIに聞いたら出てきた  

Better SQLiteっていうのがあるらしい。

というかlibSQLっていうのがあるらしい。

いったん公式チュートリアルがBetterSQLite3で動いているからそれで行こう。

  

  

  

  

NodeJSとSQLiteでDrizzle ORMを使用するには、以下の手順に従ってください：

1. 必要なパッケージをインストールします：

```Shell
npm i drizzle-orm better-sqlite3
npm i -D drizzle-kit
```

[(1)](https://orm.drizzle.team/docs/get-started-sqlite#better-sqlite3)

1. データベース接続を設定し、Drizzleインスタンスを作成します：

```TypeScript
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);
```

  

1. スキーマを定義します：

```TypeScript
import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

const users = sqliteTable('users', {
 id: text('id'),
 textModifiers: text('text_modifiers').notNull().default(sql`CURRENT_TIMESTAMP`),
 intModifiers: integer('int_modifiers', { mode: 'boolean' }).notNull().default(false),
});
```

1. クエリを実行します：

```TypeScript
const result = await db.select().from(users);
```

Next.js 13のapp directoryを使用している場合は、`next.config.js`に以下の設定を追加する必要があります：

```JavaScript
/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["better-sqlite3"],
  },
}
export default config
```

[(2)](https://github.com/drizzle-team/drizzle-orm/issues/249)

これにより、Next.jsとSQLiteを使用してDrizzleを正常に動作させることができます。 [(1)](https://orm.drizzle.team/docs/get-started-sqlite#better-sqlite3) [(2)](https://github.com/drizzle-team/drizzle-orm/issues/249)