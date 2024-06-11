import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import vueParser from "vue-eslint-parser"
import eslintConfigPrettier from "eslint-config-prettier"

export default [
    {
        languageOptions: {
            globals: globals.browser,
            ecmaVersion: "latest"
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/recommended"],
    {
        ignores: ["**/temp.js", "config/*"]
    },
    {
        files: ["*.vue", "**/*.vue"],
        languageOptions: {
            parser: vueParser,
            parserOptions: { parser: tseslint.parser, sourceType: "module" }
        }
    },
    eslintConfigPrettier
]
