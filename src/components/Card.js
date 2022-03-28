export default class Card {
    constructor(cardDetails, cardTemplate, handleClickOnImage, openDeleteQuestion,
                handleClickOnLike, userId) {
        this._name = cardDetails.name;
        this._imageLink = cardDetails.link;
        this._numberOfLikes = cardDetails.likes.length;
        this._cardTemplate = cardTemplate;
        this._isThisMyCard = cardDetails.owner._id === userId;
        this._handleClickOnImage = handleClickOnImage;
        this._openDeleteQuestion = openDeleteQuestion;
        this.cardId = cardDetails._id;
        this._handleClickOnLike = handleClickOnLike;
        this._isUserLikeCard = this._findIsUserLikeCard(cardDetails.likes, userId)
    }

    _findIsUserLikeCard(likesList, userId) {
        for (let i = 0; i < likesList.length; i++) {
            if (likesList[i]._id === userId) return true;
        }
        return false;
    }

    _setEventListeners() {
        this._image.addEventListener('click', () => {
            this._handleClickOnImage(this._name, this._imageLink);
        });
        this._likeButton.addEventListener('click', () => {
            this._handleClickOnLike(this._isUserLikeCard);
        })
        if (this._deleteButton) {
            this._deleteButton.addEventListener('click', () => {
                this._handleClickOnDelete();
            })
        }
    }

    _getTemplate() {
        return document
            .querySelector(this._cardTemplate).content
            .querySelector('.card').cloneNode(true);
    }

    _toggleLikeButton() {
        this._likeButton.classList.toggle('card__like_black');
    }

    _handleClickOnDelete() {
        this._openDeleteQuestion(this);
    }


    updateLikeNumber(likeNumber) {
        this._numberOfLikes = likeNumber;
        this._likeNumberCaption.textContent = likeNumber;
        this._isUserLikeCard = (!this._isUserLikeCard);
        this._toggleLikeButton();
    }

    removeSelf() {
        this._deleteButton.closest('.card').remove();
    }

    initiateCard() {
        this._card = this._getTemplate();
        this._image = this._card.querySelector('.card__image');
        this._likeButton = this._card.querySelector('.card__like');
        if (this._isUserLikeCard) {
            this._likeButton.classList.add('card__like_black');
        }
        this._likeNumberCaption = this._card.querySelector('.card__like-number');
        if (this._isThisMyCard) {
            this._deleteButton = this._card.querySelector('.card__delete-button');
        } else {
            this._card.querySelector('.card__delete-button').remove();
        }
        this._card.querySelector('.card__name').textContent = this._name;
        this._image.alt = this._name;
        this._image.src = this._imageLink;
        this._likeNumberCaption.textContent = this._numberOfLikes;
        this._setEventListeners();
        return this._card;
    }
}