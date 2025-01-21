---
modified: 2025-01-05T18:37
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