export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/test-utils/module"],
  devtools: { enabled: true },
  compatibilityDate: "2025-05-15",
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: 'single',
      },
    },
  },
});
