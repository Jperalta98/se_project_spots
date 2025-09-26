const initialCards = [
  {
name: "Val Thorens",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
},
{
  name: "Restaurant terrace",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
},
{
  name: "An outdoor cafe",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
},
{
  name: "A very long bridge, over the forest and through the trees",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
},
{
  name: "Tunnel with morning light",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
},
{
  name: "Mountain house",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
}
];

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

initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});