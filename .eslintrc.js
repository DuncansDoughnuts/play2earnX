module.exports = {
  extends: ['next/core-web-vitals'],
  env: {
    node: true,
    browser: true,
  },
  globals: {
    REACT_APP_ENV: 'readonly',
  },
  rules: {
    'import/no-anonymous-default-export': 'off',
  },
};
