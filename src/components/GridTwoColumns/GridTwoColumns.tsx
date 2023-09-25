import * as Styled from './styles';
import SectionBackground from '../SectionBackground/SectionBackground';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';

export type GridTwoColumnsProps = {
  title: string;
  text: string;
  srcImg: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
};

function GridTwoColumns({
  title,
  text,
  srcImg,
  background = false,
  sectionId = '',
}: GridTwoColumnsProps) {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <Text>{text}</Text>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
}

export default GridTwoColumns;
