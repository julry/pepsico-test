import React from 'react';
import styled from 'styled-components';
import { breakoutLogo } from '../../constants/images';
import { Button } from '../common/Button';
import { Logo } from '../svg/Logo';
import { useProgress } from '../../hooks/useProgress';
import { Sphere } from '../svg/Sphere';
import { TextStyled } from '../common/textStyled';
import { Cylinder } from '../svg/Cylinder';
import { DotsCircle } from '../svg/DotsCircle';
import { SvgWrapper } from '../common/SvgWrapper';
import { SphereDent } from '../svg/SphereDent';

const SphereStyled = styled(Sphere)`
    width: 127px;
    height: 60px;
    margin-bottom: 20px;
`;

const IntroTitle = styled(TextStyled)`
  text-align: center;
  letter-spacing: 0.26em;
  text-transform: uppercase;
`;

const ImageWrapper = styled.div`
  width: 245px;
  height: 156px;
  margin: 30px 0 50px;
`;

const Image = styled.img`
  height:100%;
  object-fit: contain;
  width: 100%;
`;

const LogoStyled = styled(Logo)`
    width: 120px;
    height: 32px;
    margin-top: auto;
    margin-bottom: 50px;
`;

const CylinderWrapper = styled(SvgWrapper)`
    bottom: 10.4947vh;
    left: 0;
    height: 175px;
    width:93px;
`;

const SphereDentWrapper = styled(SvgWrapper)`
    bottom: 110px;
    right: 0;
    height: 119px;
    width: 94px;
`;

const SphereDentStyled = styled(SphereDent)`
    height: 100%;
    width: 114px;
    position: absolute;
    left: 0;
`

const CylinderStyled = styled(Cylinder)`
    width: 198px;
    height: 190px;
    position: absolute;
    right: 0;
`;

const DotsCircleStyled = styled(DotsCircle)`
    margin-top: 37px;
    width: 71px;
    height: 71px;
`
export const Screen1 = () => {
    const {next} = useProgress();
    return (
        <>
            <SphereStyled/>
            <IntroTitle>{'Твой\nкарьерный'}</IntroTitle>
            <ImageWrapper>
                <Image src={breakoutLogo} alt={''}/>
            </ImageWrapper>
            <Button onClick={next}>Играть</Button>
            <CylinderWrapper>
                <CylinderStyled />
            </CylinderWrapper>
            <DotsCircleStyled />
            <SphereDentWrapper>
                <SphereDentStyled />
            </SphereDentWrapper>
            <LogoStyled/>
        </>
    );
};