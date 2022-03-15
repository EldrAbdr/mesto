export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handlerEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add('overlay_active');
        document.addEventListener('keydown', this._handlerEscClose);
    }

    close() {
        this._popup.classList.remove('overlay_active');
        document.removeEventListener('keydown', this._handlerEscClose);
    }

    _handleEscClose(evt) {
        if (evt.code === 'Escape') {
            this.close();
        }
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