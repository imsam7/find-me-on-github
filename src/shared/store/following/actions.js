import { GET_FOLLOWING, GET_FOLLOWING_SUCCESS, GET_FOLLOWING_FAILURE } from './actionTypes'

export const loadFollowing = (payload) => ({ type: GET_FOLLOWING, payload });
export const loadFollowinguccess = data => ({ type: GET_FOLLOWING_SUCCESS, data });
export const loadFollowingFailure = (error) => ({ type: GET_FOLLOWING_FAILURE, error });