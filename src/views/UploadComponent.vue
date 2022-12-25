<template>
  <div class="upload-photo d-flex">
    <h1>Додати фото</h1>
    <input
      title="Upload photos"
      class="upload-photo_input"
      type="file"
      ref="photo"
      accept="image/*"
      v-on:change="handleUpload()"
    />
    <label for="upload-photo_input" class="upload-photo_input__btn"></label>
    <div class="upload-photo__details">
      <div class="upload-photo__message" v-if="openMessage">
        {{ this.message }}
      </div>
    </div>
  </div>
</template>

<script>
import { usePhotoStore } from "../store/photoStore";
import { mapState } from "pinia";
export default {
  methods: {
    handleUpload() {
      const reader = new FileReader();
      const dataImg = {
        id: this.$refs.photo.files[0].lastModified,
      };
      reader.onloadend = function () {
        dataImg.url = reader.result;
      };
      reader.readAsDataURL(this.$refs.photo.files[0]);
      usePhotoStore().saveMyCats(dataImg);

      usePhotoStore().messageOutput("Фото додано");
    },
  },
  computed: {
    ...mapState(usePhotoStore, {
      openMessage: "openMessage",
      message: "message",
    }),
  },
};
</script>

<style lang="scss" scoped>
.upload-photo {
  position: relative;
  align-items: center;
  flex-direction: column;
  & h1 {
    color: var(--color-btn);
  }
  & .upload-photo_input {
    position: relative;
    opacity: 0;
    width: 59px;
    height: 60px;
    z-index: 1;
    &:hover {
      cursor: pointer;
    }
  }
  & .upload-photo_input__btn {
    position: absolute;
    top: 39px;
    background-image: url("../assets/added-profile.svg");
    width: 59px;
    height: 70px;
  }
  & .upload-photo__details {
    margin-top: 20px;
    & h2 {
      color: var(--color-btn);
    }
  }
  & .upload-photo__message {
    width: 100%;
    color: var(--color-btn);
  }
}
</style>
