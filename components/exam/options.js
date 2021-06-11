import React, { memo, useState } from "react";
import { Radio, Input, Space } from "antd";
const Options = memo((props) => {
  const { options,optionResponse } = props;
  const [selectedOption, setSelectedOption] = useState(null);

  const onChange = (e) => {
    setSelectedOption(e.target.value);
    optionResponse( e.target.value);;
  };
  return (
    <>
      <Radio.Group onChange={onChange} value={selectedOption}>
        <Space direction="vertical">
          {options.map((option, index) => {
            return (
              <Radio key={index}
               value={option.optionsId}>
                {option.title}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </>
  );
});

export {Options};
