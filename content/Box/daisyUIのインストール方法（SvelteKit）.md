---
modified: 2025-12-10T11:06
---

[Install daisyUI for SvelteKit — Tailwind CSS Components ( version 5 update is here )](https://daisyui.com/docs/install/sveltekit/)

Tailwind CSSをViteでインストールする。

（svでsveltekitをインストールするときにTailwindを選択していれば、Viteのやつが入ってるはず。Viteconfigをみて）

```sh
npm install daisyui@latest
```

src/app.cssに@pluginでdaisyuiを追加する

```css
@import "tailwindcss";
@plugin "daisyui";
```

これで終わりです。



daisyuiのconfig



### For Cursor

　[Cursor setup for daisyUI — Tailwind CSS Components ( version 5 update is here )](https://daisyui.com/docs/editor/cursor/)





--- 
下は古いやつです！！！



daisyUIのconfig

```JavaScript

// tailwind.config.js
/** @type {import('tailwindcss').Config} */

const daisyuiTheme = [ "cupcake","nord","light", "dark"]

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],

  // daisyUI
  daisyui: {
    themes: daisyuiTheme, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  // daisyUI

}
```