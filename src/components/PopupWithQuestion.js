import Popup from "./Popup.js";

export default class PopupWithQuestion extends Popup {
    constructor({popupSelector, handleSubmitButton}) {
        super(popupSelector);
        this._handleSubmitButton = handleSubmitButton;
        this._submitButton = this._popup.querySelector('.form__submit-button')
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitButton.addEventListener('click', (evt) => {
            evt.preventDefault()
            this._handleSubmitButton();
            this.close();
        });
    }

    open(card) {
        this.card = card;
        super.open();
    }
}