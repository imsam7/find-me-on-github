import { call, put, takeLatest } from 'redux-saga/effects'
import { getRepositories } from '../../../apis';
import { GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_FAILURE } from './actionTypes'

//Generator function
function* repoDetails(action) {
    try {
        const response = yield call(getRepositories, action.payload.userName);
        yield put({ type: GET_REPOS_SUCCESS, data: response })
    }   
    catch (error) {
        yield put({ type: GET_REPOS_FAILURE, data: error })
    }
}

export function* reposSaga() {
    yield takeLatest(GET_REPOS, repoDetails);
}