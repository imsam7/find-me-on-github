import { all } from 'redux-saga/effects'
import { userSaga } from './profile/sagas'
import { followersSaga } from './followers/sagas'
import { followingSaga } from './following/sagas'
import { reposSaga } from './repos/sagas'

export default function* rootSaga() {
    yield all([
        userSaga(),
        followersSaga(),
        reposSaga(),
        followingSaga()
    ]);
}