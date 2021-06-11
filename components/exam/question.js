import React, { memo } from "react";
import { Card } from "antd";
import { Options } from "./options";
const question = memo((props) => {
  const {
    questionId,
    question,
    hint,
    options,
    mark,
    isNegative,
    questionResponse,
  } = props;
  const optionResponse = (optionId) => {
    let userAns = {
      questionId,
      optionId,
    };
    questionResponse(userAns);
  };

  return (
    <>
      <Card title={question} 
      bordered={true}
      extra={`Marks:${mark}`}
      >
        <p>{hint && `hint: ${hint}`} </p> 
        <Options optionResponse={optionResponse} options={options} />
      </Card>
    </>
  );
});

export default question;
