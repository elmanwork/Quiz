import { FC, useEffect, useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { useSelector } from "react-redux";
import { getQuiz } from "store/quiz/quiz.selectors";
import * as QuizActions from "store/quiz/quiz.actions";
import { IQuestionOption } from "types";
import { useConnectedAction } from "hooks";
import { useNavigate } from "react-router-dom";

const getResult = (
  correctOption: string[],
  selectedOption?: string | IQuestionOption | IQuestionOption[]
): Boolean => {
  if (!selectedOption) return false;

  if (Array.isArray(selectedOption)) {
    let result = true;
    selectedOption.forEach((element) => {
      if (!correctOption.includes(element.letter)) {
        result = false;
      }
    });

    return result;
  } else {
    return correctOption.includes(
      typeof selectedOption === "string"
        ? selectedOption
        : selectedOption.letter
    );
  }
};

export const ResultContainer: FC = () => {
  const quiz = useSelector(getQuiz);
  let navigate = useNavigate();
  const resetQuiz = useConnectedAction(QuizActions.resetQuiz);
  const [score, setScore] = useState<{ total: number; correctOnes: number }>({
    total: 0,
    correctOnes: 0,
  });

  useEffect(() => {
    const correctAnswersCount = quiz.answers.reduce((accum, answer) => {
      return getResult(answer.correctOption, answer.selectedOption)
        ? accum + 1
        : accum;
    }, 0);
    setScore({ total: quiz.answers.length, correctOnes: correctAnswersCount });
  }, [quiz.answers]);

  return (
    <Card>
      <Row>
        <Col span={24}>
          <h1>Your score:{`  ${score.correctOnes}/${score.total}`}</h1>
        </Col>
      </Row>
      {quiz.answers?.map((answer, index) => {
        const isCorrect = getResult(
          answer.correctOption,
          answer.selectedOption
        );
        return (
          <Row key={answer.id}>
            <Col>
              <h2>{`${index + 1}. ${answer.question}`}</h2>
              <h3>
                You answered:{" "}
                {(() => {
                  if (isCorrect) {
                    return "Correct";
                  } else {
                    return `Wrong. Correct Answers: ${answer.correctOption.join()}.`;
                  }
                })()}
              </h3>
            </Col>
          </Row>
        );
      })}
      <Row justify="center">
        <Col>
          <Button
            type="primary"
            onClick={() => {
              resetQuiz();
              navigate("/");
            }}
          >
            Finish
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
