import { GET_USER_DETAILS, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAILURE } from './actionTypes'

const initialState = {
    loading: false,
    userData: {},
    error: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DETAILS:
            return {
                ...state,
                loading: true
            };
        case GET_USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                userData: action.data
            };
        case GET_USER_DETAILS_FAILURE:
            return {
                ...state,
                loading: true,
                error: action,
                userData: null
            };
        default:
            return state;
    }
}

export default profileReducer;