import { GET_FOLLOWERS, GET_FOLLOWERS_SUCCESS, GET_FOLLOWERS_FAILURE } from './actionTypes'

export const loadFollowers = (payload) => ({ type: GET_FOLLOWERS, payload });
export const loadFollowerSuccess = data => ({ type: GET_FOLLOWERS_SUCCESS, data });
export const loadFollowersFailure = (error) => ({ type: GET_FOLLOWERS_FAILURE, error });