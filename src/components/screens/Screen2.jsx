import React, { useState } from 'react';
import styled from 'styled-components';
import { mentors } from '../../mentors.config';
import { MentorCard } from '../common/MentorCard';
import { Button } from '../common/Button';
import { useProgress } from '../../hooks/useProgress';
import { TextStyled, Title } from '../common/textStyled';
import { SvgWrapper } from '../common/SvgWrapper';
import { BentSurface } from '../svg/BentSurface';
import { DotsCircle } from '../svg/DotsCircle';
import { BigSphereTop } from '../common/BigSphereTop';
import { imageSizeMixin } from '../../utils/styles/mixins';

const Wrapper = styled.div`
    padding: 0 15px;
`;

const PositionText = styled(TextStyled)`
    font-size: 16px;
    opacity: 0.7;
`;

const TextWrapper = styled.div`
    max-width: 350px;
    padding: 0 15px 0 25px;
    @media screen and (max-width: 300px){
        padding: 0 10px;
    }
`;

const BentSurfaceWrapper = styled(SvgWrapper)`
    bottom: 0;
    left: 0;
    
    ${imageSizeMixin({height: '81px', width: '87px'})};
`;

const BentSurfaceStyled = styled(BentSurface)`
    position: absolute;
    right: -55px;
    
    ${imageSizeMixin({height: '230px', width: '232px'})};

    @media screen and (min-width: 640px){
          right: calc(-55px * var(--imgSmKoef));
    }
    
     @media screen and (max-height: 630px){
          right: calc(-55px / var(--imgSmKoef));
     }
`;

const DotCircleWrapper = styled(SvgWrapper)`
    bottom: 0;
    right: 0;
    
    ${imageSizeMixin({height: '92px', width: '82px'})};
`;
const DotsCircleStyled = styled(DotsCircle)`
    position: absolute;
    left: 0;
     
    ${imageSizeMixin({height: '159px', width: '161px'})};
`;

const MentorsContainer = styled.div`
    padding-left: 15px;
    padding-top: 50px;
    margin: 0 15px 0 25px;
    
    @media screen and (max-height: 630px){
        padding-top: 40px;
    }
    @media screen and (max-width: 300px){
        padding-left: 10px;
        padding-top: 30px;
        margin: 0 10px;
    }
`;

const MentorRow1 = styled.div`
    display: flex;
`;
const MentorRow2 = styled(MentorRow1)`
    margin-top: -13px;
    margin-left: 52px;
    @media screen and (max-width: 330px) {
        margin-top: -9px;
        margin-left: 46px;
    }
`;
const MentorInfoWrapper = styled.div`
    border: 2px solid white;
    width: calc(100vw - 30px);
    max-width: 360px;
    padding: 24px;
    margin-bottom: 13px;
    min-height: 255px;
    margin-top: -20px;
    
    @media screen and (min-width: 640px) {
        min-height: 270px;
    }
    @media screen and (max-width: 300px){
        padding: 12px;
        
        & ${TextStyled} {
          font-size: 15px;
        }
    }
`;

const MentorCardStyled = styled(MentorCard)`
    margin-right: 40px;
    min-width: 64px;
    min-height: 64px;
    
    &:last-child{
        margin: 0;
    }
    
    @media screen and (max-width: 330px) {
        max-width: 50px;
        max-height: 50px;
        min-width: 50px;
        min-height: 50px;
    }
`;
const ButtonStyled = styled(Button)`
    padding: 15px 24px;
`;

export const Screen2 = () => {
    const {next, updateProgress} = useProgress();

    const [chosenMentor, setChosenMentor] = useState({});

    const onMentorChoose = () => {
        updateProgress('mentor', {...chosenMentor});
        next();
    };

    return (
        <>
            <BigSphereTop/>
            <Wrapper>
                {
                    chosenMentor.id ? (
                        <>
                            <MentorInfoWrapper>
                                <Title>{chosenMentor.name}</Title>
                                <PositionText>{chosenMentor.position}</PositionText>
                                <br/>
                                <TextStyled>{chosenMentor.text}</TextStyled>
                            </MentorInfoWrapper>
                            <ButtonStyled onClick={onMentorChoose}>Выбрать</ButtonStyled>
                        </>
                    ) : (
                        <TextWrapper>
                            <Title>Привет!</Title>
                            <br/>
                            <TextStyled>
                                Ты в начале своего пути к карьере мечты в PepsiCo! Сейчас тебе нужно выбрать своего ментора :) Этот человек станет твоим наставником и будет помогать
                                {'\n'}с выбором ротаций и прокачкой лидерских навыков
                                {'\n'}на протяжении всей программы.
                            </TextStyled>
                        </TextWrapper>
                    )
                }
                <BentSurfaceWrapper>
                    <BentSurfaceStyled/>
                </BentSurfaceWrapper>
                <DotCircleWrapper>
                    <DotsCircleStyled/>
                </DotCircleWrapper>
                <MentorsContainer>
                    <MentorRow1>
                        {mentors.map((mentor, id) => id < 3 ? (
                            <MentorCardStyled
                                key={mentor.name}
                                mentor={mentor}
                                isChosen={chosenMentor.id === mentor.id}
                                onClick={()=>setChosenMentor({...mentor})}
                            />
                        ) : null)}
                    </MentorRow1>
                    <MentorRow2>
                        {mentors.map((mentor, id) => id > 2 ? (
                            <MentorCardStyled
                                key={mentor.name}
                                mentor={mentor}
                                isChosen={chosenMentor.id === mentor.id}
                                onClick={()=>setChosenMentor({...mentor})}
                            />
                        ) : null)}
                    </MentorRow2>
                </MentorsContainer>
            </Wrapper>
        </>
    );
};