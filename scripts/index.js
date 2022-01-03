const overlay = document.querySelector('.overlay');
const editButton = document.querySelector('.profile__edit-button');
const overlayActiveMod = ('overlay_active');
const closeButton = document.querySelector('.edit-form__close-button');
const saveButton = document.querySelector('.edit-form__save-button');
let nameField = document.querySelector('.edit-form__name');
let aboutField = document.querySelector('.edit-form__about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function openWindow() {
    copyProfileDataToInputs()
    overlay.classList.add(overlayActiveMod);
}

function closeWindow() {
    overlay.classList.remove(overlayActiveMod);
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameField.value;
    profileAbout.textContent = aboutField.value;
    closeWindow();
}

function handleClick(evt) {
    let target = evt.target;
    if (target.classList.contains('overlay')) {
        closeWindow();
    }
}

function handleKeydown(evt) {
    if (evt.code === 'Escape') {
        closeWindow()
    }
}

function copyProfileDataToInputs() {
    nameField.placeholder = profileName.textContent;
    aboutField. placeholder = profileAbout.textContent;
}

saveButton.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', openWindow);
closeButton.addEventListener('click', closeWindow);
document.addEventListener('click', handleClick);
document.addEventListener('keydown', handleKeydown);




