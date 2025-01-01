---
modified: 2025-01-02T00:35
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