<template>
  <v-app-bar
    color="indigo-lighten-1"
    :elevation="2"
  >
    <template #prepend>
      <v-app-bar-nav-icon />
    </template>

    <v-app-bar-title>{{ title }}</v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',

  data: () => ({
    title: '在庫管理アプリ',
  }),
};
</script>
