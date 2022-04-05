import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../questions.actions';
import { QuestionsActionTypes } from '../questions.types';
import * as QuestionApi from 'services/api/Question';
import { IQuestion } from 'types/responseDto';

function* fetchQuestions(action: ReturnType<typeof actions.fetchQuestions>): Generator {
    try {
        yield put(actions.fetchQuestionsLoading());

        const response = (yield call(QuestionApi.fetchQuestions)) as IQuestion[];

        yield put(actions.fetchQuestionsSuccess(response));
    } catch (error) {
        const { message } = error as Error;
        yield put(actions.fetchQuestionsError(message));
    }
}

export function* watchFetchQuestions(): Generator {
    yield takeEvery(QuestionsActionTypes.FETCH_QUESTIONS, fetchQuestions);
}