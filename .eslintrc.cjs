/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/prettier",
    "plugin:vue/base",
  ],
  rules: {
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
  },
};
