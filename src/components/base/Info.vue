 <!-- eslint-disable -->

<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-img
        class="ml-n3"
        :src="require('@/assets/dark-logo-cropped.png')"
        contain
        max-width="250"
        width="100%"
      />

      <base-title size="body-1" space="4" weight="regular" />

      <base-body>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti, asperiores facere.</base-body>

      <base-btn class="mb-12" color="white" outlined>More Info</base-btn>
    </div>
  </v-theme-provider>
</template>

<script>
/* eslint-disable */

export default {
  name: "BaseInfo",

  props: {
    title: String,
    dark: Boolean
  },

  data: () => ({
    business: [
      {
        icon: "mdi-map-marker-outline",
        title: "Address",
        text: "9999 N. Beach St. Ste. 9999<br>Fort Worth, Texas 978903"
      },
      {
        icon: "mdi-cellphone",
        title: "Phone",
        text: "011 54 378 588<br>011 29 805 828"
      },
      {
        icon: "mdi-email",
        title: "Email",
        text: "miroayman639@gmail.com<br>mada61988@gmail.com"
      }
    ]
  })
};
</script>

