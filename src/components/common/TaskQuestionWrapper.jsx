import React from 'react';
import { useProgress } from '../../hooks/useProgress';
import { DefaultQuestionWrapper } from './DefaulQuestionWrapper';
import { Button } from './Button';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

export const TaskQuestionWrapper = (props) => {
    const {question} = props;
    const {next} = useProgress();

    const onTaskBeginClick = () => {
        reachMetrikaGoal('business-question1');
        next();
    };

    return (
        <DefaultQuestionWrapper question={question}>
            <Button onClick={onTaskBeginClick}>Сопоставить</Button>
        </DefaultQuestionWrapper>
    );
};