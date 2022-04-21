import styled from 'styled-components';

export const ContactSection = styled.section`
    width: 50%;
    height: 500px;
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
    flex-direction: column;
    height: 100px;
    gap: 0;
`;
export const EmailLink = styled.p`
    position: relative;
    &::before {
        content: url(./linkicon.svg);
        position: absolute;
        width: 10px;
        left: -27px;
    }
`;