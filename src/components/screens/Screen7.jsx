import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../hooks/useProgress';
import { QuestionWrapper } from '../common/QuestionWrapper';
import { ROTATION_TYPES } from '../../constants/rotationsTypes';
import { SvgWrapper } from '../common/SvgWrapper';
import { BentSurface } from '../svg/BentSurface';
import { Tor } from '../svg/Tor';
import { imageSizeMixin } from '../../utils/styles/mixins';

const BentSurfaceWrapper = styled(SvgWrapper)`
    bottom: 0;
    left: 0;
    
    ${imageSizeMixin({height: '179px', width: '254px'})};
`;

const BentSurfaceStyled = styled(BentSurface)`
    position: absolute;
    right: 5px;
    
    ${imageSizeMixin({height: '330px', width: '332px'})};
`;

const TorWrapper = styled(SvgWrapper)`
  right: 0;
  bottom: 10.79vh;
  
  ${imageSizeMixin({height: '106px', width: '108px'})};
`;



export const Screen7 = () => {
    const {updateRotations} = useProgress();
    const question = {
        title: 'Что дальше?',
        text: 'С аккаунт-менеджментом и проектом разобрались!',
        answers: [
            {
                id: '1',
                text: 'Хочу развивать бренды!',
                rotation: ROTATION_TYPES.brandMarketing
            },
            {
                id: '2',
                text: 'Интернет-продажи — для меня!',
                rotation: ROTATION_TYPES.electronicCommerce
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
                <BentSurfaceStyled />
            </BentSurfaceWrapper>
            <TorWrapper>
                <Tor />
            </TorWrapper>
        </>
    );
};