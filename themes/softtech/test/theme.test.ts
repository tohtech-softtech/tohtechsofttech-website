import assert from "node:assert/strict";
import { test } from "node:test";
import { softtechTheme } from "../index.js";

test("creates the theme", () => {
  const theme = softtechTheme();
  assert.equal(theme.definition.name, "softtech");
  assert.deepEqual(theme.definition.styles, [{ moduleSpecifier: "/themes/softtech/styles/theme.css" }]);
});
