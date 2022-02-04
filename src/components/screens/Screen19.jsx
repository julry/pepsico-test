import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../common/QuestionWrapper';

export const Screen19 = () => {
    const question = getQuestionById('15');
    return <QuestionWrapper question={question} />
};
