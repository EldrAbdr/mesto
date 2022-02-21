import {Card} from "./card";

const cardsContainer = document.querySelector('.cards');
const overlayActiveMod = ('overlay_active');
/* Popup for adding cards variables*/
const cardAddPopup = document.querySelector('.overlay_card-add-popup');
const cardAddForm = document.querySelector('.form_add-popup');
const cardAddButton = document.querySelector('.profile__add-button');
const cardAddPlaceNameInput = document.querySelector('.form__input_place-name');
const cardAddImageLinkInput = document.querySelector('.form__input_link');
const cardAddPopupCloseButton = document.querySelector('.form__card-add-close-button');
/* Profile edit popup variables*/
const profileEditPopup = document.querySelector('.overlay_card-edit-popup');
const profileEditForm = document.querySelector('.form_edit-popup');
const profileEditNameInput = document.querySelector('.form__input_name');
const profileEditProfessionInput = document.querySelector('.form__input_profession');
const profileEditCloseButton = document.querySelector('.form__edit-close-button');
/* Profile variables*/
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileEditButton = document.querySelector('.profile__edit-button');
/* Image zoom popup variables */
const imageZoomPopup = document.querySelector('.overlay_image-popup');
const imageZoomPicture = document.querySelector('.image-popup__image');
const imageZoomCaption = document.querySelector('.image-popup__caption');
const imageZoomCloseButton = document.querySelector('.image-popup__close-button');

const initialCards = [
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

const addInitialCardsToPage = () => {
    initialCards.forEach((item) => {
        console.log(new Card(item.name, item.link));
        renderCard((new Card(item.name, item.link)).createCard());
    });
}

/*function createCard(name, imageLink) {
    const cardTemplate = document.querySelector('.card-template').content;
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    cardImage.alt = name;
    cardImage.src = imageLink;
    card.querySelector('.card__name').textContent = name;

    cardImage.addEventListener('click', () => {
        openImageZoomPopup(name, imageLink);
    });
        card.querySelector('.card__like').addEventListener('click', toggleLikeButton);
    card.querySelector('.card__delete-button').addEventListener('click', removeCard);
    return card;
}*/

function renderCard(card) {
    cardsContainer.prepend(card);
}

export function removeCard(evt) {
    evt.target.closest('.card').remove();
}

export function toggleLikeButton(evt) {
    evt.target.classList.toggle('card__like_black');
}

/* Image zoom popup functions*/
export function openImageZoomPopup(name, imageLink) {
    imageZoomPicture.src = imageLink
    imageZoomPicture.alt = name
    imageZoomCaption.textContent = name;
    openPopup(imageZoomPopup);
}

function closeImageZoomPopup() {
    closePopup(imageZoomPopup);
}

/*Profile edit popup functions*/
function openProfileEditPopup() {
    copyProfileDataToInputs();
    openPopup(profileEditPopup);
}

function closeProfileEditPopup() {
    closePopup(profileEditPopup);
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
    disableSubmitButton(cardAddForm);
    openPopup(cardAddPopup);
}

function closeCardAddPopup() {
    closePopup(cardAddPopup);
}

/*function handleSubmitAddCardPopup(evt) {
    evt.preventDefault();
    renderCard(createCard(cardAddPlaceNameInput.value, cardAddImageLinkInput.value));
    closePopup(cardAddPopup);
}*/

/* Other functions*/
function handleClickOnDocument(evt) {
    const target = evt.target.classList;
    if (target.contains('overlay')) {
        closeOpenedPopup()
    }
}

function handleKeydown(evt) {
    if (evt.code === 'Escape') {
        closeOpenedPopup();
    }
}

function closeOpenedPopup() {
    closePopup(document.querySelector('.overlay_active'));
}

function openPopup(popup) {
    popup.classList.add(overlayActiveMod);
    document.addEventListener('click', handleClickOnDocument);
    document.addEventListener('keydown', handleKeydown);
}

function closePopup(popup) {
    popup.classList.remove(overlayActiveMod);
    document.removeEventListener('click', handleClickOnDocument);
    document.removeEventListener('keydown', handleKeydown);
}

function disableSubmitButton(popupForm) {
    popupForm.querySelector('.form__submit-button').disabled = true;
}

cardAddButton.addEventListener('click', openCardAddPopup);
cardAddForm.addEventListener('submit', handleSubmitAddCardPopup);
cardAddPopupCloseButton.addEventListener('click', closeCardAddPopup);
profileEditButton.addEventListener('click', openProfileEditPopup);
profileEditForm.addEventListener('submit', handleSubmitEditProfilePopup);
profileEditCloseButton.addEventListener('click', closeProfileEditPopup);
imageZoomCloseButton.addEventListener('click', closeImageZoomPopup);

addInitialCardsToPage();