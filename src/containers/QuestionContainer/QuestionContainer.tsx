import { FC, useEffect } from "react";
import { Button } from "antd";
import { useConnectedAction } from "hooks";
import * as QuestionsActions from 'store/questions/questions.actions';
import * as QuestionsSelectors from 'store/questions/questions.selectors';
import { useSelector } from "react-redux";


export const QuestionContainer: FC = () => {
  const fetchQuestions = useConnectedAction(QuestionsActions.fetchQuestions)
  const questionsData = useSelector(QuestionsSelectors.getQuestions);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions])
  console.log(questionsData.questions)

  return (
    <div>
      Temp Component:
      <Button type="primary">Primary Button</Button>
      {
        questionsData.questions?.map( question => question.question)
      }
    </div>
  );
};
