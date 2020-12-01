import { GET_FOLLOWERS, GET_FOLLOWERS_SUCCESS, GET_FOLLOWERS_FAILURE } from './actionTypes'

const initialState = {
    loading: true,
    followers: {},
    error: null
}

const followersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FOLLOWERS:
            return {
                ...state,
                loading: true
            };
        case GET_FOLLOWERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                followers: action.data
            };
        case GET_FOLLOWERS_FAILURE:
            return {
                ...state,
                loading: true,
                error: action,
                followers: null
            };
        default:
            return state;
    }
}

export default followersReducer;