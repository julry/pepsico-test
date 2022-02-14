import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../hooks/useProgress';
import { Button } from '../common/Button';
import { getCompetences } from '../../utils/getCompetences';
import { PROJECT_NAMES } from '../../constants/projectNames';
import { rotations } from '../../rotations.config';
import { WithHeaderWrapper } from '../common/WithHeaderWrapper';
import { TextStyled, Title } from '../common/textStyled';
import { ROTATION_TYPES } from '../../constants/rotationsTypes';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

const Wrapper = styled.div`
    padding: 0 35px 35px;
`;

const PathWrapper = styled.div`
    margin: 35px 0;
    & + & {
        margin-top: 0;
    }
`;

const RotationWrapper = styled.div`
    width: 100%;
    border: 2px solid white;
    padding: 15px;
    & + & {
      margin-top: 10px;
    }
`;

const Text = styled(TextStyled)`
    margin-bottom: 10px;
`;

const ButtonStyled = styled(Button)`
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    background: linear-gradient(183.44deg, #004C97 2.83%, #090909 97.16%);
    &:hover {
      background: linear-gradient(183.44deg, #090909 2.83%,  #004C97 97.16%);
    }
`;

const CompetenceWrapper = styled(RotationWrapper)`
    position: relative;
`;

const CompetenceResultWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: linear-gradient(90deg, #090909 0%, #004C97 100%);
    width: ${({percentage}) => percentage + '%'}
`;

const CompetenceText = styled(TextStyled)`
    position: relative;
`;

const TextStyledDesk = styled(TextStyled)`
    @media screen and (max-width: 599px){
        display: none;
    }
`;

const TextStyledMobile = styled(TextStyled)`
    @media screen and (min-width: 600px){
        display: none;
    }
`;

export const Screen22 = () => {
    const {answers, project, rotations: passedRotations} = useProgress();
    const [topCompetences, setTopCompetences] = useState([]);

    const onProgrammeClick = () => {
        reachMetrikaGoal('click-breakout-programme');
        window.open('https://pepsicobreakout.ru/landing/?utm_source=partner&utm_medium=cpc&utm_campaign=futuretoday', '_blank');
    };

    const getCompetenceFillPercentage = (points) => {
        const max_points = 8;
        return (points / max_points) * 100;
    };

    useEffect(() => {
        setTopCompetences(getCompetences(answers));
    }, [answers]);

    return (
        <WithHeaderWrapper>
            <Wrapper>
                <Title>Поздравляем!</Title>
                <br/>
                <TextStyled>Ты прошел Твой карьерный BREAKOUT и стал настоящим коммерческим лидером!</TextStyled>
                <PathWrapper>
                    <Text>Твой путь был тяжел: </Text>
                    <RotationWrapper>
                        <TextStyled>{rotations[ROTATION_TYPES.accManagement].name}</TextStyled>
                    </RotationWrapper>
                    <RotationWrapper><TextStyled>Проект: {PROJECT_NAMES[project]}</TextStyled></RotationWrapper>
                    {passedRotations.map(rotation => (
                        <RotationWrapper key={rotation}>
                            <TextStyled>{rotations[rotation].name}</TextStyled>
                        </RotationWrapper>
                    ))}
                </PathWrapper>
                <PathWrapper>
                    <Text>Лучшие компетенции</Text>
                    {topCompetences.map((comp, id) => id < 2 ?
                        (
                            <CompetenceWrapper key={comp.name + comp.points}>
                                <CompetenceResultWrapper percentage={getCompetenceFillPercentage(comp.points)}/>
                                <CompetenceText>{comp.name}</CompetenceText>
                            </CompetenceWrapper>)
                        : null
                    )}
                </PathWrapper>
                <PathWrapper>
                    <>
                        <TextStyledDesk> А чтобы продолжить свой уникальный путь ротаций{'\n'}
                            в ключевых отделах PepsiCo, подавай заявку {'\n'}на PepsiCo BREAKOUT и убедись, что вживую {'\n'}это еще
                           круче и интереснее:) </TextStyledDesk>
                        <TextStyledMobile>
                            А чтобы продолжить свой уникальный путь ротаций
                            {'\n'}в ключевых отделах PepsiCo, подавай заявку на PepsiCo BREAKOUT и убедись, что вживую это еще
                            круче и
                            интереснее:)
                        </TextStyledMobile>
                        </>
                    <TextStyled></TextStyled>
                </PathWrapper>
                <ButtonStyled onClick={onProgrammeClick}>Начать реальный BREAKOUT</ButtonStyled>
            </Wrapper>
        </WithHeaderWrapper>
    );
};