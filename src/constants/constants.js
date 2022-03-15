export const cardsContainerSelector = '.cards';
export const cardTemplateSelector = '.card-template';
export const validationSetting = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inputErrorClass: '.form__input_status_error'
};
export const cardAddPopupSelector = '.overlay_card-add-popup';
export const cardAddButton = document.querySelector('.profile__add-button');
export const profileEditPopupSelector = '.overlay_card-edit-popup';
export const profileNameSelector = '.profile__name';
export const profileProfessionSelector = '.profile__profession';
export const profileEditButton = document.querySelector('.profile__edit-button');
export const imageZoomPopupSelector = '.overlay_image-popup';
export const formValidators = {};

export const initialList = [
    {
        name: 'Архыз',
        imageLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        imageLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        imageLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        imageLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        imageLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        imageLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];