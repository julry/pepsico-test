import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../hooks/useProgress';
import { DefaultQuestionWrapper } from './DefaulQuestionWrapper';

const AnswerWrapper = styled.div`
    border: 2px solid white;
    font-size: 18px;
    padding: 15px 10px 15px 15px;
    cursor: pointer;
    background: ${({chosen}) => chosen ? 'linear-gradient(225deg, #004C97 0%, #090909 100.05%)' : 'transparent'};
    &:hover{
      background: linear-gradient(225deg, rgba(0,76,151,0.8) 0%, rgba(9,9,9,0.8) 100.05%);
    }
    & + &{
        margin-top: 13px;
    }
`;

export const QuestionWrapper = (props) => {
    const {question, answerFunction} = props;
    const {next, updateAnswer, answers} = useProgress();

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
                    key={answer.id}
                    onClick={() => onAnswerChoose(answer)}
                    chosen={answers[question.id] === answer.id}
                >
                    {answer.text}
                </AnswerWrapper>
            ))}
        </DefaultQuestionWrapper>
    );
};