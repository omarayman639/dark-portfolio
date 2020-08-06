<!-- eslint-disable -->

<script>
/* eslint-disable */

// Extensions
import View from "@/views/View";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  name: "our customers",

  metaInfo: { title: "Pro Features" },

  extends: View,

  mixins: [LoadSections(["hero-alt", "pro-features"])],

  props: {
    id: {
      type: String,
      default: "our customers"
    }
  }
};
</script>
