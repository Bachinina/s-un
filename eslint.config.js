import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import boundaries from "eslint-plugin-boundaries";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  {
    ignores: ["dist", "node_modules", "eslint.config.js", "vite.config.ts"],
  },

  js.configs.recommended,
  prettier,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        projectService: true,
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      boundaries,
      "@typescript-eslint": tseslint.plugin,
    },

    settings: {
      react: {
        version: "detect",
      },

      "import/resolver": {
        typescript: {
          project: "./tsconfig.app.json",
        },
      },

      "boundaries/elements": [
        { type: "shared", pattern: "src/shared/**" },
        { type: "entities", pattern: "src/entities/**" },
        { type: "features", pattern: "src/features/**" },
        { type: "widgets", pattern: "src/widgets/**" },
        { type: "pages", pattern: "src/pages/**" },
        { type: "app", pattern: "src/app/**" },
      ],
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      "boundaries/dependencies": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              from: { type: "app" },
              allow: {
                to: {
                  type: ["pages", "widgets", "features", "entities", "shared"],
                },
              },
            },
            {
              from: { type: "pages" },
              allow: {
                to: {
                  type: ["widgets", "features", "entities", "shared"],
                },
              },
            },
            {
              from: { type: "widgets" },
              allow: {
                to: { type: ["features", "entities", "shared"] },
              },
            },
            {
              from: { type: "features" },
              allow: {
                to: { type: ["entities", "shared"] },
              },
            },
            {
              from: { type: "entities" },
              allow: {
                to: { type: "shared" },
              },
            },
            {
              from: { type: "shared" },
              allow: {
                to: { type: "shared" },
              },
            },
            // Исключение: shared может импортировать только типы из @app/store
            {
              from: { type: "shared" },
              allow: {
                to: { type: "app" },
                dependency: {
                  kind: "type",
                  source: "@app/store",
                },
              },
            },
          ],
        },
      ],
    },
  },
];
