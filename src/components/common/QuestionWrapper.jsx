import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../hooks/useProgress';
import { DefaultQuestionWrapper } from './DefaulQuestionWrapper';
import { isTouchDevice } from '../../utils/isTouchDevice';

const AnswerWrapper = styled.div`
    border: 2px solid white;
    font-size: 18px;
    padding: 15px;
    position: relative;
    z-index: 20;
    cursor: pointer;
    background: ${({chosen}) => chosen ? 'linear-gradient(225deg, #004C97 0%, #090909 100.05%)' : 'transparent'};
    ${({isTouchDevice}) =>  isTouchDevice ? `` : `
        &:hover{
          background: linear-gradient(225deg, rgba(0,76,151,0.8) 0%, rgba(9,9,9,0.8) 100.05%);
        }
    `};
    
    & + &{
        margin-top: 13px;
    }
    
    &:last-child {
        margin-bottom: 10px;
    }
`;

export const QuestionWrapper = (props) => {
    const {question, answerFunction} = props;
    const {next, updateAnswer, answers} = useProgress();

    const chosenAnswerId = props.chosenAnswerId ?? answers[question.id];

    const onAnswerChoose = (answer) => {
        if (answerFunction) {
            answerFunction(answer);
        }
        else updateAnswer(question.id, answer.id);
        setTimeout(next, 400);
    };

    return (
        <DefaultQuestionWrapper question={question}>
            {question.answers.map(answer => (
                <AnswerWrapper
                    isTouchDevice={isTouchDevice()}
                    key={answer.id}
                    onClick={() => onAnswerChoose(answer)}
                    chosen={chosenAnswerId === answer.id}
                >
                    {answer.text}
                </AnswerWrapper>
            ))}
        </DefaultQuestionWrapper>
    );
};