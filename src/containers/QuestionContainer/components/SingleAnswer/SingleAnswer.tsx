import { IQuestion } from "types/responseDto";
import { Row, Col, Radio, Space } from "antd";
import { IAnswer } from "types";
import { FC } from "react";
import { questionToAnswerMapper } from "utils/mappers";

interface ISingleAnswerProps {
  question: IQuestion;
  onChange: (answer: IAnswer) => void;
}

export const SingleAnswer: FC<ISingleAnswerProps> = ({
  question,
  onChange,
}: ISingleAnswerProps) => {
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
          <Radio.Group onChange={({target}) => {
              const selectedOption = options?.find((option) => option.letter ===  target.value);
              const answer = questionToAnswerMapper(question, selectedOption);
              onChange(answer)
          }} >
            <Space size="large" direction="vertical">
              {options?.map((option) => {
                return (
                  <Radio 
                    key={option.letter}
                    value={option.letter}
                    name = {option.text}
                  >{`${option.letter}. ${option.text}`}</Radio>
                );
              })}
            </Space>
          </Radio.Group>
        </Col>
      </Row>
    </>
  );
};
