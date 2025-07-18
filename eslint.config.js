//@ts-nocheck
import path from "node:path";
import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import unusedImports from "eslint-plugin-unused-imports";
import pluginVue from "eslint-plugin-vue";
import { globSync } from "glob";
import globals from "globals";
import tseslint from "typescript-eslint";
import vueParser from "vue-eslint-parser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const tsProjects = globSync("**/tsconfig.eslint.json", {
  cwd: __dirname,
  absolute: true,
  ignore: ["**/node_modules/**", "**/dist/**"],
});

export default defineConfig([
  {
    ignores: ["dist/**", "node_modules/**", "coverage/**", "packages/vue-resize-container/dist/**"],
  },
  // JS/TS/Vue soubory (obecná nastavení)
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: { js, prettier, import: importPlugin, "unused-imports": unusedImports },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error", // ⚠️ smaže nepoužité importy při `--fix`
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "",
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // např. fs, path
            "external", // npm balíčky
            "internal", // interní moduly (můžeš definovat v settings)
            ["parent", "sibling", "index"], // relativní cesty
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc" /* řadí abecedně */,
            caseInsensitive: true,
          },
        },
      ],
      "prettier/prettier": "error",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": true, // zakázat `// @ts-ignore`
          "ts-expect-error": true, // zakázat `// @ts-expect-error`
          "ts-nocheck": false, // povolit `// @ts-nocheck`
          "ts-check": false, // povolit `// @ts-check`,
          //minimumDescriptionLength: 5, // Pokud je nastaveno, @ts-ignore musí být doprovázen popisem
        },
      ],
    },
  },
  // TypeScript podpora
  ...tseslint.configs.recommended,

  // Vue podpora (bezpečnější kombinace)
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser, // důležité!
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".vue"],
        project: tsProjects,
        // project: [
        //   path.join(__dirname, "apps/playground/vue/tsconfig.eslint.json"),
        //   path.join(__dirname, "packages/vue-resize-container/tsconfig.eslint.json"),
        // "./packages/vue-resize-container/tsconfig.app.json",
        // "./apps/playground/vue/tsconfig.app.json"
        // ] // pokud chceš type-aware linting
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      ...pluginVue.configs["flat/essential"].rules,
    },
  },

  // // JSON
  // {
  //   files: ["**/*.json"],
  //   plugins: { json },
  //   language: "json/json",
  //   extends: ["json/recommended"],
  // },
  //
  // // CSS
  // {
  //   files: ["**/*.css"],
  //   plugins: { css },
  //   language: "css/css",
  //   extends: ["css/recommended"],
  // },
]);
