module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: 'vuetify',

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {

    "vue/max-attributes-per-line": ['off', {
      "singleline": 20,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    'no-trailing-spaces': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    // https://github.com/babel/babel-eslint/issues/681#issuecomment-420663038
    'template-curly-spacing': 'off',
    indent: 'off',
    //
    'no-unused-vars': 'warn',
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
}
