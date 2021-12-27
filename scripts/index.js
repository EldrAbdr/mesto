const editButton = document.querySelector('.profile__edit-button');
const overlayActiveMod = document.querySelector('.overlay_active');
const closeButton = document.querySelector('.edit-form__close-button');
let nameField = document.querySelector('.edit-form__name');
let aboutField = document.querySelector('.edit-form__about');
const saveButton = document.querySelector('.edit-form__save-button');

editButton.addEventListener('click', openWindow);
closeButton.addEventListener('click', closeWindow);

document.addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList.contains('overlay')) {
        closeWindow();
    }
    if ((target.classList.contains('card__like'))) {
        if (target.classList.contains('card__like_black')) {
            target.classList.remove('card__like_black');
        } else {
            target.classList.add('card__like_black');
        }
    }
});

saveButton.addEventListener('submit', function (evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').textContent = nameField.value;
    document.querySelector('.profile__about').textContent = aboutField.value;
    closeWindow();
});

document.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
        closeWindow()
    }
});

function openWindow() {
    overlayActiveMod.style.display = 'block';
    document.querySelector('.page').style.overflow = 'hidden';
}

function closeWindow() {
    overlayActiveMod.style.display = 'none';
    document.querySelector('.page').style.overflow = '';
}

