import React from 'react';
import styled from 'styled-components';
import { TextStyled } from './textStyled';
import { useProgress } from '../../hooks/useProgress';
import { CloseIcon } from '../svg/CloseIcon';

const Wrapper = styled.div`
    display: flex;
    position: relative;
    margin: 0 35px;
`;

const Label = styled(TextStyled)`
   text-transform: uppercase;
`;

const InfoSight = styled.div`
  font-size: 16px;
  transform: rotate(-45deg);
  opacity: 0.8;
  width: 16px;
  height: 16px;
  border: 1px solid white;
  margin-top: -10px;
  margin-left: 5px;
  cursor: pointer;
  & p{
    transform: rotate(45deg);
    text-align: center;
    margin-left: -2px;
  }
`;

const Modal = styled.div`
    position: absolute;
    top: 20px;
    background: #000;
    border: 2px solid white;
    padding: 55px 15px 8px;
    z-index: 20;
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
            <InfoSight onClick={onInfoClick}><p>i</p></InfoSight>
            {progress.rotationInfo && <Modal>
                <CloseIconStyled onClick={onInfoClick}/>
                <TextStyled>{rotation.text} </TextStyled>
            </Modal>}
        </Wrapper>
    );
};