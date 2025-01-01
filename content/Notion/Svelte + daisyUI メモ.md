---
Q: false
pin: false
最終更新日時: Invalid date
関連:
  - "[[プログラミング]]"
  - "[[Svelte]]"
2ホップリンク: https://www.notion.so/0a41298b69ab4dc794deb8b3d3d1ee05, https://www.notion.so/14c680a9513f402cb546a22bda05f95b, https://www.notion.so/34f92ffc1e4c4d1b857b21a7d6b1b1de, https://www.notion.so/3d616c7cd72f4094801215141f8c2728, https://www.notion.so/68683c8593d4479c99a07fde3e6774bc, https://www.notion.so/7aabe6e7f03a44b28cdaeb92e3ef259b, https://www.notion.so/90e8af62936e4d72a8ce6914ad492062, https://www.notion.so/9ba61d2d4f2044349a218692fcc1e00b, https://www.notion.so/ca8169668e454da2a8959019045176b4, https://www.notion.so/d38b1d3b7fcd4e1d91dcec4bb1a4e39b, https://www.notion.so/de44079af2ea4e5aa1a89d5652190257, https://www.notion.so/ebd3d7a92c894323b0da135a2bdefa13, https://www.notion.so/fa1ab1433fe44fb981cf3eecfca12657,https://www.notion.so/3d616c7cd72f4094801215141f8c2728, https://www.notion.so/53ca0bb5fcaf49e788eee27974e0266d
date: 2024-12-27T22:34
---
> [!info] How to install SvelteKit with daisyUI? — Tailwind CSS Components ( version 4 update is here )  
> SvelteKit is a meta framework for building web applications.  
> [https://daisyui.com/blog/how-to-install-sveltekit-and-daisyui/](https://daisyui.com/blog/how-to-install-sveltekit-and-daisyui/)  

これでしかない。これ見てやればよかった。

  

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