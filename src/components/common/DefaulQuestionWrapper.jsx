import React from 'react';
import styled from 'styled-components';
import { WithHeaderWrapper } from './WithHeaderWrapper';
import { RotationInfo } from './RotationInfo';
import { rotations } from '../../rotations.config';
import { TextStyled, Title } from './textStyled';
import { useProgress } from '../../hooks/useProgress';

const Wrapper = styled.div`
    opacity: ${({rotationInfo}) => rotationInfo ? 0.1 : 1};
    padding: 0 30px 0 35px;
`;

const TextWrapper = styled.div`
    margin: 20px 0;
`;
export const DefaultQuestionWrapper = (props) => {
    const {question, isTextShown = true} = props;
    const {progress} = useProgress();
    return (
        <WithHeaderWrapper>
            {question.rotation && <RotationInfo rotation={rotations[question.rotation]}/>}
            <Wrapper rotationInfo={progress.rotationInfo}>
                <TextWrapper>
                    <Title>{question.title}</Title>
                    <br />
                    {isTextShown && <TextStyled>{question.text}</TextStyled>}
                </TextWrapper>

                {props.children}
            </Wrapper>
        </WithHeaderWrapper>
    );
};