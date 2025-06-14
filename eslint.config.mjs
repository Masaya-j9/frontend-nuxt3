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
    },
  },
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
  })
);
