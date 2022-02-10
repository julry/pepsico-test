import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';

const Wrapper = styled.div`
    padding-top: 110px;
    width: 100%;
    max-width: 600px;

    @media screen and (min-width: 640px) {
        padding-top: 150px;
    }
`
export const WithHeaderWrapper = (props) => {
    return(
        <Wrapper>
            <Header />
            {props.children}
        </Wrapper>
    )
}