const validationSetting = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inputErrorClass: '.form__input_status_error'
};

function enableValidation(validationSetting) {
    const formList = Array.from(document.querySelectorAll(validationSetting.formSelector));
    formList.forEach((form) => {
        setEventListeners(form);
    });
}

function setEventListeners(form) {
    const inputList = Array.from(form.querySelectorAll(validationSetting.inputSelector));
    toggleButtonStatus(form);
    inputList.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(form, input);
            toggleButtonStatus(form);
        });
    });
}

function checkInputValidity(form, input) {
    if (input.validity.valid) {
        hideInputError(form, input);
    } else {
        showInputError(form, input, input.validationMessage);
    }
}

function showInputError(form, input, errorMessage) {
    const errorCaption = form.querySelector(`.${input.id}-error`);
    input.classList.add(validationSetting.inputErrorClass);
    errorCaption.textContent = errorMessage;
}

function hideInputError(form, input) {
    const errorCaption = form.querySelector(`.${input.id}-error`);
    input.classList.remove(validationSetting.inputErrorClass);
    errorCaption.textContent = '';
}

function toggleButtonStatus(form) {
    const submitButton = form.querySelector(validationSetting.submitButtonSelector);
    submitButton.disabled = hasInvalidInput(form);
}

function hasInvalidInput(form) {
    const inputList = Array.from(form.querySelectorAll(validationSetting.inputSelector));
    return inputList.some((input) => (!input.validity.valid));
}

enableValidation(validationSetting);