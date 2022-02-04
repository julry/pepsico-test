import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../common/QuestionWrapper';

export const Screen14 = () => {
    const question = getQuestionById('11');
    return <QuestionWrapper question={question} />
};
