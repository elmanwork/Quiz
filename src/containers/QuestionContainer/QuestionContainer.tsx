import * as QuestionsSelectors from "store/questions/questions.selectors";
import * as QuestionsActions from "store/questions/questions.actions";
import { TextAnswer, MultiAnswer, SingleAnswer } from "./components";
import QuestionContainerStyle from "./QuestionContainer.style";
import { FC, useCallback, useEffect, useMemo } from "react";
import * as QuizSelectors from "store/quiz/quiz.selectors";
import * as QuizActions from "store/quiz/quiz.actions";
import { useNavigate } from "react-router-dom";
import { IQuestion } from "types/responseDto";
import { QuestionType } from "types/enums";
import { useConnectedAction } from "hooks";
import { Spin, Card, Button } from "antd";
import { useSelector } from "react-redux";

export const QuestionContainer: FC = () => {
  const fetchQuestions = useConnectedAction(QuestionsActions.fetchQuestions);
  const setCurrentQuestionId = useConnectedAction(
    QuizActions.setCurrentQuestionId
  );
  const addAnswer = useConnectedAction(QuizActions.addAnswer);
  const questionsData = useSelector(QuestionsSelectors.getQuestions);
  const quiz = useSelector(QuizSelectors.getQuiz);
  let navigate = useNavigate();


  const currentQuestion = useMemo(() => {
    if (!questionsData.questions) return null;

    const current = questionsData.questions.find(
      (question) => question.id === quiz.currentId
    );

    return current || null;
  }, [quiz.currentId, questionsData.questions]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  useEffect(() => {
    if (!quiz.currentId && !!questionsData.questions) {
      if (questionsData.questions.length > 0) {
        console.log(questionsData.questions);
        setCurrentQuestionId(questionsData.questions[0].id);
      }
    }
  }, [questionsData.questions, setCurrentQuestionId, quiz.currentId]);

  const getQuestionComponent = useCallback(
    (question: IQuestion) => {
      switch (question.type) {
        case QuestionType.MULTIPLE_ANSWERS:
          return <MultiAnswer question={question} onChange={addAnswer} />;
        case QuestionType.SINGLE_ANSWER:
          return <SingleAnswer question={question} onChange={addAnswer} />;
        case QuestionType.TEXT:
          return <TextAnswer question={question} onChange={addAnswer} />;
      }
    },
    [addAnswer]
  );

  const goNext = useCallback(() => {
    if (questionsData.questions) {
      let currentIndex = questionsData.questions?.findIndex(
        ({ id }) => id === quiz.currentId
      ) as number;
      currentIndex++;
      if (currentIndex < questionsData.questions?.length) {
        console.log(currentIndex);
        setCurrentQuestionId(questionsData.questions[currentIndex].id);
      }else {
        navigate("/Result");
      }
    }
  }, [questionsData, setCurrentQuestionId, quiz]);

  return (
    <Card style={QuestionContainerStyle.card}>
      {questionsData.isFetching ? (
        <Spin
          tip="Quiz Getting Ready"
          size="large"
          style={QuestionContainerStyle.spin}
        />
      ) : (
        <>
          { !!currentQuestion && getQuestionComponent(currentQuestion) }
          <Button style={QuestionContainerStyle.nextBtn} onClick={goNext}>Next</Button>
        </>
      )}
    </Card>
  );
};
