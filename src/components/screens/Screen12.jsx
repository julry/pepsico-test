import React from 'react';
import { QuestionWrapper } from '../common/QuestionWrapper';
import { useProgress } from '../../hooks/useProgress';
import { getQuestionByProject } from '../../utils/getQuestionByProject';

export const Screen12 = () => {
    const {project} = useProgress();
    const question = getQuestionByProject(project);
    return <QuestionWrapper question={question}/>;
};
