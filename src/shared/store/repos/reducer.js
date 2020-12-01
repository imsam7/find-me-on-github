import { GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_FAILURE } from './actionTypes'

const initialState = {
    loading: true,
    repos: {},
    error: null
}

const repoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REPOS:
            return {
                ...state,
                loading: true
            };
        case GET_REPOS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                repos: action.data
            };
        case GET_REPOS_FAILURE:
            return {
                ...state,
                loading: true,
                error: action,
                repos: null
            };
        default:
            return state;
    }
}

export default repoReducer;