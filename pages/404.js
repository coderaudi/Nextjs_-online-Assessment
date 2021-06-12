import React, { memo } from "react";
import { Result, Button } from "antd";

const notFoundPage = memo(() => {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button 
            href={"/"}
             type="primary">Back Home</Button>}
      />
    </div>
  );
});

export default notFoundPage;
