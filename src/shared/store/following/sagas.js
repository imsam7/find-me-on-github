import { call, put, takeLatest } from 'redux-saga/effects'
import { getFollowing } from '../../../apis';
import { GET_FOLLOWING, GET_FOLLOWING_SUCCESS, GET_FOLLOWING_FAILURE } from './actionTypes'

//Generator function
function* followingDetails(action) {
    try {
        const response = yield call(getFollowing, action.payload.userName);
        yield put({ type: GET_FOLLOWING_SUCCESS, data: response })
    }
    catch (error) {
        yield put({ type: GET_FOLLOWING_FAILURE, data: error })
    }
}

export function* followingSaga() {
    yield takeLatest(GET_FOLLOWING, followingDetails);
}