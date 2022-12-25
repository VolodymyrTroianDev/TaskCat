import { usePhotoStore } from "../store/photoStore";

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
      }
    }
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(refsObserver);
};
