import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../common/QuestionWrapper';

export const Screen17 = () => {
    const question = getQuestionById('14');
    return <QuestionWrapper question={question} />
};
