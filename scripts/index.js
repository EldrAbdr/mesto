/*добавляет пустые блоки при не заполненных полях*/
const cards = document.querySelector('.cards');
const overlayActiveMod = ('overlay_active');
/* Popup for adding cards variables*/
const cardAddOverlay = document.querySelector('.overlay_card-add-popup');
const cardAddForm = document.querySelector('.form_add-popup');
const addButton = document.querySelector('.profile__add-button');
let placeNameInput = document.querySelector('.form__input_place-name');
let imageLinkInput = document.querySelector('.form__input_link');
const cardAddPopupCloseButton = document.querySelector('.form__close-button_card-add-popup');
/* Profile edit popup variables*/
const profileEditOverlay = document.querySelector('.overlay');
const profileEditForm = document.querySelector('.form_edit-popup');
let profileEditNameInput = document.querySelector('.form__input_name');
let profileEditProfessionInput = document.querySelector('.form__input_profession');
const profileEditCloseButton = document.querySelector('.form__close-button');
/* Profile variables*/
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
const editButton = document.querySelector('.profile__edit-button');

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

initialAddCardsToPage();



function addCard(name, link) {
    cards.insertAdjacentHTML('afterbegin',
        `<article class="card">
            <button type="button" class="card__delete-button hover-transparent"></button>
            <img class="card__image" src=${link} alt=${name}>
            <div class="card__caption">
                <h2 class="card__name">${name}</h2>
                <button type="button" class="card__like hover-transparent"></button>
            </div>
        </article>`);
}

function initialAddCardsToPage() {
    initialCards.forEach((item) => {
        addCard(item.name, item.link);
    });
}


function openWindow(evt) {
    if (evt.target.classList.contains('profile__add-button')) {
        cardAddOverlay.classList.add(overlayActiveMod);
    }
    if (evt.target.classList.contains('profile__edit-button')) {
        copyProfileDataToInputs()
        profileEditOverlay.classList.add(overlayActiveMod);
    }
}

function closeWindow(evt) { /* переделать в свитч */
    let target = evt.target.classList;
    if (target.contains('form_edit-popup')) {
        profileEditOverlay.classList.remove(overlayActiveMod);
    }
    if (target.contains('form__close-button')) {
        profileEditOverlay.classList.remove(overlayActiveMod);
    }
    if (target.contains('form__close-button_card-add-popup')) {
        cardAddOverlay.classList.remove(overlayActiveMod);
    }
    if (target.contains('form_add-popup')) {
        cardAddOverlay.classList.remove(overlayActiveMod);
    }
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    let target = evt.target.classList;
    if (target.contains('form_edit-popup')) {
        copyInputsToProfileData()
        closeWindow(evt);
    }
    if (target.contains('form_add-popup')) {
        addCard(placeNameInput.value, imageLinkInput.value);
        closeWindow(evt);
    }
}

function handleClickOnDocument(evt) {
    let target = evt.target.classList;
    if (target.contains('overlay')) {
        closeWindow();
    }
    if (target.contains('card__like')) {
        activateLikeButton(target);
    }
    if (target.contains('card__delete-button')) {
        let card = evt.target.closest('.card');
        card.remove();
    }
}

function activateLikeButton(card) {
    card.toggle('card__like_black');
}


function handleKeydown(evt) {
    if (evt.code === 'Escape') {
        closeWindow()
    }
}

function copyProfileDataToInputs() {
    profileEditNameInput.value = profileName.textContent;
    profileEditProfessionInput.value = profileProfession.textContent;
}

function copyInputsToProfileData() {
    profileName.textContent = profileEditNameInput.value;
    profileProfession.textContent = profileEditProfessionInput.value;
}

profileEditForm.addEventListener('submit', handleFormSubmit);
cardAddForm.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', openWindow);
profileEditCloseButton.addEventListener('click', closeWindow);
cardAddPopupCloseButton.addEventListener('click', closeWindow);
addButton.addEventListener('click', openWindow);
document.addEventListener('click', handleClickOnDocument);
document.addEventListener('keydown', handleKeydown);





