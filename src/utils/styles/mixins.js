import { css } from 'styled-components';

export const imageSizeMixin = ({ height, width }) => css`
      height: ${height};
      width: ${width};
      
      @media screen and (min-width: 640px){
          height: calc(${height} * var(--imgSmKoef));
          width: calc(${width} * var(--imgSmKoef));
      }
      
      @media screen and (max-height: 630px){
          height: calc(${height} / var(--imgSmKoef));
          width: calc(${width} / var(--imgSmKoef));
      }
`;
