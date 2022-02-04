import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../common/QuestionWrapper';

export const Screen5 = () => {
    const question = getQuestionById('2');
    return <QuestionWrapper question={question} />
};

