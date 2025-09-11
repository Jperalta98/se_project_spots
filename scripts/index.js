const editButton = document.querySelector(".profile__edit-btn");
const editModal = document.querySelector("#edit-profile-modal");
const closeButton = editModal.querySelector(".modal__close-btn");

editButton.addEventListener("click", () => {
  editModal.classList.add("modal_is-opened");
});

closeButton.addEventListener("click", () => {
  editModal.classList.remove("modal_is-opened");
});

const submitButton = document.querySelector(".profile__add-btn");
const postModal = document.querySelector("#new-post-modal");
const closeNewPostButton = postModal.querySelector(".modal__close-btn");

submitButton.addEventListener("click", () => {
  postModal.classList.add("modal_is-opened");
});

closeNewPostButton.addEventListener("click", () => {
  postModal.classList.remove("modal_is-opened");
});
