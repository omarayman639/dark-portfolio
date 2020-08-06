<!-- eslint-disable -->
<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card :title="title" color="primary">
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          color="transparent"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div v-html="text" />
        </base-avatar-card>

        <v-divider v-if="i + 1 !== business.length" :key="`divider-${i}`" class="my-2" />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>
/* eslint-disable */

export default {
  name: "BaseBusinessContact",

  props: {
    dark: Boolean,
    dense: Boolean,
    title: String
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
