import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../common/QuestionWrapper';

export const Screen15 = () => {
    const question = getQuestionById('12');
    return <QuestionWrapper question={question} />
};
