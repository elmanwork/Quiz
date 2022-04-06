import { Col, Checkbox , Row, Space } from "antd";
import { FC } from "react";
import { IAnswer, IQuestionOption } from "types";
import { IQuestion } from "types/responseDto";
import { questionToAnswerMapper } from "utils/mappers";

interface IMultiAnswerProps {
  question: IQuestion;
  onChange: (answer: IAnswer) => void;
}

export const MultiAnswer: FC<IMultiAnswerProps> = ({
  question,
  onChange,
}: IMultiAnswerProps) => {
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
            <Checkbox.Group onChange={(checkedOptions) => {
                let selectedOptions: IQuestionOption[] = [];
                checkedOptions.map(checkedOption => {
                  let option = options?.find((option) => option.letter ===  checkedOption);
                  if(option) selectedOptions.push(option);
                })
                const answer = questionToAnswerMapper(question, selectedOptions);
                onChange(answer)
            }} >
              <Space size="large" direction="vertical">
                {options?.map((option) => {
                  return (
                    <Checkbox 
                      key={option.letter}
                      value={option.letter}
                      name = {option.text}
                    >{`${option.letter}. ${option.text}`}</Checkbox>
                  );
                })}
              </Space>
            </Checkbox.Group>
          </Col>
        </Row>
      </>
    );
  };
  