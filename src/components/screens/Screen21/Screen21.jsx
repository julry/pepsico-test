import React, { useState } from 'react';
import { Board } from './Board';
import { useProgress } from '../../../hooks/useProgress';
import { RotationInfo } from '../../common/RotationInfo';
import { rotations } from '../../../rotations.config';
import { Button } from '../../common/Button';
import { ROTATION_TYPES } from '../../../constants/rotationsTypes';

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

export const Screen21 = () => {
    const {currentRotation, next} = useProgress();
    const [places, setPlaces] = useState(INITIAL_PLACES);

    const onPositionChange = (newPlaces) => {
        setPlaces([...newPlaces])
    }
    return (
        <div>
            <RotationInfo rotation={rotations[ROTATION_TYPES.businessDevelopment]} />
            <Board places={places} onPositionChange={onPositionChange}/>
            <Button onClick={next}>Сохранить</Button>
        </div>
    );
};