module.exports = {
  extends: ["eslint:recommended", "plugin:unicorn/recommended", "next", "prettier"],
  ignorePatterns: ["*.config.js"],
  rules: {
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        caughtErrors: "none",
        ignoreRestSiblings: true,
        vars: "all",
      },
    ],
    "prefer-const": "error",
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
      },
    ],
    "unicorn/prevent-abbreviations": "off",
  },
};
