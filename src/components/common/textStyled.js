import styled from 'styled-components';

export const TextStyled = styled.p`
    font-size: 16px;
    line-height: 19px;
    
    @media screen and (max-height: 630px){
        font-size: 14px;
        line-height: 17px;
    }
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 900;
    line-height: 29px;

     @media screen and (min-width: 640px){
        font-size: 26px;
        line-height: 31px;
     }
`;