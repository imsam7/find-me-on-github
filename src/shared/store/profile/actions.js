import { GET_USER_DETAILS, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAILURE } from './actionTypes'

export const loadUserData = (payload) => ({ type: GET_USER_DETAILS, payload });
export const loadUserDataSuccess = data => ({ type: GET_USER_DETAILS_SUCCESS, data });
export const loadUserDataFailure = (error) => ({ type: GET_USER_DETAILS_FAILURE, error });