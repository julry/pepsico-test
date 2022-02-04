import React from 'react';
import { getQuestionById } from '../../utils/getQuestionById';
import { TaskQuestionWrapper } from '../common/TaskQuestionWrapper';
import styled from 'styled-components';
import { SvgWrapper } from '../common/SvgWrapper';
import { TaskSurfaceL } from '../svg/TaskSurfaceL';
import { TaskSurfaceR } from '../svg/TaskSurfaceR';

const BentSurfaceLeftWrapper = styled(SvgWrapper)`
    bottom: 0;
    left: 0;
    width: 129px;
    height: 23px;
`;

const BentSurfaceRightWrapper = styled(SvgWrapper)`
    bottom: 0;
    right: 0;
    width: 50px;
    height: 50px;
`;

const LeftSurface = styled(TaskSurfaceL)`
    height: 100%;
    width: 220px;
`;

const RightSurface = styled(TaskSurfaceR)`
    position: absolute;
    right: 0;
    height: 100%;
`;

export const Screen20 = () => {
    const question = getQuestionById('16');
    return (
        <>
            <TaskQuestionWrapper question={question}/>
            <BentSurfaceLeftWrapper>
                <LeftSurface/>
            </BentSurfaceLeftWrapper>
            <BentSurfaceRightWrapper>
                <RightSurface/>
            </BentSurfaceRightWrapper>
        </>
    );
};
