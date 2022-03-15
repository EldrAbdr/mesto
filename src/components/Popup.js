import {overlayActiveMod} from "../constants/constants.js";

export default class Popup {
    constructor(selector) {
        this._popup = selector;
    }

    open() {
        document.addEventListener('keydown', (evt) => {
            if (evt.code === 'Escape') {
                this._handleEscClose();
            }
        }, {once: true});
        this._popup.classList.add(overlayActiveMod);
    }

    close() {
        this._popup.classList.remove(overlayActiveMod);
    }

    _handleEscClose() {
        this.close();
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('close-button')) {
                this.close();
            }
            if (evt.target.classList.contains('overlay')) {
                this.close();
            }
        });
    }
}