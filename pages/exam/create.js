import React, { memo } from 'react';
import {OnlineAssessmentLayout} from '../../components/layout/layout';

import {ExamForm} from '../../components/exam/form';
const create = memo(() => {


  
    return (
        <>
            <OnlineAssessmentLayout 
             children={ <ExamForm />}
            />
            
        </>
    );
});

export default create;