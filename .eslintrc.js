module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-undef": 0,
    "no-unused-vars": 1,
    "no-console": 1,
    indent: [2, "tab"],
  },
};
