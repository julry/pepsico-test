import React, { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';
import { QuestionWrapper } from '../common/QuestionWrapper';
import { ROTATION_TYPES } from '../../constants/rotationsTypes';
import styled from 'styled-components';
import { SvgWrapper } from '../common/SvgWrapper';
import { SphereDent } from '../svg/SphereDent';
import { DotsCircle } from '../svg/DotsCircle';
import { imageSizeMixin } from '../../utils/styles/mixins';

const SphereDentWrapper = styled(SvgWrapper)`
    bottom: 30px;
    left: 10.9333vw;
        
    ${imageSizeMixin({height: '124px', width: '129px'})};
`;

const SphereDentStyled = styled(SphereDent)`
    height: 100%;
    width: 100%;
`;
const DotsCircleWrapper = styled(SvgWrapper)`
    bottom: 0;
    right: 0;
    
    ${imageSizeMixin({height: '91px', width: '93px'})};
`;
const DotsCircleStyled = styled(DotsCircle)`
    position: absolute;
    left: 0;
    
    ${imageSizeMixin({height: '115px', width: '115px'})};
`;

export const Screen13 = () => {
    const [chosenAnswerId, setChosenAnswerId] = useState('');

    const {updateRotations} = useProgress();
    const question = {
        title: 'В какую команду ворвемся теперь?',
        text: 'Проект тем и прекрасен, что задачи приходят нестандартные!',
        answers: [
            {
                id: '1',
                text: 'Вперед к глубинам бизнес-инсайтов!',
                rotation: ROTATION_TYPES.insights
            },
            {
                id: '2',
                text: 'Хочу поработать на стыке финансов и бизнеса',
                rotation: ROTATION_TYPES.revenueManagement
            },
        ]
    };
    const answerFunction = (answer) => {
        setChosenAnswerId(answer.id);
        updateRotations(answer.rotation);
    };
    return (
        <>
            <QuestionWrapper question={question} answerFunction={answerFunction} chosenAnswerId={chosenAnswerId}/>
            <SphereDentWrapper>
                <SphereDentStyled/>
            </SphereDentWrapper>
            <DotsCircleWrapper>
                <DotsCircleStyled />
            </DotsCircleWrapper>
        </>
    );
};