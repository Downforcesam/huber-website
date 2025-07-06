import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/prefer-const': 'error',

    // Vue specific rules
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',

    // General rules
    'no-console': 'warn',
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',

    // Stylistic rules
    'comma-dangle': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
  ignores: ['dist', 'node_modules', '.nuxt', '.output', 'public'],
});
