import { defineConfig } from "eslint/config";
import nextBaseConfig from "@zerotime/eslint-config/next";

const eslintConfig = defineConfig([
  ...nextBaseConfig,
  {
    rules: {
      // Baseline: keep CI green while we pay down existing legacy violations.
      "@typescript-eslint/no-explicit-any": "warn",
      "react/no-unescaped-entities": "warn",
      "react-hooks/purity": "warn",
      "react-hooks/set-state-in-effect": "warn",
    },
  },
]);

export default eslintConfig;
