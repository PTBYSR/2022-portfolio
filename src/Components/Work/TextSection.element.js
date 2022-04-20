import styled from 'styled-components';

export const TextSectionWrapper = styled.div`
    width: 100%;
`;
export const Text = styled.div`
    width: 60%;
    height: 50%;
`;
export const Skill = styled.div`
    width: 100%;
    position: relative;
    flex-direction: column;
    align-items: end;
`;
export const SkillLi = styled.li`
    border-bottom: 1px solid var(--clr-light);
    width: 50%;
    &:first-child {
        width: 100%;
    }
`;
export const TextMain = styled.p`
    position: relative;
    top: -7px;
`;