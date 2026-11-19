import { Article, ArticleBody, ArticleContent } from "@riebeckite/honox/ui";
import { Breadcrumbs } from "@riebeckite/plugin-breadcrumbs";
import { Properties } from "@riebeckite/plugin-properties";
import { PoweredByRiebeckite } from "./powered-by-riebeckite";

export function SiteArticle() {
  return (
    <Article class="site-article">
      <ArticleContent>
        <Breadcrumbs />
        <Properties />
        <ArticleBody />
        <PoweredByRiebeckite />
      </ArticleContent>
    </Article>
  );
}
