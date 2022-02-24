import {openImageZoomPopup} from './index.js';

export class Card {
    constructor(name, imageLink, cardTemplate) {
        this._name = name;
        this._imageLink = imageLink;
        this._cardTemplate = cardTemplate;
    }

    _setEventListeners() {
        this._image.addEventListener('click', () => {
            this._handleClickOnImage();
        });
        this._likeButton.addEventListener('click', () => {
            this._handleClickOnLike();
        })
        this._deleteButton.addEventListener('click', () => {
            this._handleClickOnDelete();
        })
    }

    _getTemplate() {
        return document
            .querySelector(this._cardTemplate).content
            .querySelector('.card').cloneNode(true);
    }

    _handleClickOnImage() {
        openImageZoomPopup(this._name, this._imageLink);
    }

    _handleClickOnLike() {
        this._likeButton.classList.toggle('card__like_black');
    }

    _handleClickOnDelete() {
        this._deleteButton.closest('.card').remove();
    }

    initiateCard() {
        this._card = this._getTemplate();
        this._image = this._card.querySelector('.card__image');
        this._likeButton = this._card.querySelector('.card__like');
        this._deleteButton = this._card.querySelector('.card__delete-button');

        this._card.querySelector('.card__name').textContent = this._name;
        this._image.alt = this._name;
        this._image.src = this._imageLink;
        this._setEventListeners();
        return this._card;
    }
}

