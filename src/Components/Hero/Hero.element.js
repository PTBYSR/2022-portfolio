import styled from 'styled-components';
import { helpers } from '../StyleHelpers'



export const Landing = styled.section`
    width: 100%;
    height: 100vh;
    gap: 0rem;
    /* margin-top: 30px; */
    padding-top: ${props => props.theme.main};
`;
export const LandingCardOne = styled.div`
    width: 100%;
`;
export const LandingCardTwo = styled.div`
    width: 100%;
`;
export const LandingCardThree = styled.div`
    ${helpers};
    width: 100%;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
`;
export const NameLabel = styled.div`
`