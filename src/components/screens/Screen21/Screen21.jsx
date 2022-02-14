import React, { useState } from 'react';
import styled from 'styled-components';
import { Board } from './Board';
import { useProgress } from '../../../hooks/useProgress';
import { Button } from '../../common/Button';
import { SvgWrapper } from '../../common/SvgWrapper';
import { imageSizeMixin } from '../../../utils/styles/mixins';
import { BentSurface } from '../../svg/BentSurface';
import { RotatedBentSurface } from '../../svg/RotatedBentSurface';
import { getQuestionById } from '../../../utils/getQuestionById';
import { DefaultQuestionWrapper } from '../../common/DefaulQuestionWrapper';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

const INITIAL_PLACES = [
    {
        id: '1',
        sizeTitle: 'Средняя\nплощадь',
        size: 'middle',
        placeTitle: 'Гипермаркет товаров в отдельно стоящем здании',
        place: 'hypermarket',
        touched: false,
        order: ['place', 'size']
    },
    {
        id: '2',
        sizeTitle: 'Большая\nплощадь',
        size: 'big',
        placeTitle: 'Магазин продуктов в спальном районе',
        place: 'foodStore',
        touched: false,
        order: ['size', 'place']
    },
    {
        id: '3',
        sizeTitle: 'Огромная\nплощадь',
        size: 'huge',
        placeTitle: 'Продуктовый магазин\n в торговом центре',
        place: 'mole',
        touched: false,
        order: ['place', 'size']
    },
    {
        id: '4',
        sizeTitle: 'Малая\nплощадь',
        size: 'small',
        placeTitle: 'Магазин при заправке на М11',
        place: 'fuelStation',
        touched: false,
        order: ['size', 'place']
    },
];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -25px;
    margin-top: -10px;
`;

const ButtonStyled = styled(Button)`
    width: 295px;
    
    @media screen and (max-width: 640px){
        margin-left: 25px;
    }
    @media screen and (max-width: 300px) {
            width: 200px;
    }
`;

const SurfacesWrapper = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100vw;
    margin-right: -15px;
    justify-content: space-between;
    align-items: flex-end;
    
    @media screen and (max-height: 615px) and (max-width: 640px){
          position: static;
    }
    
    @media screen and (max-height: 660px) and (min-width: 640px){
          position: static;
    }
`;

const BentSurfaceLeftWrapper = styled(SvgWrapper)`
    position: relative;
    ${imageSizeMixin({height: '23px', width: '129px'})};
`;

const BentSurfaceRightWrapper = styled(SvgWrapper)`
    position: relative;
    ${imageSizeMixin({height: '50px', width: '50px'})};
`;


const LeftSurface = styled(RotatedBentSurface)`
    position: absolute;
    left: -33px;
    ${imageSizeMixin({height: '260px', width: '260px'})};
    
    @media screen and (min-width: 640px){
        left: calc(-33px * var(--imgSmKoef))
    }
    
    @media screen and (max-height: 630px){
        left: calc(-33px / var(--imgSmKoef))
    }
`;

const RightSurface = styled(BentSurface)`
    position: absolute;
    right: -113px;
    
    ${imageSizeMixin({height: '313px', width: '313px'})};
    
    @media screen and (min-width: 640px){
        right: calc(-113px * var(--imgSmKoef))
    }
    
    @media screen and (max-height: 630px){
        right: calc(-113px / var(--imgSmKoef))
    }
`;


export const Screen21 = () => {
    const {next, updateAnswer} = useProgress();
    const [places, setPlaces] = useState(INITIAL_PLACES);

    const question = getQuestionById('16');

    const onPositionChange = (newPlaces) => {
        setPlaces([...newPlaces]);
    };

    const onPlacesSave = () => {
        const correctPlaces = {
            'hypermarket': 'small',
            'mole': 'big',
            'fuelStation': 'huge',
            'foodStore': 'middle'
        };
        const correctChosen = places
            .filter(place => place.touched && place.size === correctPlaces[place.place])
            .length;

        if (correctChosen === places.length) {
            updateAnswer(question.id, '1');
        } else {
            updateAnswer(question.id, '2');
        }

        reachMetrikaGoal('business-question2');
        next();
    };

    return (
        <DefaultQuestionWrapper question={question} isTextShown={false}>
            <Wrapper>
                <Board places={places} onPositionChange={onPositionChange}/>
                <ButtonStyled onClick={onPlacesSave}>Сохранить</ButtonStyled>
                <SurfacesWrapper>
                    <BentSurfaceLeftWrapper>
                        <LeftSurface/>
                    </BentSurfaceLeftWrapper>
                    <BentSurfaceRightWrapper>
                        <RightSurface/>
                    </BentSurfaceRightWrapper>
                </SurfacesWrapper>
            </Wrapper>
        </DefaultQuestionWrapper>
    );
};