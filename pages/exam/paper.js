import React, { memo } from "react";
import { OnlineAssessmentLayout } from "../../components/layout/layout";
import Paper from "../../components/exam/paper";
import { getQuestionPaper } from "../../dummy-db";
const paper = memo(() => {
  const examPaper = getQuestionPaper();
  return (
    <>
      <OnlineAssessmentLayout children={
      <Paper
      questionPaper={examPaper} 
      />} />
    </>
  );
});

export default paper;
