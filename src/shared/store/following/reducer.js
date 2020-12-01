import { GET_FOLLOWING, GET_FOLLOWING_SUCCESS, GET_FOLLOWING_FAILURE } from './actionTypes'

const initialState = {
    loading: true,
    following: {},
    error: null
}

const followingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FOLLOWING:
            return {
                ...state,
                loading: true
            };
        case GET_FOLLOWING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                following: action.data
            };
        case GET_FOLLOWING_FAILURE:
            return {
                ...state,
                loading: true,
                error: action,
                following: null
            };
        default:
            return state;
    }
}

export default followingReducer;