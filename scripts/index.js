const editButton = document.querySelector(".profile__edit-btn");
const editModal = document.querySelector("#edit-profile-modal");
const editCloseButton = editModal.querySelector(".modal__close-btn");
const editProfileForm = editModal.querySelector(".modal__form");
const editProfileNameInput = editModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const newPostModal = document.querySelector("#new-post-modal");
const newPostButton = document.querySelector(".profile__add-btn");
const newPostCloseButton = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImageInput = newPostModal.querySelector("#profile-image-input");
const newPostCaptionInput = newPostModal.querySelector(
  "#profile-caption-input"
);

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editModal);
});

editCloseButton.addEventListener("click", function () {
  closeModal(editModal);
});

newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});
newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
newPostForm.addEventListener("submit", handleAddCardSubmit);

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log("Image Link:", newPostImageInput.value);
  console.log("Caption", newPostCaptionInput.value);
  closeModal(newPostModal);
}
