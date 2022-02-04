import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../common/QuestionWrapper';

export const Screen16 = () => {
    const question = getQuestionById('13');
    return <QuestionWrapper question={question} />
};
