// @ts-check
import stylistic from '@stylistic/eslint-plugin';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.vue', '**/*.ts'],
    ignores: ['**/*.log*', '.cache/**'],
    rules: {
      'no-console': 'warn',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
    },
  },
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    commaDangle: 'always-multiline',
  }),
);
