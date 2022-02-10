import styled from 'styled-components';
import { Sphere } from '../svg/Sphere';

export const BigSphereTop = styled(Sphere)`
    width: 200px;
    height: 80px;
    margin-bottom: 5.997vh;
    
    @media screen and (min-width: 640px){
          height: 120px;
          width: 301px;
    }
`;