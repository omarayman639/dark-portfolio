 <!-- eslint-disable -->
<template>
  <base-section id="affiliates" class="grey darken-4 text-center" space="36">
    <v-container>
      <base-section-heading  title="Our Customers" />

      <v-row justify="center">
        <v-col v-for="n in 6" :key="n" cols="4" lg="2" sm="4" md="2">
          <v-img
            :src="require(`@/assets/logo-${n}.png`)"
            color="grey"
            contain
            height="40"
            width="200"
          />
        
        </v-col>
         
      </v-row>

      <v-responsive v-if="n < 6" :key="`divider-${n}`" class="text-center" height="56" width="48">
        <v-divider vertical />
      </v-responsive>
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
  name: "SectionAffiliates"
};
</script>
