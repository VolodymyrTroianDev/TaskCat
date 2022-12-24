import { usePhotoStore } from "../stores/photoStore";

export const infinityScroll = (refsObserver, storeFunc) => {
  const options = {
    rootMargin: "0px",
    threshold: 1.0,
  };
  const callback = function (entries) {
    if (entries[0].isIntersecting) {
      switch (storeFunc) {
        case "ApiCats":
          usePhotoStore().loadMoreImg();
          break;

        case "MyCats":
          usePhotoStore().loadMoreMyCatsImg();
          break;
      }
    }
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(refsObserver);
};
