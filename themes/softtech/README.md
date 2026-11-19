# softtech

Generated from the blog template.

## Apply the theme

```ts
import { softtechTheme } from "./themes/softtech/index";

export default defineConfig({
  theme: softtechTheme(),
});
```

This local Theme uses the public `defineTheme` API, semantic `--rb-*` tokens, and stable `rb-*` / `rr-*` CSS hooks. Riebeckite imports theme CSS into `rb-theme`, so `@layer base` token rules are nested there and normal theme rules can customize plugin defaults. Unlayered site CSS remains the final normal-declaration customization layer. Keep functionality in Plugins and site-specific structure in the application.
