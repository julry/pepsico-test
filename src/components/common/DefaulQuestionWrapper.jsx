import React from 'react';
import styled from 'styled-components';
import { WithHeaderWrapper } from './WithHeaderWrapper';
import { RotationInfo } from './RotationInfo';
import { rotations } from '../../rotations.config';
import { TextStyled, Title } from './textStyled';
import { useProgress } from '../../hooks/useProgress';
import { BigSphereTop } from './BigSphereTop';

const Wrapper = styled.div`
    opacity: ${({rotationInfo}) => rotationInfo ? 0.1 : 1};
    padding: 0 15px 0 35px;
`;

const TextWrapper = styled.div`
    margin: 20px 0;
`;
export const DefaultQuestionWrapper = (props) => {
    const {question} = props;
    const {progress} = useProgress();
    return (
        <WithHeaderWrapper>
            {question.rotation && <RotationInfo rotation={rotations[question.rotation]}/>}
            <Wrapper rotationInfo={progress.rotationInfo}>
                <TextWrapper>
                    <Title>{question.title}</Title>
                    <br />
                    <TextStyled>{question.text}</TextStyled>
                </TextWrapper>

                {props.children}
            </Wrapper>
        </WithHeaderWrapper>
    );
};