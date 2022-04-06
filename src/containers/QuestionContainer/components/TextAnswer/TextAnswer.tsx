import { Col, Row, Input } from "antd";
import { FC } from "react";
import { IAnswer } from "types";
import { IQuestion } from "types/responseDto";
import { questionToAnswerMapper } from "utils/mappers";

interface ITextAnswerProps {
  question: IQuestion;
  onChange: (answer: IAnswer) => void;
}

export const TextAnswer: FC<ITextAnswerProps> = ({
  question,
  onChange,
}: ITextAnswerProps) => {
    const { question: title, options } = question;
    return (
      <>
        <Row>
          <Col span={24}>
            <h2>{title}</h2>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
          <Input placeholder="Please type your answer here" onChange={({target}) => {
              const answer = questionToAnswerMapper(question, target.value);
              onChange(answer)
          }} />
          </Col>
        </Row>
      </>
    );
  };
  