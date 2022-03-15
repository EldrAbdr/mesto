export default class UserInfo {
    constructor(profileNameSelector, profileProfessionSelector) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileProfession = document.querySelector(profileProfessionSelector);
    }

    getUserInfo() {
        return {
            profileName: this._profileName.textContent,
            profileProfession: this._profileProfession.textContent
        }
    }

    setUserInfo({profileName, profileProfession}) {
        this._profileName.textContent = profileName;
        this._profileProfession.textContent = profileProfession;
    }
}