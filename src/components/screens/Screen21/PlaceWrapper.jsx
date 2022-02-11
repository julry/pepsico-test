import React from 'react';
import styled from 'styled-components';
import { useDrag, useDrop } from 'react-dnd';
import { usePreview } from 'react-dnd-multi-backend'

const WrapperDrop = styled.div`
    margin-bottom:  ${({touched}) => touched ? '12px' : '19px'};
    &:nth-child(even){
      margin-left: ${({isPlaceName, touched}) => isPlaceName || touched ? '0' : 'auto'};
      margin-top: ${({elemNum, touched}) => touched ? 0 : -(15 - +elemNum * 3) + 'px'};
    }
    
    -webkit-touch-callout: none;
`

const Wrapper  = styled.div`
    -webkit-touch-callout: none;
    background: ${({isPlaceName}) => isPlaceName ? 'linear-gradient(90deg, #004C97 0%, #052A4F 100%)' : 'linear-gradient(270deg, #090909 0%, #052A4F 100%)'};
    border: 2px solid #FFFFFF;
    width: ${({isPlaceName}) => isPlaceName ? '178px' : '143px'};
    height: 64px;
    padding: 8px 3px;
    font-size: 16px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    opacity: ${({isPreview}) => isPreview ? 0.5 : 1};
    
    @media screen and (max-width: 365px) {
        width: ${({isPlaceName}) => isPlaceName ? '150px' : '123px'};
        & p {
            font-size: 14px;
        }
    }
    
    @media screen and (max-width: 300px) {
        width: ${({isPlaceName}) => isPlaceName ? '130px' : '100px'};
        & p {
            font-size: 14px;
        }
    }
`;

const PlacePreview = (props) => {
    const { place, type, isPlaceName } = props;
    const { display, style } = usePreview();
    const text = place[type+'Title'];

    if (!display) {
        return null;
    }

    return (
        <Wrapper style={style} isPlaceName={isPlaceName} isPreview={true}>
            <p>{text}</p>
        </Wrapper>
    )
};

export const PlaceWrapper = (props) => {
    const { place, type, onPlaceDrop, elemNum, onPlaceStartDrag } = props;
    const { touched } = place;
    const isPlaceName = type === 'place';
    const id = place.id + type;

    const [, drop] = useDrop(() => ({
        accept: 'PLACE',
        collect: monitor => ({
            hovered: monitor.canDrop() && monitor.isOver(),
        }),
        drop: (item) => {
            onPlaceDrop?.(item, {id, type});
        },
        canDrop: () => true,
    }), [place, onPlaceDrop]);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'PLACE',
        item: () => {
            onPlaceStartDrag?.(place);
            return { id, type };
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, type, onPlaceStartDrag, place]);

    if (isDragging) {
        return (
            <WrapperDrop>
                <PlacePreview place={place} type={type} isPlaceName={isPlaceName}/>
            </WrapperDrop>
        )
    }

    return (
        <WrapperDrop ref={drop} id={id} elemNum={elemNum} touched={touched}>
            <Wrapper isPlaceName={isPlaceName} ref={drag} id={id} type={type}>
                <p>{place[type+'Title']}</p>
            </Wrapper>
        </WrapperDrop>
    );
};