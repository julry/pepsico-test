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
import { BentSurface } from '../svg/BentSurface';
import { imageSizeMixin } from '../../utils/styles/mixins';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

const SphereStyled = styled(Sphere)`
    margin-bottom: 20px;
    
    ${imageSizeMixin({height: '60px', width: '127px'})};

    @media screen and (min-width: 640px){
          margin-bottom: 30px;
    }
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
    
    ${imageSizeMixin({height: '32px', width: '120px'})};
`;

const CylinderWrapper = styled(SvgWrapper)`
    bottom: 10.4947vh;
    left: 0;
    
    ${imageSizeMixin({height: '175px', width: '93px'})};
`;

const CylinderStyled = styled(Cylinder)`
    position: absolute;
    right: 0;
    
    ${imageSizeMixin({height: '190px', width: '198px'})};
`;

const BentSurfaceWrapper = styled(SvgWrapper)`
    bottom: 15px;
    right: 0;

    ${imageSizeMixin({height: '157px', width: '91px'})};
`;

const BentSurfaceStyled = styled(BentSurface)`
    top: -75px;
    position: absolute;
    left: 0;
    
    ${imageSizeMixin({height: '325px', width: '350px'})};

    @media screen and (min-width: 640px){
        top: -113px;
    }
    
    @media screen and (max-height: 630px){
          top: -50px;
    }
`;

const DotsCircleStyled = styled(DotsCircle)`
    margin-top: 37px;
    
    ${imageSizeMixin({height: '71px', width: '71px'})};

    @media screen and (min-width: 640px){
        margin-top: 55px;
    }
`;

export const Screen1 = () => {
    const {next} = useProgress();

    const onStart = () => {
        reachMetrikaGoal('start');
        next();
    };

    return (
        <>
            <SphereStyled/>
            <IntroTitle>{'Твой\nкарьерный'}</IntroTitle>
            <ImageWrapper>
                <Image src={breakoutLogo} alt={''}/>
            </ImageWrapper>
            <Button onClick={onStart}>Играть</Button>
            <CylinderWrapper>
                <CylinderStyled/>
            </CylinderWrapper>
            <DotsCircleStyled/>
            <BentSurfaceWrapper>
                <BentSurfaceStyled/>
            </BentSurfaceWrapper>
            <LogoStyled/>
        </>
    );
};