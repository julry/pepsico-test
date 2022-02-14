import React from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import MultiBackend, { MouseTransition, TouchTransition } from 'react-dnd-multi-backend';
import { PlaceWrapper } from './PlaceWrapper';

const Wrapper = styled.div`
    width: auto;
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: ${({isEverythingTouched}) => isEverythingTouched ? '178px 143px' : 'repeat(2, 1fr)'};
    
    @media screen and (max-width: 365px) {
        grid-template-columns: ${({isEverythingTouched}) => isEverythingTouched ? '150px 123px' : 'repeat(2, 1fr)'};
    } 
    
    @media screen and (max-width: 300px) {
        grid-template-columns: ${({isEverythingTouched}) => isEverythingTouched ? '130px 100px' : 'repeat(2, 1fr)'};
    }
`;

const HTML5toTouch = {
    backends: [
        {
            id: 'html5',
            backend: HTML5Backend,
            transition: MouseTransition,
        },
        {
            id: 'touch',
            backend: TouchBackend,
            options: {enableMouseEvents: true},
            preview: true,
            transition: TouchTransition,
        },
    ]
};

export const Board = (props) => {
    const {places, onPositionChange} = props;

    function handlePlacesDrop(place, selectedPlace) {
        const dropId = selectedPlace.id[0];
        const dragId = place.id[0];
        const finalOrder = ['place', 'size'];
        let newPlaces = [...places];
        const dropRow = newPlaces.find(place => place.id === dropId);
        const dragRow = newPlaces.find(place => place.id === dragId);

        if (place.type === selectedPlace.type && !dropRow.touched) {
            return;
        }

        const newDropPlace = {
            [place.type + 'Title']: dragRow[place.type + 'Title'],
            [place.type]: dragRow[place.type]
        };
        const newDragPlace = {
            [place.type + 'Title']: dropRow[place.type + 'Title'],
            [place.type]: dropRow[place.type]
        };

        newPlaces[newPlaces.indexOf(dropRow)] = {...dropRow, ...newDropPlace, order: finalOrder, touched: true};
        if (dropId !== dragId) {
            newPlaces[newPlaces.indexOf(dragRow)] = {...dragRow, ...newDragPlace};
        }

        if (newPlaces.filter(place => !place.touched).length === 1) {
            const untouchedLast = newPlaces.filter(place => !place.touched)[0];
            let index;
            if (untouchedLast === dragRow) index = newPlaces.indexOf(dragRow);
            else index = newPlaces.indexOf(untouchedLast);
            newPlaces[index] = {...untouchedLast, touched: true, order: finalOrder};
        }

        onPositionChange(newPlaces);
    }

    const isEverythingTouched = places.filter(place => !place.touched).length < 1;

    return (
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
            <Wrapper isEverythingTouched={isEverythingTouched}>
                {
                    places.map((place, placeNum) =>
                        place.order.map((type, num) => (
                            <PlaceWrapper
                                key={place.id + type}
                                elemNum={placeNum + num}
                                type={type}
                                place={place}
                                onPlaceDrop={handlePlacesDrop}
                            />
                        ))
                    )
                }
            </Wrapper>
        </DndProvider>
    );
};