module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  ignorePatterns: ["config/jest/jestEmptyComponent.tsx", "scripts/generate-visual-json-report.js"],
  plugins: ["react", "@typescript-eslint", "i18next", "react-hooks", "unused-imports"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/prefer-nullish-coalescing": 0,
    "@typescript-eslint/strict-boolean-expressions": 0,
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/display-name": "off",
    semi: [2, "always"],
    "@typescript-eslint/semi": [2, "always"],
    "@typescript-eslint/member-delimiter-style": [
      2,
      {
        multiline: { delimiter: "semi", requireLast: true },
        singleline: { delimiter: "semi", requireLast: false }
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "warn",
    "i18next/no-literal-string": [
      "warn",
      {
        markUpOnly: true,
        ignoreAttribute: [
          "as",
          "role",
          "data-testid",
          "to",
          "target",
          "justify",
          "align",
          "border",
          "direction",
          "gap",
          "fullscreen",
          "feature",
          "variant",
          "color",
          "size",
          "wrap"
        ]
      }
    ],
    "max-len": ["warn", { ignoreComments: true, code: 125 }],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "error", // Checks effect dependencies,
    "no-param-reassign": "off",
    "no-undef": "off",
    "react/no-array-index-key": "off",
    "arrow-body-style": "off"
  },

  globals: {
    _IS_DEV_: true,
    _API_: true
  },
  overrides: [
    {
      files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
        "max-len": "off"
      }
    }
  ]
};
