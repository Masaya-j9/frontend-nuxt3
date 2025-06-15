<template>
  <v-app>
    <AppHeader />
    <v-main>
      <NuxtPage />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import Header from '~/components/navigation/Header.vue';
import Footer from '~/components/navigation/Footer.vue';

export default {
  name: 'IndexPage',
  components: {
    AppHeader: Header,
    AppFooter: Footer,
  },
};
</script>
