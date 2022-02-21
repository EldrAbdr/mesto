import {openImageZoomPopup, toggleLikeButton, removeCard} from "./index";


export class Card {
    constructor(name, imageLink, cardTemplate) {
        this._name = name;
        this._imageLink = imageLink;
        this._cardTemplate = cardTemplate;
    }

  /*  _setEventListeners() {
        this._cardImage._setEventListeners('click', () => {
           this._handleClickOnImage();
        });
        /*this._card.querySelector('.card__like')._setEventListeners('click', () => {
            this._handleClickOnLike();
        })
        this._card.querySelector('.card__delete-button')._setEventListeners('click', () => {
            this._handleClickOnDelete();
        })

    }*/

    _getTemplate() {
        const cardTemplate = document
            .querySelector(this._cardTemplate).content
            .querySelector('.card').cloneNode(true);
        console.log(cardTemplate);
        return cardTemplate;
    }


    _handleClickOnImage() {
        openImageZoomPopup(this._name, this._imageLink);
    }

    _handleClickOnLike() {
        toggleLikeButton()
    }
    _handleClickOnDelete() {
        removeCard();
    }


     createCard() {
        this._card = this._getTemplate();
        /*this._cardImage = this._card.querySelector('.card__image');

        this._card.querySelector('.card__name').textContent = this._name;
        this._cardImage.alt = this._name;
        this._cardImage.src = this._imageLink;

        this._setEventListeners();*/
        return this._card;
    }
}