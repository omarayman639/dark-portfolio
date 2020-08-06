<!-- eslint-disable -->
<template>
  <div>
    <v-app-bar
      src="../../assets/toolbar-black-wood.png"
      id="home-app-bar"
      elevation="1"
      height="80"
    >
      <base-img
        :src="require('@/assets/dark-logo-final.png')"
        contain
        max-width="250"
        width="100%"
      />

      <v-spacer />

      <div class="hidden-sm-and-down">
        <!-- <v-tabs class="hidden-sm-and-down" optional>
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            class="font-weight-bold"
            active-class="text--primary"
            min-width="96"
          >{{ name }}</v-tab>
        </v-tabs>-->

        <v-btn
          class="grey--text text--lighten-1"
          text
          v-for="(name, i) in items"
          :key="i"
          :ripple="false"
          active-class="grey--text"
          :exact="name === 'Home'"
        >{{name}}</v-btn>
      </div>

      <v-app-bar-nav-icon style="color: white" class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>

    <home-drawer dark v-model="drawer" :items="items" />
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
    items: ["Home", "About", "Contact", "our customers"]
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

