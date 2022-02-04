import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../common/QuestionWrapper';

export const Screen9 = () => {
    const question = getQuestionById('4');
    return <QuestionWrapper question={question} />
};
