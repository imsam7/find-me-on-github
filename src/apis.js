import { serviceHelper } from './shared/util/serviceHelper';

// All api calls
export const getUserDetails = (userName) => {
    return serviceHelper.get(userName)
}

export const getRepositories = (userName) => {
    return serviceHelper.get(userName + "/repos")
}

export const getFollowers = (userName) => {
    return serviceHelper.get(userName + "/followers")
}

export const getFollowing = (userName) => {
    return serviceHelper.get(userName + "/following")
}