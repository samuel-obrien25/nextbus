module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    "vue/html-quotes": [ "error", "single", { "avoidEscape": false } ],
    'no-console': 'off',
    'no-debugger': 'off',
    "quotes": [2, "single", { "avoidEscape": true, "allowTemplateLiterals": true }]
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
