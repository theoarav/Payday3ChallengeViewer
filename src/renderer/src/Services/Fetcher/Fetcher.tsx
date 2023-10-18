import { USER_DATA } from "../globals";
import { getUserInfos } from "../User/User";

/*
    Fetches data into the local storage if needed.
*/
export type AccountDetails = {
    avatar: string;
    userName: string;
    displayName: string;
    emailAddress: string;
}


export const fetchAccountDetails = async () => {
    const userInfos = await getUserInfos();

    //Sanitizing value, we don't care about half the data SBZ sends.
    let accountDetails: AccountDetails = {
        avatar: userInfos.avatarUrl,
        userName: userInfos.userName,
        displayName: userInfos.displayName,
        emailAddress: userInfos.emailAddress
    }

    console.log("accountDetails:",accountDetails)

    localStorage.setItem(USER_DATA, JSON.stringify(accountDetails))
    return;
}

export const fetchSaveDetails = async () => {
    //should be fetched once first logged in check returns true and also on the challenges refreshbutton.

    //getSaveData from User
    //getUserChallenges from Challenges
    //getWalletGold, getWalletCash, getWalletCred from Wallet

    //Store into LocalStorage
    return;
}

