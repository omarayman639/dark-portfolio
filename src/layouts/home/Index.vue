 <!-- eslint-disable -->

<template>
  <v-app>
    <home-app-bar />

    <home-view />
  </v-app>
</template>

<script>
/* eslint-disable */

export default {
  name: "HomeLayout",

  components: {
    HomeAppBar: () => import("@/layouts/home/AppBar"),
    HomeFooter: () => import("@/layouts/home/Footer"),
    HomeSettings: () => import("@/layouts/home/Settings"),
    HomeSystemBar: () => import("@/layouts/home/SystemBar"),
    HomeView: () => import("@/layouts/home/View")
  }
};
</script>
