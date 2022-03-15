import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._name = this._popup.querySelector('.image-popup__caption');
        this._image = this._popup.querySelector('.image-popup__image');
    }

    open(name, imageLink) {
        this._name.textContent = name;
        this._image.alt = name;
        this._image.src = imageLink;
        super.open();
    }
}