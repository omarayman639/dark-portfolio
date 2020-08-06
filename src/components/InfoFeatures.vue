<!-- eslint-disable -->

<template>
  <base-info-card title="Features">
    <a
      v-for="feature in features"
      :key="feature"
      :text="feature"
      class="mb-8 grey--text text--lighten-1 body-1 d-block text-none"
      href="#"
      v-html="`&rsaquo; ${feature}`"
    />
  </base-info-card>
</template>

<script>
/* eslint-disable */

export default {
  name: "SectionFeaturesAlt",

  data: () => ({
    features: [
      "elit, sed do eiusmod",
      "Lorem Ipsum Dolar",
      "User Friendly Design",
      "24/7 Support",
      "incididunt ut labore et"
    ]
  })
};
</script>
