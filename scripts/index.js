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

let isProfileEditPopupOpen = false;
let isCardAddPopupOpen = false;
let isImageZoomPopupOpen = false;

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

addInitialCardsToPage();

function addInitialCardsToPage() {
    initialCards.forEach((item) => {
        renderCard(createCard(item.name, item.link));
    });
}

function createCard(name, imageLink) {
    const cardTemplate = document.querySelector('.card-template').content;
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__name').textContent = name;
    card.querySelector('.card__image').alt = name;
    card.querySelector('.card__image').src = imageLink;
    addListenerOnLikeButton(card.querySelector('.card__like'));
    addListenerOnDeleteButton(card.querySelector('.card__delete-button'));
    addListenerOnCardImage(card.querySelector('.card__image'));
    return card;
}

function renderCard(card) {
    cardsContainer.prepend(card);
}

function addListenerOnDeleteButton(deleteButton) {
    deleteButton.addEventListener('click', removeCard);
}

function addListenerOnLikeButton(likeButton) {
    likeButton.addEventListener('click', activateLikeButton);
}

function addListenerOnCardImage(image) {
    image.addEventListener('click', openImageZoomPopup);
}

function removeCard(targetDeleteButton) {
    identifyCard(targetDeleteButton).remove();
}

function identifyCard(deleteButton) {
    return deleteButton.target.closest('.card');
}

function activateLikeButton(targetCard) {
    targetCard.target.classList.toggle('card__like_black');
}

/* Image zoom popup functions*/
function openImageZoomPopup(image) {
    copyImagePropertiesToPopup(image);
    openPopup(imageZoomPopup);
    isImageZoomPopupOpen = true;
}

function closeImageZoomPopup() {
    closePopup(imageZoomPopup);
    isImageZoomPopupOpen = false;
}

function copyImagePropertiesToPopup(image) {
    imageZoomPicture.src = image.target.currentSrc;
    imageZoomPicture.alt = image.target.alt;
    imageZoomCaption.textContent = image.target.alt;
}

/*Profile edit popup functions*/
function openProfileEditPopup() {
    copyProfileDataToInputs();
    openPopup(profileEditPopup);
    isProfileEditPopupOpen = true;
}

function closeProfileEditPopup() {
    closePopup(profileEditPopup);
    isProfileEditPopupOpen = false;
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
    openPopup(cardAddPopup);
    isCardAddPopupOpen = true;
}

function closeCardAddPopup() {
    closePopup(cardAddPopup);
    isCardAddPopupOpen = false;
}

function handleSubmitAddCardPopup(evt) {
    evt.preventDefault();
    if (cardAddPlaceNameInput.value !== '' && cardAddImageLinkInput.value !== '') {
        renderCard(createCard(cardAddPlaceNameInput.value, cardAddImageLinkInput.value));
        closePopup(cardAddPopup);
    }
}

/* Other functions*/
function handleClickOnDocument(evt) {
    let target = evt.target.classList;
    if (target.contains('overlay')) {
        closeOpenedPopups()
    }
}

function handleKeydown(evt) {
    if (evt.code === 'Escape') {
        closeOpenedPopups()
    }
}

function closeOpenedPopups() {
    if (isCardAddPopupOpen) {
        closeCardAddPopup();
    }
    if (isProfileEditPopupOpen) {
        closeProfileEditPopup();
    }
    if (isImageZoomPopupOpen) {
        closeImageZoomPopup();
    }
}

function openPopup(popup) {
    popup.classList.add(overlayActiveMod);
}

function closePopup(popup) {
    popup.classList.remove(overlayActiveMod);
}

cardAddButton.addEventListener('click', openCardAddPopup);
cardAddForm.addEventListener('submit', handleSubmitAddCardPopup);
cardAddPopupCloseButton.addEventListener('click', closeCardAddPopup);
profileEditButton.addEventListener('click', openProfileEditPopup);
profileEditForm.addEventListener('submit', handleSubmitEditProfilePopup);
profileEditCloseButton.addEventListener('click', closeProfileEditPopup);
imageZoomCloseButton.addEventListener('click', closeImageZoomPopup);
document.addEventListener('click', handleClickOnDocument);
document.addEventListener('keydown', handleKeydown);









