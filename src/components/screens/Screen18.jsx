import React, { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';
import { QuestionWrapper } from '../common/QuestionWrapper';
import { ROTATION_TYPES } from '../../constants/rotationsTypes';
import styled from 'styled-components';
import { SvgWrapper } from '../common/SvgWrapper';
import { BentSurface } from '../svg/BentSurface';
import { Cylinder } from '../svg/Cylinder';
import { imageSizeMixin } from '../../utils/styles/mixins';

const BentSurfaceWrapper = styled(SvgWrapper)`
    bottom: 0;
    right: 0;
    
    ${imageSizeMixin({height: '177px', width: '100px'})};
`;

const BentSurfaceStyled = styled(BentSurface)`
    position: absolute;
    left: 0;
    top: -65px;
    
    ${imageSizeMixin({height: '332px', width: '330px'})};
    
    @media screen and (min-width: 640px){
      top: calc(-65px * var(--imgSmKoef));
    }
    
    @media screen and (max-height: 630px){
       top: calc(-65px / var(--imgSmKoef));
    }
`;

const CylinderWrapper = styled(SvgWrapper)`
    bottom: 0;
    left: 0;
    
    ${imageSizeMixin({height: '132px', width: '192px'})};
`;

const CylinderStyled = styled(Cylinder)`
    position: absolute;
    right: 0;
    
    ${imageSizeMixin({height: '260px', width: '272px'})};
`;

export const Screen18 = () => {
    const [chosenAnswerId, setChosenAnswerId] = useState('');

    const { rotations, updateRotations} = useProgress();

    const isInsights = rotations[1] === ROTATION_TYPES.insights;

    const question = {
        title: isInsights ? 'Ну как, получил собственный инсайт?' : 'Доходы – дело всегда приятное!',
        text: isInsights ? 'Идем дальше!' : 'Двигаемся дальше?',
        answers: [
            {
                id: '1',
                text: 'Хочу управлять стратегией развития продуктовой категории ',
                rotation: ROTATION_TYPES.category
            },
            {
                id: '2',
                text: 'Буду повышать эффективность модели продаж',
                rotation: ROTATION_TYPES.businessDevelopment
            },
        ]
    };
    const answerFunction = (answer) => {
        setChosenAnswerId(answer.id);
        setTimeout(() => updateRotations(answer.rotation), 210);
    };
    return (
        <>
            <QuestionWrapper question={question} answerFunction={answerFunction} chosenAnswerId={chosenAnswerId}/>
            <BentSurfaceWrapper>
                <BentSurfaceStyled/>
            </BentSurfaceWrapper>
            <CylinderWrapper>
                <CylinderStyled/>
            </CylinderWrapper>
        </>

    );
};