import Popup from "./Popup.js";
import {imageZoomCaption, imageZoomPicture} from "../constants/constants.js";

export default class PopupWithImage extends Popup {
    constructor({name, imageLink}, selector) {
        super(selector);
        this._name = name;
        this._imageLink = imageLink;
    }

    open(caption) {
        imageZoomCaption.textContent = this._name;
        imageZoomPicture.alt = this._name;
        imageZoomPicture.src = this._imageLink;
        super.open();
    }
}