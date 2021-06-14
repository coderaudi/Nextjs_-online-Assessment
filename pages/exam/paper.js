import React, { memo } from "react";
import { OnlineAssessmentLayout } from "../../components/layout/layout";
import Paper from "../../components/exam/paper";
import { BaseURL } from "../../costant/AppConfig";
const paper = memo((props) => {
  const { questionPaper } = props;
  if(!questionPaper){
    return <h1>Loading your Exam!</h1>
  }
  return (
    <>
      <OnlineAssessmentLayout
        children={<Paper questionPaper={questionPaper} />}
      />
    </>
  );
});

export async function getServerSideProps(context) {
  // const { params, req, res } = context;

  const res = await fetch(`${BaseURL}/questionpaper`);
  const data = await res.json();

  return {
    props: {
      questionPaper: data,
    },
  };
}

export default paper;
