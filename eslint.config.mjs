// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.vue', '**/*.ts'],
    ignores: ['**/*.log*', '.cache/**'],
    rules: {
      'no-console': 'warn',
    },
  }
);
