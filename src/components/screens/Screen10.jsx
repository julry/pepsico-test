import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../common/QuestionWrapper';

export const Screen10 = () => {
    const question = getQuestionById('5');
    return <QuestionWrapper question={question} />
};
