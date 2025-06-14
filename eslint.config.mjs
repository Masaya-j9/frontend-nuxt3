// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.vue', '**/*.ts'],
    ignores: ['**/*.log*', '.cache/**'],
    rules: {
      'no-console': 'warn',
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/indent': ['error', 2],
    },
  },
)
