import { defineConfig } from "eslint/config";
import nextBaseConfig from "@zerotime/eslint-config/next";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  ...nextBaseConfig,
  {
    ignores: [
      "ios/App/App/public/**",
      "public/sw.js",
      "public/workbox-*.js",
      "public/swe-worker-*.js",
    ],
  },
  {
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/preserve-manual-memoization": "off",
      "react/no-unescaped-entities": "warn",
      "prefer-const": "warn",
    },
  },
  {
    files: ["e2e/**/*.ts", "e2e/**/*.tsx"],
    rules: {
      "react-hooks/rules-of-hooks": "off",
    },
  },
  prettierConfig,
]);
