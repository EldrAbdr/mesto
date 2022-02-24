import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const cardsContainer = document.querySelector('.cards');
const overlayActiveMod = ('overlay_active');
const cardTemplate = '.card-template';
const formValidators = {};
const validationSetting = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inputErrorClass: '.form__input_status_error'
};
/* Popup for adding cards variables*/
const cardAddPopup = document.querySelector('.overlay_card-add-popup');
const cardAddForm = document.querySelector('.form_add-popup');
const cardAddButton = document.querySelector('.profile__add-button');
const cardAddPlaceNameInput = document.querySelector('.form__input_place-name');
const cardAddImageLinkInput = document.querySelector('.form__input_link');
/* Profile edit popup variables*/
const profileEditPopup = document.querySelector('.overlay_card-edit-popup');
const profileEditForm = document.querySelector('.form_edit-popup');
const profileEditNameInput = document.querySelector('.form__input_name');
const profileEditProfessionInput = document.querySelector('.form__input_profession');
/* Profile variables*/
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileEditButton = document.querySelector('.profile__edit-button');
/* Image zoom popup variables */
const imageZoomPopup = document.querySelector('.overlay_image-popup');
const imageZoomPicture = document.querySelector('.image-popup__image');
const imageZoomCaption = document.querySelector('.image-popup__caption');

const initialList = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const initialCardList = makeCardList(initialList);

function makeCardList(list) {
    const cardList = [];
    list.forEach((cardDetails) => {
        cardList.push(createCard(cardDetails));
    });
    return cardList;
}

const addInitialCardsToPage = () => {
    initialCardList.forEach((card) => {
        renderCard(card);
    });
}

function createCard(cardDetails) {
    const card = new Card(cardDetails.name, cardDetails.link, cardTemplate);
    return card.initiateCard();
}

function renderCard(card) {
    cardsContainer.prepend(card);
}

function enableValidation(validationSetting) {
    const formList = Array.from(document.querySelectorAll(validationSetting.formSelector));
    formList.forEach((form) => {
        const validator = new FormValidator(validationSetting, form);
        const formName = form.getAttribute('name');
        formValidators[formName] = validator;
        validator.enableValidation();
    });
}

/* Image zoom popup functions*/
export function openImageZoomPopup(name, imageLink) {
    imageZoomPicture.src = imageLink
    imageZoomPicture.alt = name
    imageZoomCaption.textContent = name;
    openPopup(imageZoomPopup);
}

/*Profile edit popup functions*/
function openProfileEditPopup() {
    copyProfileDataToInputs();
    formValidators[profileEditForm.getAttribute('name')]._resetValidation();
    openPopup(profileEditPopup);
}

function handleSubmitEditProfilePopup(evt) {
    evt.preventDefault();
    copyInputsToProfileData();
    closePopup(profileEditPopup);
}

function copyProfileDataToInputs() {
    profileEditNameInput.value = profileName.textContent;
    profileEditProfessionInput.value = profileProfession.textContent;
}

function copyInputsToProfileData() {
    profileName.textContent = profileEditNameInput.value;
    profileProfession.textContent = profileEditProfessionInput.value;
}

/* Card add popup functions*/
function openCardAddPopup() {
    cardAddForm.reset();
    formValidators[cardAddForm.getAttribute('name')]._resetValidation();
    openPopup(cardAddPopup);
}

function handleSubmitAddCardPopup(evt) {
    evt.preventDefault();
    const cardDetails = {
        name: cardAddPlaceNameInput.value,
        link: cardAddImageLinkInput.value
    }
    renderCard(createCard(cardDetails));
    closePopup(cardAddPopup);
}

/* Other functions*/
function handleKeydown(evt) {
    if (evt.code === 'Escape') {
        closePopup(document.querySelector('.overlay_active'));
    }
}

function openPopup(popup) {
    document.addEventListener('keydown', handleKeydown);
    popup.classList.add(overlayActiveMod);
}

function closePopup(popup) {
    popup.classList.remove(overlayActiveMod);
    document.removeEventListener('keydown', handleKeydown);
}

function enablePopupListeners() {
    const popups = document.querySelectorAll('.overlay');
    popups.forEach((popup) => {
        popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('overlay')) {
                closePopup(popup);
            }
            if (evt.target.classList.contains('close-button')) {
                closePopup(popup);
            }
        });
    });
}

cardAddButton.addEventListener('click', openCardAddPopup);
cardAddForm.addEventListener('submit', handleSubmitAddCardPopup);
profileEditButton.addEventListener('click', openProfileEditPopup);
profileEditForm.addEventListener('submit', handleSubmitEditProfilePopup);

addInitialCardsToPage();
enableValidation(validationSetting);
enablePopupListeners();