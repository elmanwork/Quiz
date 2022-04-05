import { FC, useEffect, useMemo } from "react";
import { Button, Spin, Card } from "antd";
import { useConnectedAction } from "hooks";
import * as QuestionsActions from "store/questions/questions.actions";
import * as QuestionsSelectors from "store/questions/questions.selectors";
import * as QuizSelectors from "store/quiz/quiz.selectors";
import * as QuizActions from "store/quiz/quiz.actions";

import { useSelector } from "react-redux";
import QuestionContainerStyle from "./QuestionContainer.style";

const getComponent

export const QuestionContainer: FC = () => {
  const fetchQuestions = useConnectedAction(QuestionsActions.fetchQuestions);
  const setCurrentQuestionId = useConnectedAction(
    QuizActions.setCurrentQuestionId
  );
  const questionsData = useSelector(QuestionsSelectors.getQuestions);
  const quiz = useSelector(QuizSelectors.getQuiz);

  const currentQuestion = useMemo(() => {
    if(!questionsData.questions) return null;

    const current =  questionsData.questions.find(question => question.id === quiz.currentId);

    return current || null;
     
  }, [quiz.currentId, questionsData.questions])

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  useEffect(() => {
    if (!quiz.currentId && !!questionsData.questions) {
      if (questionsData.questions.length > 0) {
        setCurrentQuestionId(questionsData.questions[0].id);
      }
    }
  }, [questionsData]);

  return (
    <Card style={QuestionContainerStyle.card}>
      {questionsData.isFetching ? (
        <Spin
          tip="Quiz Getting Ready"
          size="large"
          style={QuestionContainerStyle.spin}
        />
      ) : (
        
      )}
    </Card>
  );
};
