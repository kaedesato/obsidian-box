import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "かえでbox in obsidian",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ja-JP",
    baseUrl: "obsidian.kaedesato.work",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    generateSocialImages: true,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "M PLUS Rounded 1c",
        body: "M PLUS Rounded 1c",
        code: "BIZ UDGothic",
      },
      colors: {
        lightMode: {
          light: "#F2F2F2", //page background
          lightgray: "#e8e8e8", //borders
          gray: "#bfbfbf", //graph links, heavier borders
          darkgray: "#5c5c5c", //body text
          dark: "#333333", //header text and icons
          secondary: "#926b6a", //link colour, current graph node
          tertiary: "#F7CAC9", //hover states and visited graph node
          highlight: "rgba(165, 165, 165, 0.15)", //internal link background, highlighted text,
          textHighlight: "#fff23688", //markdown highlighted text background
        },
        darkMode: {
          light: "#0F1C2E",
          lightgray: "#1f2b3e",
          gray: "#374357",
          darkgray: "#e0e0e0",
          dark: "#FAFAFA",
          secondary: "#acc2ef",
          tertiary: "#1F3A5F",
          highlight: "rgba(165, 165, 165, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
