import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../common/QuestionWrapper';

export const Screen4 = () => {
    const question = getQuestionById('1');
    return <QuestionWrapper question={question} />
};

