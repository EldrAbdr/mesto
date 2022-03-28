import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector('.form');
        this._inputList = Array.from(this._popupForm.querySelectorAll('.form__input'));
        this._submitButton = this._popup.querySelector('.form__submit-button');
    }

    getInputValues() {
        const inputValues = {};
        this._inputList.forEach(input => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    setInputValues(values) {
        for (let value in values) {
            this._inputList.forEach(input => {
                if (input.name === value) {
                    input.value = values[value];
                }
            });
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitButton.textContent = 'Сохранение...';
            this._handleFormSubmit();
        });
    }

    close() {
        super.close();
        this._popupForm.reset();

    }

    open() {
        this._submitButton.textContent = 'Сохранение';
        super.open();
    }
}