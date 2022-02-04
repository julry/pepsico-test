import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../common/QuestionWrapper';

export const Screen11 = () => {
    const question = getQuestionById('6');
    return <QuestionWrapper question={question} />
};
