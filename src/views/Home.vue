<template>
  <div class="home d-flex">
    <render-image :image="this.arrayImg" />
  </div>
  <div class="observer" ref="observer"></div>
</template>

<script>
import { usePhotoStore } from "../stores/photoStore";

import { mapState } from "pinia";
export default {
  data() {
    return {
      postCats: [],
    };
  },
  computed: {
    ...mapState(usePhotoStore, {
      arrayImg: "arrayImg",
    }),
  },
  mounted() {
    if (this.arrayImg?.length < 1) {
      usePhotoStore().loadImg();
    }
    this.$infinityScroll(this.$refs.observer, "ApiCats");
  },
};
</script>

<style scoped lang="scss">
.home {
  flex-wrap: wrap;
  justify-content: center;
}
</style>
