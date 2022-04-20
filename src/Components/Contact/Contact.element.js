import styled from 'styled-components';

export const ContactSection = styled.section`
    width: 50%;
    height: 500px;
    border: solid 1px red;
    flex-direction: column;
`;
export const SayHi = styled.div`
    line-height: 80px;
    justify-content: end;
    align-items: end;
    width: 100%;
    /* border-bottom: 2px solid var(--clr-light); */
    height: 250px;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        width: 600px;
        right: -100px;
        height: 2px;
        background-color: var(--clr-light);
    }
`;
export const Email = styled.div`
    justify-content: flex-start;
    align-items: flex-end;
    height: 250px;
    flex-direction: column;
`;
export const EmailWrapper = styled.div`
    position: relative;
`;