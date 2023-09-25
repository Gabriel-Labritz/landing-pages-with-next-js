import styled, { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';

type BackgroundProps = {
  background?: boolean;
};

const containerBackgroundActivate = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div<BackgroundProps>`
  ${({ theme, background }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
