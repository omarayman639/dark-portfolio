<!-- eslint-disable -->
<template>
  <v-navigation-drawer bottom fixed height="auto" temporary v-bind="$attrs" v-on="$listeners">
    <v-list shaped>
      <v-list-item v-for="name in items" :key="name" :to="{ name }" :exact="name === 'Home'">
        <v-list-item-content>
          <v-list-item-title v-text="name" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
/* eslint-disable */
export default {
  name: "HomeDrawer",

  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>
