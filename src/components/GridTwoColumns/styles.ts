import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

type BackgroundProps = {
  background?: boolean;
};

export const Container = styled.div<BackgroundProps>`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.font.media.lteMedium} {
      text-align: center;
      grid-template-columns: 1fr;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.font.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  width: 100%;
`;
