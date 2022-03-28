import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from "../components/UserInfo.js";
import PopupWithQuestion from "../components/PopupWithQuestion";
import Api from "../components/Api.js";
import {
    cardsContainerSelector,
    cardTemplateSelector,
    validationSetting,
    cardAddPopupSelector,
    cardAddButton,
    profileNameSelector,
    profileProfessionSelector,
    profileAvatarSelector,
    profileEditButton,
    avatarEditButton,
    profileEditPopupSelector,
    imageZoomPopupSelector,
    formValidators,
    deleteQuestionPopupSelector,
    avatarEditPopupSelector,
    apiConfig
} from '../constants/constants.js';



const user = new UserInfo(profileNameSelector, profileProfessionSelector, profileAvatarSelector);
const api = new Api(apiConfig);

const cardList = new Section({
    items: [], renderer: (item) => {
        cardList.addItem(item);
    }
}, cardsContainerSelector);

const cardAddPopup = new PopupWithForm({
    popupSelector: cardAddPopupSelector, handleFormSubmit: () => {
        api.addNewCard(cardAddPopup.getInputValues()).then(card => {
            cardList.addItem(createCard(card));
            cardAddPopup.close();
        })
    }
});

const deleteQuestionPopup = new PopupWithQuestion({
    popupSelector: deleteQuestionPopupSelector,
    handleSubmitButton: () => {
        api.deleteCardOnServer(deleteQuestionPopup.card.cardId).then(() => {
            deleteQuestionPopup.card.removeSelf();
        });
    }
});

const profileEditPopup = new PopupWithForm({
    popupSelector: profileEditPopupSelector, handleFormSubmit: () => {
        console.log(profileEditPopup.getInputValues())
        api.editProfile(profileEditPopup.getInputValues()).then(data => {
            user.setUserInfo(data);
        })
        profileEditPopup.close();
    }
});

const imagePopup = new PopupWithImage(imageZoomPopupSelector);
const avatarEditPopup = new PopupWithForm({
    popupSelector: avatarEditPopupSelector, handleFormSubmit: () => {
        api.editAvatar(avatarEditPopup.getInputValues().avatarLink).then((data) => {
            user.updateAvatar(data.avatar)
            avatarEditPopup.close();
        })
    }
});

function createCard(cardDetails) {
    const card = new Card(cardDetails, cardTemplateSelector,
        (name, imageLink) => {
            imagePopup.open(name, imageLink);
        },
        () => {
            deleteQuestionPopup.open(card);
        }, (isUserLikeCard) => {
            if (isUserLikeCard) {
                api.removeLike(card.cardId).then(data => {
                    card.updateLikeNumber(data.likes.length)
                    card.toggleLikeButton();
                })

            } else {
                api.addLike(card.cardId).then(data => {
                    card.updateLikeNumber(data.likes.length)
                    card.toggleLikeButton();
                })
            }
        },
        user.getUserInfo().profileId);
    return card.initiateCard();
}

function copyProfileDataToInputs() {
    profileEditPopup.setInputValues(user.getUserInfo());
}

function openProfileEditPopup() {
    copyProfileDataToInputs();
    formValidators['profile-edit-form'].resetValidation();
    profileEditPopup.open();
}

function openAvatarEditPopup() {
    formValidators['avatar-form'].resetValidation();
    avatarEditPopup.open();
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
avatarEditButton.addEventListener('click', openAvatarEditPopup);

api.loadUserInfo().then(userInfo => {
    user.setUserInfo(userInfo)
});

Promise.allSettled([api.loadUserInfo()]).then(() => {
    api.loadCards().then(cards => {
        cards.forEach(card => {
            cardList.addItem(createCard(card))
        })
        cardList.renderElement();
    })
});

enableValidation(validationSetting);
deleteQuestionPopup.setEventListeners();
cardAddPopup.setEventListeners();
profileEditPopup.setEventListeners();
imagePopup.setEventListeners();
avatarEditPopup.setEventListeners();