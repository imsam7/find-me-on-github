import { combineReducers } from 'redux';
import profileReducer from '../store/profile/reducer';
import followersReducer from '../store/followers/reducer';
import repoReducer from '../store/repos/reducer';
import followingReducer from '../store/following/reducer';

const appReducer = combineReducers({
    profile: profileReducer,
    followers: followersReducer,
    repos: repoReducer,
    following: followingReducer
});

const rootReducer = (state = {}, action) => {
    if (action.type === 'RESET_STATE') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;