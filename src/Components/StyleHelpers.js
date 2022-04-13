import { css } from 'styled-components';

export const helpers = css`
    ${({ bgwhite }) => bgwhite ? `background-color: ${bgwhite};` : 'green'}
`