<!-- eslint-disable -->
<template>
  <div>
    <v-app-bar id="home-app-bar" elevation="1" height="80">
      <base-img
        :src="require('@/assets/zero-logo-light.svg')"
        contain
        max-width="128"
        width="100%"
      />

      <v-spacer />

      <div>
        <v-tabs class="hidden-sm-and-down" optional>
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            class="font-weight-bold grey lighten-4"
            active-class="text--primary"
            min-width="96"
            text
          >{{ name }}</v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>

    <home-drawer v-model="drawer" :items="items" />
  </div>
</template>  
 
<script>
/* eslint-disable */

export default {
  name: "HomeAppBar",

  components: {
    HomeDrawer: () => import("./Drawer")
  },
  methods: {
    s() {
      debugger;
    }
  },
  data: () => ({
    drawer: null,
    items: ["Home", "About", "Contact", "Pro"]
  })
};
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
