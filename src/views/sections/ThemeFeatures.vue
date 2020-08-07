<!-- eslint-disable -->
<template>

  <base-section class="grey darken-4 text-center" id="theme-features">
    <base-section-heading
      title="What We Offer"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse accusamus mollitia magni fuga.</base-section-heading>

    <v-container>
      <v-row>
        <v-col v-for="(feature, i) in features" :key="i" cols="12" md="6">
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!</base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
      <v-row justify="center" >
      <v-col cols="9">
         <v-divider
        class="white mx-15"
        :inset="inset"
        horizontal
      ></v-divider>
      </v-col>
      </v-row>

  </base-section>

</template>

<script>
/* eslint-disable */
export default {
  name: "SectionThemeFeatures",

  data: () => ({
    features: [
      {
        title: "Lorem ipsum dolor",
        icon: "mdi-fountain-pen-tip"
      },
      {
        title: "Lorem ipsum dolor",
        icon: "mdi-cellphone"
      },
      {
        title: "Lorem ipsum dolor",
        icon: "mdi-pencil-box-outline"
      },
      {
        title: "Lorem ipsum dolor",
        icon: "mdi-image-size-select-actual"
      },
      {
        title: "Lorem ipsum dolor",
        icon: "mdi-ice-pop"
      },
      {
        title: "Lorem ipsum dolor",
        icon: "mdi-help-circle-outline"
      }
    ]
  })
};
</script>

