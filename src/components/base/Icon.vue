<!-- eslint-disable -->
<template>
 <v-icon
    :size="size"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-icon>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'BaseIcon',

    props: {
      size: {
        type: [Number, String],
        default: 56,
      },
    },
  }
</script>
