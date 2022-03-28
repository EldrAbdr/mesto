import {e} from "caniuse-lite/data/browserVersions";

export default class Api {
    constructor({url, groupId, token}) {
        this._url = url;
        this._groupId = groupId;
        this._token = token;

    }

    loadUserInfo() {
        return fetch(`https://nomoreparties.co/v1/${this._groupId}/users/me`, {
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
            .then(userInfo => userInfo)
            .catch(err => {
                console.log(err);
            })
    }

    editProfile({profileName, profileProfession}) {
        console.log(profileName + "  " + profileProfession)
        return fetch(`https://mesto.nomoreparties.co/v1/${this._groupId}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: profileName,
                about: profileProfession
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    editAvatar(avatarLink) {
        return fetch(`https://mesto.nomoreparties.co/v1/${this._groupId}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatarLink
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    loadCards() {
        return fetch(`${this._url}${this._groupId}/cards`, {
            headers: {
                authorization: this._token
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
            .then(cards => cards)
            .catch(err => {
                console.log(err);
            })
    }

    addNewCard({name, imageLink}) {
        return fetch(`${this._url}${this._groupId}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: imageLink
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
            .then(data => data)
            .catch(err => {
                console.log(err);
            })
    }

    deleteCardOnServer(cardId) {
        return fetch(`${this._url}${this._groupId}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    addLike(cardId) {
        return fetch(`${this._url}${this._groupId}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    removeLike(cardId) {
        return fetch(`${this._url}${this._groupId}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}