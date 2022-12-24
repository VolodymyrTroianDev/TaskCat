<template>
  <div
    class="render-img-component col-lg col"
    v-for="item in this.image"
    :key="item.id"
  >
    <img
      ref="img"
      :src="item.url"
      width="300"
      alt=""
      class="render-img-component__img-cats"
    />
  </div>
</template>

<script>
export default {
  props: ["image"],
};
</script>

<style scoped lang="scss">
.render-img-component__img-cats {
  display: block;
  position: absolute;
  left: -1000%;
  right: -1000%;
  top: -1000%;
  bottom: -1000%;
  margin: auto;
  min-height: 100%;
  min-width: 100%;
  &:hover {
    scale: 1.2;
    cursor: pointer;
  }
}
</style>
