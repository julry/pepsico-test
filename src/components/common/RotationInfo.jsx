import React from 'react';
import styled from 'styled-components';
import { TextStyled } from './textStyled';
import { useProgress } from '../../hooks/useProgress';
import { CloseIcon } from '../svg/CloseIcon';
import { InfoIcon } from '../svg/InfoIcon';

const Wrapper = styled.div`
    display: flex;
    position: relative;
    margin-left: 35px;
`;

const Label = styled(TextStyled)`
   text-transform: uppercase;
   width: max-content;
   font-size: 18px;
   
   @media screen and (max-height: 630px){
        font-size: 15px;
   }
`;

const InfoSight = styled(InfoIcon)`
    width: 21px;
    height: 21px;
    margin-top: -10px;
    margin-left: 5px;
    cursor: pointer;
`;

const Modal = styled.div`
    position: absolute;
    top: 20px;
    background: #000;
    border: 2px solid white;
    padding: 55px 15px 15px;
    z-index: 20;
    width: calc(100vw - 70px);
    max-width: 305px;
`;

const CloseIconStyled = styled(CloseIcon)`
    position: absolute;
    top: 14px;
    right: 14px;
    width: 13px;
    height: 13px;
`;

export const RotationInfo = (props) => {
    const {rotation} = props;
    const {progress, updateProgress} = useProgress();

    const onInfoClick = () => {
        updateProgress('rotationInfo', !progress.rotationInfo);
    };

    return (
        <Wrapper>
            <Label>{rotation.name}</Label>
            <InfoSight onClick={onInfoClick}/>
            {progress.rotationInfo && <Modal>
                <CloseIconStyled onClick={onInfoClick}/>
                <TextStyled>{rotation.text} </TextStyled>
            </Modal>}
        </Wrapper>
    );
};