import styled from  'styled-components';

export const AboutSection = styled.section`
    width: 100%;
    height: 600px;
    margin-top: ${(props) => props.theme.mt};
    padding-top: ${(props) => props.theme.main};
    justify-content: space-between;
    border-top: 2px solid var(--clr-light);
    position: relative;
`;
export const AboutHeading = styled.div`
    justify-content: start;
    height: 100px;
`;
export const ImageSection = styled.div`
    width: 500px;
    margin-top: 200px
`;
export const Image = styled.div`
    width: 100%;
    height: 300px;
`;
export const TextSection = styled.div`
    width: 100%;
    padding-left: 60px;
    position: relative;
`;
export const AboutMain = styled.div`
    width: 50%;
    position: absolute;
    top: 194px;
`;
export const AboutSecondary = styled.div`
    position: absolute;
    bottom: -6px;
    left: 400px;
    width: 30%;
`;