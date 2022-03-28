export default class UserInfo {
    constructor(profileNameSelector, profileProfessionSelector, profileAvatarSelector) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileProfession = document.querySelector(profileProfessionSelector);
        this._profileAvatar = document.querySelector(profileAvatarSelector)
    }

    getUserInfo() {
        return {
            profileName: this._profileName.textContent,
            profileProfession: this._profileProfession.textContent,
            profileId: this._profileId
        }
    }

    setUserInfo({name, about, avatar, _id}) {
        this._profileName.textContent = name;
        this._profileProfession.textContent = about;
        this._profileId = _id;
        this._profileAvatar.src = avatar;
    }

    updateAvatar(avatarLink) {
        this._profileAvatar.src = avatarLink;
    }
}