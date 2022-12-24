<template>
  <div class="view-component d-flex wrap">
    <render-image :image="myCats" />
    <div class="observer" ref="observer"></div>
  </div>
</template>

<script>
import { usePhotoStore } from "../stores/photoStore";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(usePhotoStore, {
      myCats: "myCats",
    }),
  },
};
</script>
<style scoped></style>
