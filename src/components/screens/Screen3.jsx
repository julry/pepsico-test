import React from 'react';
import styled from 'styled-components';
import { Button } from '../common/Button';
import { useProgress } from '../../hooks/useProgress';
import { BigSphereTop } from '../common/BigSphereTop';
import { TextStyled, Title } from '../common/textStyled';
import { Cylinder } from '../svg/Cylinder';
import { SvgWrapper } from '../common/SvgWrapper';
import { BentSurface } from '../svg/BentSurface';

const Wrapper = styled.div`
    padding: 0 40px;
`;

const TextWrapper = styled.div`
    max-width: 280px;
    margin-bottom: 40px;
`;

const ButtonStyled = styled(Button)`
    width: 100%;
    padding-right: 0;
    padding-left: 0;
`;

const CylinderWrapper = styled(SvgWrapper)`
    bottom: 0;
    left: 0;
    height: 128px;
    width: 244px;
`;

const CylinderStyled = styled(Cylinder)`
    width: 272px;
    height: 260px;
    position: absolute;
    right: 0;
`;

const BentSurfaceWrapper = styled(SvgWrapper)`
    bottom: 0;
    right: 0;
    width: 68px;
    height: 137px;
`;

const BentSurfaceStyled = styled(BentSurface)`
    position: absolute;
    left: 0;
    width: 232px;
    height: 230px;
`;

export const Screen3 = () => {
    const { next } = useProgress();

    const onStart = () => {
        next()
    };

    return (
        <>
            <BigSphereTop />
            <Wrapper>
                <TextWrapper>
                    <Title>Поехали!</Title>
                    <br/>
                    <TextStyled>Ты начинаешь свой BREAKOUT в отделе аккаунт-менеджмента. Сегодня ты пройдешь несколько ротаций по каждому отделу PepsiCo, где сможешь проявить себя настоящим специалистом с серьезными задачами —  это будет уникальный путь, который ты построишь сам. </TextStyled>
                </TextWrapper>
                <ButtonStyled onClick={onStart}>Начать путь к успеху</ButtonStyled>
            </Wrapper>
            <CylinderWrapper>
                <CylinderStyled />
            </CylinderWrapper>
            <BentSurfaceWrapper>
                <BentSurfaceStyled/>
            </BentSurfaceWrapper>
        </>
    )
}