import globals from "globals";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import nestjsTypedPlugin from "@darraghor/eslint-plugin-nestjs-typed";
import sonarjsPlugin from "eslint-plugin-sonarjs";

export default tseslint.config(
  {
    ignores: ["node_modules/", "dist/"],
  },
  
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
       ...globals.node,
       ...globals.jest,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "@darraghor/nestjs-typed": nestjsTypedPlugin,
      "sonarjs": sonarjsPlugin,
    },
    rules: {
     ...tseslint.configs.recommended.rules,
     ...tseslint.configs.strict.rules,
      
     ...nestjsTypedPlugin.configs.recommended.rules,
     ...sonarjsPlugin.configs.recommended.rules,

      "@darraghor/nestjs-typed/api-methods-should-be-guarded": "error",
      
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "error",
    },
  },

  prettierConfig
);