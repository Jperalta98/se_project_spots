const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
  errorActiveClass: "modal__input-error_active"
}

const showInputError = (formElement, inputElement, errorMsg, config) => {
    const errorMsgEl = formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(config.inputErrorClass);
    errorMsgEl.textContent = errorMsg;
     errorMsgEl.classList.add(config.errorActiveClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorMsgEl = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
    errorMsgEl.classList.remove(config.errorActiveClass);
  errorMsgEl.textContent = "";
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonEl, config) => {
if (hasInvalidInput(inputList)) {
  disableButton(buttonEl, config);
} else {
buttonEl.disabled = false;
buttonEl.classList.remove(config.inactiveButtonClass);
}
};

const disableButton = (buttonEl, config) => {
    buttonEl.disabled = true;
    buttonEl.classList.add(config.inactiveButtonClass);
};

const setEventListeners = (formElement, config) => {
const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
const buttonEl = formElement.querySelector(config.submitButtonSelector);

toggleButtonState(inputList, buttonEl, config);

inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
        checkInputValidity(formElement, inputElement, config);
         toggleButtonState(inputList, buttonEl, config);
 });
});
};

const enableValidation = (config) => {
const formList = document.querySelectorAll(config.formSelector);
formList.forEach((formElement) => {
      setEventListeners(formElement,config);
});
};

enableValidation(settings);