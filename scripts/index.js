const overlay = document.querySelector('.overlay');
const editButton = document.querySelector('.profile__edit-button');
const overlayActiveMod = ('overlay_active');
const closeButton = document.querySelector('.edit-form__close-button');
const saveButton = document.querySelector('.edit-form__save-button');
const inputsForm = document.querySelector('.edit-form');
let nameInput = document.querySelector('.edit-form__input_name');
let professionInput = document.querySelector('.edit-form__input_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

function openWindow() {
    copyProfileDataToInputs()
    overlay.classList.add(overlayActiveMod);
}

function closeWindow() {
    overlay.classList.remove(overlayActiveMod);
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
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
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;
}

inputsForm.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', openWindow);
closeButton.addEventListener('click', closeWindow);
document.addEventListener('click', handleClick);
document.addEventListener('keydown', handleKeydown);




