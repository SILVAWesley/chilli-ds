module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: ["standard", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        doubleQuotes: true,
        trailingComma: "all",
        arrowParens: "always",
        semi: true,
      },
    ],
  },
};
