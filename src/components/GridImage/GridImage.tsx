import * as Styled from './styles';
import SectionBackground from '../SectionBackground/SectionBackground';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';

export type GridImageElementProps = {
  altText: string;
  srcImg: string;
};

export type GridImageProps = {
  title: string;
  description: string;
  grid: GridImageElementProps[];
  background?: boolean;
  sectionId?: string;
  component?: string;
};

function GridImage({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridImageProps) {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Text>{description}</Text>
        <Styled.Grid>
          {grid.map((element) => (
            <Styled.GridElement key={element.altText}>
              <Styled.Image src={element.srcImg} alt={element.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
}

export default GridImage;
