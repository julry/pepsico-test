import styled from 'styled-components';

export const TextStyled = styled.p`
    font-size: 18px;
    line-height: 20px;
    
    @media screen and (max-height: 630px){
        font-size: 16px;
        line-height: 18px;
    }
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 900;
    line-height: 27px;

     @media screen and (min-width: 640px){
        font-size: 26px;
        line-height: 29px;
     }
`;