---
Q: false
pin: false
最終更新日時: Invalid date
date: 2024-12-27T22:34
---
  

やりたい技術スタック

- GitHub (大前提)
- SvelteKit
- daisyUI
- Vercel / **Cloudflare Pages**
- Vercel PostgreSQL / Supabase / **Cloudflare D1**

Cloudflare系統が実装が難しそうだけど、そこで完結したら早そうと思って一旦それを目標にします。

  

- ESlint, Prettierを使う
- Vitestを使う

  

  

  

セットアップ（ここ最近やりすぎてる。。。）

```Shell
npm create svelte@latest
npm install
git init && git add -A && git commit -m "Initial commit"
```

とりあえずGitHubにPushして、Vercelとコネクトしてデプロイまでできた。

  

次はdaisyUIの設定をする。

[https://tailwindcss.com/docs/guides/sveltekit](https://tailwindcss.com/docs/guides/sveltekit)

[https://daisyui.com/blog/how-to-install-sveltekit-and-daisyui/](https://daisyui.com/blog/how-to-install-sveltekit-and-daisyui/)

  

  

```Shell
npm install -D tailwindcss postcss autoprefixer daisyui
npx tailwindcss init -p
```

  

`tailwind.config.js`

```TypeScript
/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui,],
  
   daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

  
}
```

  

rootの`+layout.svelte`

```TypeScript
<script>
  import '../app.css';
</script>

<slot />
```

  

  

  

## ダークテーマとライトテーマをサクッと実装する

configが`themes: false` である前提

まず`app.html`に_`data-theme`_`="light"`を追加

```HTML
<!doctype html>
<html lang="ja" data-theme="light">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>
```

  

> [!info] Tailwind Theme Controller Component — Tailwind CSS Components ( version 4 update is here )  
> Tailwind Theme Controller examples: If a checked checkbox input or a checked radio input with theme-controller class exists in the page, The page will have the same theme as that input's value.  
> [https://daisyui.com/components/theme-controller/](https://daisyui.com/components/theme-controller/)  

  

Theme Controller を使う

```HTML
<label class="swap swap-rotate">
  
  <!-- this hidden checkbox controls the state -->
  <!-- valueをdarkに変える。（valueが変化先） -->
  <input type="checkbox" class="theme-controller" value="dark" />
  
  <!-- sun icon -->
  <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  <!-- moon icon -->
  <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
```

  

  

## サイドメニューを作る

[https://daisyui.com/components/drawer/#responsive](https://daisyui.com/components/drawer/#responsive)

これをコピペする。

```HTML
<div class="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
	  <slot />
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```

+layout.svelteに記載するときはpage content hereにslotを置く。

  

このボタンにアブソリュートを入れたり、いろいろする。

  

```HTML
<script>
  let drawerOpen = false;
</script>

<div class="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" bind:checked={drawerOpen} />
  <div class="drawer-content flex flex-col items-center justify-center min-h-screen">
    <!-- Page content here -->
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden absolute top-4 left-4 z-10">
      Open drawer
    </label>
    <div class="flex flex-col items-center justify-center w-full h-full">
      <slot />
    </div>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>

<style>
  .drawer-content {
    position: relative;
  }
</style>
```

  

> ここで、いくつかのポイントを説明します：
> 
> 1. `**min-h-screen**`：`drawer-content`クラスに`min-h-screen`を追加することで、画面全体の高さを持たせています。これにより、コンテンツが中央に位置するようになります。
> 2. **ボタンの位置調整**：`label`要素に`absolute`、`top-4`、`left-4`、および`z-10`クラスを追加して、ボタンが画面の左上に常に表示されるようにしました。
> 3. `**justify-center**`**と**`**items-center**`：コンテンツが中央に配置されるように、`flex`ボックスと`justify-center`および`items-center`クラスを使用しました。
> 4. **固定レイアウト**：`position: relative;`を使用して、必要に応じて相対的な位置調整が可能にしました。
> 
> これで、画面の大きさに関係なく、コンテンツが中央に表示され、一貫したUIが維持されるようになります。

だそうです。

  

  

  

# DB周りのことをやる

## Prismaのセットアップ

SQL文とか絶対に書きたくないので、PrismaなどのORMを使う。

```HTML
npm install prisma --save-dev
npx prisma init
```

これでPrismaのスキーマファイルができるので、色々設定する。