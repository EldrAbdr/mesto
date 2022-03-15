import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({selector, handleFormSubmit}) {
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this.popupForm = selector.querySelector('.form');
        this._inputList = Array.from(this.popupForm.querySelectorAll('.form__input'));
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
        this.popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
            this.close();
        });
    }

    close() {
        super.close();
        this.popupForm.reset();
    }
}