import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 64px;
    max-height: 64px;
    transform: rotate(-45deg);
    overflow: hidden;
    border: 2px solid white;
    cursor: pointer;
    background: ${({active}) => active ? 'linear-gradient(225deg, #004C97 0%, #090909 100.05%)' : 'transparent'};
`;

const Image = styled.img`
    width: 110%;
    height: 110%;
    object-fit: contain;
    margin-left: -10px;
    margin-top: 5px;
    transform: rotate(45deg);
`;

export const MentorCard = (props) => {
    const {mentor, isChosen, ...restProps} = props;
    let active = props.isChosen ?? !!mentor.id;
    return (
        <div {...restProps}>
            <Wrapper active={active}>
                <Image src={mentor.image}/>
            </Wrapper>
        </div>
    );
};