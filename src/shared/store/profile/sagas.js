import { call, put, takeLatest } from 'redux-saga/effects'
import { getUserDetails } from '../../../apis';
import { GET_USER_DETAILS, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAILURE } from './actionTypes'

//Generator function
function* userDetails(action) {
    try {
        const response = yield call(getUserDetails, action.payload.userName);
        yield put({ type: GET_USER_DETAILS_SUCCESS, data: response })
    }   
    catch (error) {
        yield put({ type: GET_USER_DETAILS_FAILURE, data: error })
    }
}

export function* userSaga() {
    yield takeLatest(GET_USER_DETAILS, userDetails);
}