import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../common/QuestionWrapper';
import styled from 'styled-components';
import { SvgWrapper } from '../common/SvgWrapper';
import { imageSizeMixin } from '../../utils/styles/mixins';
import { Cylinder } from '../svg/Cylinder';
import { BentSurface } from '../svg/BentSurface';


const ImagesWrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: flex-end;
    
    @media screen and (max-width: 640px) and (max-height: 570px){
          position: static;
          margin-left: -35px;
          margin-top: auto;
    }
    
    @media screen and (max-width: 330px){
          position: static;
          margin-left: -35px;
          margin-top: auto;
    }
`;

const CylinderWrapper = styled(SvgWrapper)`
    position: relative;
    
    ${imageSizeMixin({height: '41px', width: '125px'})};
`;

const CylinderStyled = styled(Cylinder)`
    position: absolute;
    right: -35px;
    top: 0;
    
    ${imageSizeMixin({height: '260px', width: '272px'})};
    
    @media screen and (min-width: 640px){
      right: calc(-35px * var(--imgSmKoef));
    }
    
    @media screen and (max-height: 630px){
      right: calc(-35px / var(--imgSmKoef));
    }
`;

const BentSurfaceWrapper = styled(SvgWrapper)`
    position: relative;
    ${imageSizeMixin({height: '92px', width: '119px'})};
`;

const BentSurfaceStyled = styled(BentSurface)`
    position: absolute;
    left: 0;
    top: -55px;
    
    ${imageSizeMixin({height: '313px', width: '313px'})};
    
    @media screen and (min-width: 640px){
      top: calc(-55px * var(--imgSmKoef));
    }
    
    @media screen and (max-height: 630px){
      top: calc(-55px / var(--imgSmKoef));
    }
`;

export const Screen11 = () => {
    const question = getQuestionById('6');
    return (
        <QuestionWrapper question={question}>
            <ImagesWrapper>
                <CylinderWrapper>
                    <CylinderStyled />
                </CylinderWrapper>
                <BentSurfaceWrapper>
                    <BentSurfaceStyled />
                </BentSurfaceWrapper>
            </ImagesWrapper>
        </QuestionWrapper>
    )
};
