import { all, fork} from 'redux-saga/effects';
import { watchFetchQuestions } from './watchFetchQuestions.saga';

export function* questionsSaga(): Generator {
    yield all([
        yield fork(watchFetchQuestions),
    ]);
}