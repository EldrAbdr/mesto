import {profileNameSelector, profileProfessionSelector} from "../constants/constants";

export default class UserInfo {
    constructor(profileNameSelector, profileProfessionSelector) {
        this._profileName = profileNameSelector;
        this._profileProfession = profileProfessionSelector;
    }

    getUserInfo() {
        return {
            profileName: this._profileName,
            profileProfession: this._profileProfession
        }
    }

    setUserInfo({profileName, profileProfession}) {
        this._profileName = profileName;
        this._profileProfession = profileProfession;
        profileNameSelector.textContent = profileName;
        profileProfessionSelector.textContent = profileProfession;
    }
}