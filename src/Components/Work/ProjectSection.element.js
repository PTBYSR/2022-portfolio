import styled from 'styled-components';

export const ProjectSectionWrapper = styled.div`
    height: 500px;
    flex-direction: row;
    padding-top: ${(props) => props.theme.main};
`;

export const ImageWrapper = styled.div`
    width: 40%;
    height: 60%;
    position: relative;
    border: 1px solid var(--clr-light);
    &:after {
        content: "it took 5 weeks to complete this project";
        white-space: pre-wrap;
        position: absolute;

        bottom: -30px;
        color: var(--clr-light);
        font-size: var(--fs-secondary);
    }
`;

export const TextWrapper = styled.div`
    border: 1px solid var(--clr-light);
    width: 100%;
`;
export const ProjectDescription = styled.div`

`;
