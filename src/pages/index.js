import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from "../components/UserInfo.js";
import {
    cardsContainer,
    cardTemplate,
    validationSetting,
    cardAddPopupSelector,
    cardAddButton,
    profileNameSelector,
    profileProfessionSelector,
    profileEditButton,
    imageZoomPopup,
    initialList, profileEditPopupSelector
} from '../constants/constants.js';


const initialCardList = makeCardList(initialList);
const initialUser = new UserInfo(profileNameSelector.textContent, profileProfessionSelector.textContent);

const cardList = new Section({
    items: initialCardList, renderer: (item) => {
        cardList.addItem(item);
    }
}, cardsContainer);

const cardAddPopup = new PopupWithForm({
    selector: cardAddPopupSelector, handleFormSubmit: () => {
        cardList.addItem(createCard(cardAddPopup.getInputValues()));
    }
});

const profileEditPopup = new PopupWithForm({
    selector: profileEditPopupSelector, handleFormSubmit: () => {
        copyInputsToProfileData();
    }
});

const cardAddFormValidator = new FormValidator(validationSetting, cardAddPopup.popupForm);
const profileFormValidator = new FormValidator(validationSetting, profileEditPopup.popupForm);

cardList.renderElement();
cardAddPopup.setEventListeners();
profileEditPopup.setEventListeners();
cardAddFormValidator.enableValidation();
profileFormValidator.enableValidation();

function makeCardList(list) {
    const cardList = [];
    list.forEach((cardDetails) => {
        cardList.push(createCard(cardDetails));
    });
    return cardList;
}

function createCard(cardDetails) {
    const card = new Card(cardDetails, cardTemplate, () => {
        const imagePopup = new PopupWithImage(cardDetails, imageZoomPopup);
        imagePopup.setEventListeners();
        imagePopup.open();
    });
    return card.initiateCard();
}

function copyProfileDataToInputs() {
    profileEditPopup.setInputValues(initialUser.getUserInfo());
}

function copyInputsToProfileData() {
    const profileData = profileEditPopup.getInputValues();
    initialUser.setUserInfo(profileData);
}

function openProfileEditPopup() {
    copyProfileDataToInputs();
    profileFormValidator.resetValidation();
    profileEditPopup.open();
}

function openCardAddPopup() {
    cardAddFormValidator.resetValidation();
    cardAddPopup.open();
}

cardAddButton.addEventListener('click', openCardAddPopup);
profileEditButton.addEventListener('click', openProfileEditPopup);


