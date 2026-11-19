import { softtechTheme } from "./themes/softtech/index";
import { defineConfig } from "@riebeckite/core";
import { obsidianMarkdown } from "@riebeckite/plugin-obsidian-markdown";
import { seo } from "@riebeckite/plugin-seo";
import { mdx } from "@riebeckite/plugin-mdx";
import { properties } from "@riebeckite/plugin-properties";
import { breadcrumbs } from "@riebeckite/plugin-breadcrumbs";
import { navigation } from "@riebeckite/plugin-navigation";
import { responsiveImage } from "@riebeckite/plugin-responsive-image";
import { lightbox } from "@riebeckite/plugin-lightbox";
import { taxonomy } from "@riebeckite/plugin-taxonomy";
import { hoverPreview } from "@riebeckite/plugin-hover-preview";
import { richEmbed } from "@riebeckite/plugin-rich-embed";

export default defineConfig({
  site: {
    title: "東北工業大学 ソフトウェア技術研究会",
    description: "",
    baseUrl: "",
    locale: "ja",
  },
  content: {
    directory: "content",
  },
  spa: true,
  theme: softtechTheme(),
  plugins: [
    obsidianMarkdown(),
    seo({ sitemap: true, robots: true }),
    mdx({ trusted: true }),
    properties({ include: ["created", "modified", "tags", "status"], fields: { created: { type: "date", format: "yyyy-MM-dd" }, modified: { type: "date", format: "yyyy-MM-dd" }, tags: { type: "tags", variant: "chips" }, status: { type: "badge", variants: { active: "success", draft: "warning", archived: "danger" } } } }),
    breadcrumbs(),
    navigation({
      items: [
        { label: "トップ", href: "/" },
        { label: "活動の様子", href: "/activities" },
        { label: "入部 ・ お問い合わせ", href: "/join" },
        { label: "部員", href: "/members" },
      ],
    }),
    responsiveImage({ lazy: true, decoding: true, sizes: "100vw", widths: [640, 1280, 1920] }),
    lightbox({ selectorClass: "rr-lightbox-trigger" }),
    taxonomy({ tags: true, folders: true, related: true }),
    hoverPreview({ delay: 120, excerptLength: 160, selector: 'a[href^="/"]' }),
    richEmbed({ providers: ["youtube"] }),
  ],
});
