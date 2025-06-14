import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    globals: true,
    include: ['**/*.test.{js,ts,vue}', '**/*.spec.{js,ts,vue}'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.nuxt/**',
      '**/.output/**',
    ],
  },
});
