export default class FormValidator {
    constructor({inputSelector, submitButtonSelector, inputErrorClass}, form) {
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(inputSelector));
        this._submitButton = this._form.querySelector(submitButtonSelector);
        this._inputErrorClass = inputErrorClass;
    }

    enableValidation() {
        this._setEventListeners();
    }

    resetValidation() {
        this._toggleSubmitButtonStatus();
        this._inputList.forEach((input) => {
            this._hideInputError(input);
        });
    }

    _setEventListeners() {
        this._toggleSubmitButtonStatus();
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleSubmitButtonStatus();
            });
        });
    }

    _toggleSubmitButtonStatus() {
        this._submitButton.disabled = this._hasInvalidInput();
    }

    _hasInvalidInput() {
        return this._inputList.some((input) => {
            return !input.validity.valid;
        });
    }

    _checkInputValidity(input) {
        if (input.validity.valid) {
            this._hideInputError(input);
        } else {
            this._showInputError(input);
        }
    }

    _hideInputError(input) {
        const errorCaption = this._form.querySelector(`.${input.id}-error`);
        input.classList.remove(this._inputErrorClass);
        errorCaption.textContent = '';
    }

    _showInputError(input) {
        const errorCaption = this._form.querySelector(`.${input.id}-error`);
        input.classList.add(this._inputErrorClass);
        errorCaption.textContent = input.validationMessage;
    }

}
