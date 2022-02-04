import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../common/QuestionWrapper';

export const Screen8 = () => {
    const question = getQuestionById('3');
    return <QuestionWrapper question={question} />
};
