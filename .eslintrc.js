module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/recommended",
    "@vue/prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "prettier/prettier": ["error"],
    "vue/no-multiple-template-root": "off",
    "vue/no-v-for-template-key": "off",
  },
};
