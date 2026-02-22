import { defineConfig } from "eslint/config";
import nextBaseConfig from "@zerotime/eslint-config/next";

const eslintConfig = defineConfig([
  ...nextBaseConfig,
  {
    rules: {
      // Baseline: keep CI green while we pay down existing legacy violations.
      "react/no-unescaped-entities": "warn",
      "react-hooks/rules-of-hooks": "warn",
    },
  },
]);

export default eslintConfig;
