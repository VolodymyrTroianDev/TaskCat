import { defineStore } from "pinia";
import axios from "axios";

export const usePhotoStore = defineStore({
  id: "photoStore",
  state: () => ({
    arrayImg: [],
    myCats: [],
    openMessage: false,
    message: "",
  }),
  getters: {},
  actions: {
    loadImg() {
      try {
        axios
          .get("https://api.thecatapi.com/v1/images/search?limit=10")
          .then((response) => {
            this.arrayImg = response.data;
          });
        return true;
      } catch (error) {
        return false;
      }
    },
    loadMoreImg() {
      try {
        axios
          .get("https://api.thecatapi.com/v1/images/search?limit=10")
          .then((response) => {
            const data = response.data;
            this.arrayImg.push(...data);
          });
      } catch (error) {
        console.log(error);
      }
    },
    saveMyCats(data) {
      this.myCats.push(data);
    },
    messageOutput(text) {
      this.openMessage = true;
      this.message = text;

      setTimeout(() => {
        this.message = "";
        this.openMessage = false;
      }, 10000);
    },
  },
});
