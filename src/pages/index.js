import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from "../components/UserInfo.js";
import {
    cardsContainerSelector,
    cardTemplateSelector,
    validationSetting,
    cardAddPopupSelector,
    cardAddButton,
    profileNameSelector,
    profileProfessionSelector,
    profileEditButton,
    initialList, profileEditPopupSelector, imageZoomPopupSelector, formValidators
} from '../constants/constants.js';


const initialCardList = makeCardList(initialList);
const user = new UserInfo(profileNameSelector, profileProfessionSelector);

const cardList = new Section({
    items: initialCardList, renderer: (item) => {
        cardList.addItem(item);
    }
}, cardsContainerSelector);

const cardAddPopup = new PopupWithForm({
    popupSelector: cardAddPopupSelector, handleFormSubmit: () => {
        cardList.addItem(createCard(cardAddPopup.getInputValues()));
    }
});

const profileEditPopup = new PopupWithForm({
    popupSelector: profileEditPopupSelector, handleFormSubmit: () => {
        copyInputsToProfileData();
    }
});
const imagePopup = new PopupWithImage(imageZoomPopupSelector);



function makeCardList(list) {
    const cardList = [];
    list.forEach((cardDetails) => {
        cardList.push(createCard(cardDetails));
    });
    return cardList;
}

function createCard(cardDetails) {
    const card = new Card(cardDetails, cardTemplateSelector, (name, imageLink) => {
        imagePopup.open(name, imageLink);
    });
    return card.initiateCard();
}

function copyProfileDataToInputs() {
    profileEditPopup.setInputValues(user.getUserInfo());
}

function copyInputsToProfileData() {
    const profileData = profileEditPopup.getInputValues();
    user.setUserInfo(profileData);
}

function openProfileEditPopup() {
    copyProfileDataToInputs();
    formValidators['profile-edit-form'].resetValidation();
    profileEditPopup.open();
}

function openCardAddPopup() {
    formValidators['card-add-form'].resetValidation();
    cardAddPopup.open();
}

function enableValidation(validationSetting) {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach(form => {
        const validator = new FormValidator(validationSetting, form);
        const formName = form.getAttribute('name');
        formValidators[formName] = validator;
        validator.enableValidation();
    });
}

cardAddButton.addEventListener('click', openCardAddPopup);
profileEditButton.addEventListener('click', openProfileEditPopup);

enableValidation(validationSetting);
cardList.renderElement();
cardAddPopup.setEventListeners();
profileEditPopup.setEventListeners();
imagePopup.setEventListeners();

