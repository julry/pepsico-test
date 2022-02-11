import styled from 'styled-components';

export const TextStyled = styled.p`
    font-size: 18px;
    
    @media screen and (max-height: 630px){
        font-size: 16px;
    }
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 900;
    
     @media screen and (min-width: 640px){
        font-size: 26px;
     }
`;