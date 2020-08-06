<!-- eslint-disable -->
<template>
  <base-info-card title="Social Media">
    <a text="facebook" class="mb-8 grey--text text--lighten-1 body-1 d-block text-none" href="#">
      <v-icon class="mb-2 mr-3">mdi-facebook</v-icon>Facebook
    </a>

    <a text="facebook" class="mb-8 grey--text text--lighten-1 body-1 d-block text-none" href="#">
      <v-icon class="mb-2 mr-3">mdi-twitter</v-icon>twitter
    </a>

    <a text="facebook" class="mb-8 grey--text text--lighten-1 body-1 d-block text-none" href="#">
      <v-icon class="mb-2 mr-3">mdi-instagram</v-icon>instagram
    </a>
  </base-info-card>
</template>

<script>
/* eslint-disable */

export default {
  name: "SectionFeaturesAlt",

  data: () => ({
    features: [
      "Zero Installation",
      "Easy Customization",
      "User Friendly Design",
      "24/7 Support Desk",
      "SEO Optimized"
    ]
  })
};
</script>
