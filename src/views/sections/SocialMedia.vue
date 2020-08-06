<!-- eslint-disable -->
<template>
  <v-theme-provider dark>
    <base-section id="social" class="grey darken-4 text-center" space="56">
      <base-icon class="mb-8">mdi-twitter</base-icon>
      <base-icon class="mb-8">mdi-facebook</base-icon>
      <base-icon class="mb-8">mdi-instagram</base-icon>

      <base-section-heading
        color="transparent"
        title="Social Media"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur recusandae aut repudiandae illo error obcaecati dolores voluptate, tempore.</base-section-heading>

      <v-row justify="center" class="py-4">
        <v-col lg="2" md="2" sm="6" cols="12">
          <v-btn
            class="font-weight-bold"
            color="white"
            href
            light
            min-width="168"
            target="_blank"
            x-large
          >
            Follow Us
            <v-icon right>mdi-twitter</v-icon>
          </v-btn>
        </v-col>

        <v-col lg="2" md="2" sm="6" cols="12">
          <v-btn
            class="font-weight-bold"
            color="white"
            href
            light
            min-width="168"
            target="_blank"
            x-large
          >
            Follow Us
            <v-icon right>mdi-facebook</v-icon>
          </v-btn>
        </v-col>

        <v-col lg="2" md="2" sm="6" cols="12">
          <v-btn
            class="font-weight-bold"
            color="white"
            href
            light
            min-width="168"
            target="_blank"
            x-large
          >
            Follow Us
            <v-icon right>mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </base-section>
  </v-theme-provider>
</template>

<script>
/* eslint-disable */
export default {
  name: "SectionNews",

  provide: {
    heading: { align: "center" }
  }
};
</script>
