import React from 'react';
import { useProgress } from '../../hooks/useProgress';
import { QuestionWrapper } from '../common/QuestionWrapper';
import { ROTATION_TYPES } from '../../constants/rotationsTypes';
import styled from 'styled-components';
import { SvgWrapper } from '../common/SvgWrapper';
import { BentSurface } from '../svg/BentSurface';
import { Cylinder } from '../svg/Cylinder';

const BentSurfaceWrapper = styled(SvgWrapper)`
    bottom: 0;
    right: 0;
    width: 100px;
    height: 177px;
`;

const BentSurfaceStyled = styled(BentSurface)`
    position: absolute;
    left: 0;
    top: -65px;
    width: 332px;
    height: 330px;
`;

const CylinderWrapper = styled(SvgWrapper)`
    bottom: 0;
    left: 0;
    height: 132px;
    width: 192px;
`;

const CylinderStyled = styled(Cylinder)`
    width: 272px;
    height: 260px;
    position: absolute;
    right: 0;
`;

export const Screen18 = () => {
    const {currentRotation, updateRotations} = useProgress();

    const question = {
        title: currentRotation === ROTATION_TYPES.insights ? 'Ну как, получил собственный инсайт?' : 'Доходы – дело всегда приятное!',
        text: currentRotation === ROTATION_TYPES.insights ? 'Идем дальше!' : 'Двигаемся дальше?',
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
        updateRotations(answer.rotation);
    };
    return (
        <>
            <QuestionWrapper question={question} answerFunction={answerFunction}/>
            <BentSurfaceWrapper>
                <BentSurfaceStyled/>
            </BentSurfaceWrapper>
            <CylinderWrapper>
                <CylinderStyled/>
            </CylinderWrapper>
        </>

    );
};