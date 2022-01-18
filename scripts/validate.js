function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((form) => {
        setEventListeners(form);
    });
}

function setEventListeners(form) {
    const inputList = Array.from(form.querySelectorAll('.form__input'));
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
    input.classList.add('.form__input_status_error');
    errorCaption.textContent = errorMessage;
}

function hideInputError(form, input) {
    const errorCaption = form.querySelector(`.${input.id}-error`);
    input.classList.remove('.form__input_status_error');
    errorCaption.textContent = '';
}

function toggleButtonStatus(form) {
    const submitButton = form.querySelector('.form__submit-button');
    submitButton.disabled = hasInvalidInput(form);
}

function hasInvalidInput(form) {
    const inputList = Array.from(form.querySelectorAll('.form__input'));
    return inputList.some((input) => (!input.validity.valid));
}

enableValidation();
