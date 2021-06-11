import React, { memo , useState} from 'react';
import {Button,Modal} from 'antd';
import Question from './question';
const paper = memo((props) => {
const {questionPaper} = props;

const [endExamConfermation, setEndExamConfermation] = useState(false);
const [paperSolution, setPaperSolution] = useState([]);

const addOrUpdateSolution = ( oldSolution, questionAns ) => {

    const questionIndex = oldSolution.findIndex(x => x.questionId === questionAns.questionId);

    if(questionIndex === -1){
        //add res
        oldSolution.push(questionAns)

    }else{
        // update res
        oldSolution[questionIndex]=questionAns;
    }
   
     return oldSolution;
  };

const questionResponse = questionAns =>{
    let oldSolution = paperSolution;
    let udpatedSolution = addOrUpdateSolution ( oldSolution, questionAns );
     setPaperSolution(udpatedSolution);

    console.log("Updated soltuion =>",udpatedSolution)

}

const endExam = () =>{
    setEndExamConfermation(false);
    console.log("end exam api call" , paperSolution);
   
}
    return (
        <>
           {
               questionPaper.map((paperQuestion, index)=>{
                   return  <Question 
                   questionResponse={questionResponse}
                   id={index}
                   key={index}
                   questionId={paperQuestion.questionId}
                   question={paperQuestion.question}
                   hint={paperQuestion.hint}
                   options={paperQuestion.options}
                   mark={paperQuestion.mark}
                   isNegative={paperQuestion.isNegative}
               />;
               })
           }

           <div>
               <Button type="danger"
               onClick={()=>{
                setEndExamConfermation(true)
               }}
               >Submit Your Exam </Button>

           </div>

           
           <Modal
          title="End YOur Exam"
          visible={endExamConfermation}
          onOk={endExam}
          onCancel={()=>{
            setEndExamConfermation(false)
           }}
          okText="End Exam"
          cancelText="back to exam"
        >
          <h3>You have solved only {paperSolution.length} out of 10 question, Are you sure to End the exam</h3>
        </Modal>
        </>
    );
});

export default paper;