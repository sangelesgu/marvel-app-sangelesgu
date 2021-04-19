const Rules = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
};

module.exports = {
  env: {
    es2021: true,
    browser: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": Rules.OFF,
    "empty-rules": Rules.OFF,
  },
};
