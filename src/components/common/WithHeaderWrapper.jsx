import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';

const Wrapper = styled.div`
    padding-top: 110px;
`
export const WithHeaderWrapper = (props) => {
    return(
        <Wrapper>
            <Header />
            {props.children}
        </Wrapper>
    )
}