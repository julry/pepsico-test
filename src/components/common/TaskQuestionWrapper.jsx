import React from 'react';
import { useProgress } from '../../hooks/useProgress';
import { DefaultQuestionWrapper } from './DefaulQuestionWrapper';
import { Button } from './Button';

export const TaskQuestionWrapper = (props) => {
    const {question} = props;
    const {next} = useProgress();

    return (
        <DefaultQuestionWrapper question={question}>
            <Button onClick={next}>Сопоставить</Button>
        </DefaultQuestionWrapper>
    );
};