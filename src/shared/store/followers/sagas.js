import { call, put, takeLatest } from 'redux-saga/effects'
import { getFollowers } from '../../../apis';
import { GET_FOLLOWERS, GET_FOLLOWERS_SUCCESS, GET_FOLLOWERS_FAILURE } from './actionTypes'

//Generator function
function* followerDetails(action) {
    try {
        const response = yield call(getFollowers, action.payload.userName);
        yield put({ type: GET_FOLLOWERS_SUCCESS, data: response })
    }   
    catch (error) {
        yield put({ type: GET_FOLLOWERS_FAILURE, data: error })
    }
}

export function* followersSaga() {
    yield takeLatest(GET_FOLLOWERS, followerDetails);
}