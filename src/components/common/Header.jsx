import React, { useState } from 'react';
import styled from 'styled-components';
import { MentorCard } from './MentorCard';
import { useProgress } from '../../hooks/useProgress';
import { getPhraseByScreenId } from '../../utils/getPhraseByScreenId';
import { BigSphereTop } from './BigSphereTop';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  z-index: 100;
`;

const MentorCardStyled = styled(MentorCard)`
  margin-left: auto;
  height: 40px;
  width: 40px;
  min-height: 40px;
  min-width: 40px;
  margin-right: 20px;
  margin-top: 30px;
  z-index: 100;
  
  & img {
    margin-left: -5px;
    margin-top: 3px;
    z-index: 100;
  }
`;

const SphereStyled = styled(BigSphereTop)`
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
`;

const PhraseWrapper = styled.div`
    background: #000;
    display: flex;
    align-items: center;
    position: absolute;
    right: 39px;
    top: 22px;
    height: 56px;
    border: 2px solid white;
    z-index: 40;
    max-width: calc(100% - 50px);
    padding: 0 35px 0 13px;
    min-width: calc(100% - 74px);
    
    & p{
      font-size: 12px;
    }
    
    @media screen and (min-width: 640px){
        max-width: 550px;
        min-width: 550px;
        font-size: 14px;
    }
`;

export const Header = () => {
    const {mentor, currentScreenIndex, currentRotation} = useProgress();
    const [phrase, setPhrase] = useState('');
    const [mentorClickTimes, setMentorClickTimes] = useState(0);
    const onMentorClick = () => {
        if (phrase) {
            setPhrase('');
            return;
        }
        let newPhrase = getPhraseByScreenId(currentScreenIndex, mentorClickTimes, {
            isWoman: mentor.isWoman,
            rotation: currentRotation
        });
        if (newPhrase) {
            setMentorClickTimes(times => ++times);
            setPhrase(newPhrase);
        }
    };
    return (
        <>
            <SphereStyled/>
            <Wrapper>
                {phrase && <PhraseWrapper><p>{phrase}</p></PhraseWrapper>}
                <MentorCardStyled onClick={onMentorClick} mentor={mentor}/>
            </Wrapper>
        </>
    );
};