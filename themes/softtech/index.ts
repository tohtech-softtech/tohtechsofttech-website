import { defineTheme, defineThemeSettings } from "@riebeckite/core";

export const softtechTheme = defineTheme({
  name: "softtech",
  styles: [{ moduleSpecifier: "/themes/softtech/styles/theme.css" }],
  settings: defineThemeSettings({
    typography: {
      type: "select",
      label: "Typography",
      default: "system",
      options: [
        { value: "system", label: "System" },
        { value: "serif", label: "Serif" },
      ],
    },
    accentColor: {
      type: "color",
      label: "Accent color",
      description: "Links and interactive accents.",
      default: "#7026b9",
      light: "#7026b9",
    },
  }),
  presets: {
    reading: { label: "Reading", settings: { typography: "serif" } },
  },
});
