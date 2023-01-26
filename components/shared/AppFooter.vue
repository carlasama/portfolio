<script>
import { mapState } from "vuex";
import feather from "feather-icons";
import FooterCopyright from "./FooterCopyright.vue";
export default {
  components: { FooterCopyright },
  data: () => {
    return {
      // Todo
    };
  },
  computed: {
    ...mapState(["copyrightDate", "socialProfiles"]),
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>

      <!-- Footer copyright -->
      <FooterCopyright />

</template>

<style scoped></style>
