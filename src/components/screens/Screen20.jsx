import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { TaskQuestionWrapper } from '../common/TaskQuestionWrapper';
import styled from 'styled-components';
import { SvgWrapper } from '../common/SvgWrapper';
import { SphereDent } from '../svg/SphereDent';
import { BentSurface } from '../svg/BentSurface';
import { imageSizeMixin } from '../../utils/styles/mixins';

const SphereDentWrapper = styled(SvgWrapper)`
    left: 21px;
    bottom: 12px;
    
    ${imageSizeMixin({height: '120px', width: '115px'})};
`;

const SphereDentStyled = styled(SphereDent)`
    width: 100%;
    height: 100%;
`;

const SurfaceBentWrapper = styled(SvgWrapper)`
    right: 0;
    bottom: 0;

    ${imageSizeMixin({height: '143px', width: '200px'})};
`;

const SurfaceBentStyled = styled(BentSurface)`
    ${imageSizeMixin({height: '350px', width: '350px'})};
`;

export const Screen20 = () => {
    const question = getQuestionById('16');
    return (
        <>
            <TaskQuestionWrapper question={question}/>
            <SphereDentWrapper>
                <SphereDentStyled />
            </SphereDentWrapper>
            <SurfaceBentWrapper>
                <SurfaceBentStyled/>
            </SurfaceBentWrapper>
        </>
    );
};
