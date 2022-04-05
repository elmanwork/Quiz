import { all, fork } from 'redux-saga/effects';
import { questionsSaga } from './questions/sagas';

export function* rootSaga(): Generator {
    yield all([
        yield fork(questionsSaga),
    ])
};