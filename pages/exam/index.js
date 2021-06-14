import React, { memo, useRef } from "react";
import { OnlineAssessmentLayout } from "../../components/layout/layout";

// import {ExamForm} from '../../components/exam/form';
const create = memo(() => {
  const mobileInputRef = useRef();
  const emailInputRef = useRef();

  const onExamFormSubmit = (event) => {
    event.preventDefault(); // to stop default submit

    const email = emailInputRef.current.value;
    const mobile = mobileInputRef.current.value;

    const objectWithData = {
      email,
      mobile,
    };

    fetch("/api/exam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectWithData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("you data added from frontend =>>>", data);
      });
  };

  const ExamFrom = () => {
    return (
      <div>
        <form onSubmit={onExamFormSubmit}>
          <input type="email" id="email" ref={emailInputRef} />
          <input type="text" id="mobile" ref={mobileInputRef} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

  return (
    <>
      <OnlineAssessmentLayout children={<ExamFrom />} />
    </>
  );
});

export default create;
