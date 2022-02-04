import React from 'react';
import { useProgress } from '../../hooks/useProgress';
import { Button } from '../common/Button';
import { RotationInfo } from '../common/RotationInfo';
import { rotations } from '../../rotations.config';

export const Screen21 = () => {
    const {currentRotation, next} = useProgress();
    return (
        <div>
            <RotationInfo rotation={rotations[currentRotation]} />
            тут будет игра
            <Button onClick={next}>Сохранить</Button>
        </div>
    );
};