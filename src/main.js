// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

const form = document.querySelector(".form");

form.addEventListener("submit", async event => {
  event.preventDefault();

  const query = event.currentTarget.elements["search-text"].value.trim();

  if (!query) {
    iziToast.warning({
      message: "Please fill in the search field!",
      position: "topRight",
    });
    return;
  }

  try {
    clearGallery();
    showLoader();

    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Try again later.",
      position: "topRight",
    });
  } finally {
    hideLoader();
    form.reset();
  }
});