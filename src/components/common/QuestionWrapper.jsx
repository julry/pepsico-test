import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../hooks/useProgress';
import { DefaultQuestionWrapper } from './DefaulQuestionWrapper';
import { isTouchDevice } from '../../utils/isTouchDevice';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';
import { questions } from '../../questions.config';
import { TextStyled } from './textStyled';

const AnswerWrapper = styled.div`
    border: 2px solid white;
    padding: 15px;
    position: relative;
    z-index: 20;
    cursor: pointer;
    background: ${({chosen}) => chosen ? 'linear-gradient(225deg, #004C97 0%, #090909 100.05%)' : 'transparent'};
    ${({isTouchDevice}) => isTouchDevice ? `` : `
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

const AnswerText = styled.p`
    font-size: 15px;
    line-height: 18px;
    
    @media screen and (max-height: 630px){
        font-size: 13px;
        line-height: 17px;
    }
`;

const TextStyledDesk = styled(AnswerText)`
    @media screen and (max-width: 599px){
        display: none;
    }
`;

const TextStyledMobile = styled(AnswerText)`
    @media screen and (min-width: 600px){
        display: none;
    }
`;

export const QuestionWrapper = (props) => {
    const {question, answerFunction} = props;
    const {next, updateAnswer, answers} = useProgress();

    const chosenAnswerId = props.chosenAnswerId ?? answers[question.id];

    const onAnswerChoose = (answer) => {
        if (answerFunction) {
            answerFunction(answer);
        } else updateAnswer(question.id, answer.id);

        if (question.rotation) {
            const rotationQuestions = questions.filter(q => q.rotation === question.rotation);
            const questionId = rotationQuestions.indexOf(question) + 1;
            reachMetrikaGoal(question.rotation + '-question' + questionId);
        } else if (question.project) {
            reachMetrikaGoal('project-' + question.project);
        }
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
                    <>
                        <TextStyledMobile>{answer.text}</TextStyledMobile>
                        <TextStyledDesk>{answer.textDesk ? answer.textDesk : answer.text}</TextStyledDesk>
                    </>
                </AnswerWrapper>
            ))}
            {props.children}
        </DefaultQuestionWrapper>
    );
};