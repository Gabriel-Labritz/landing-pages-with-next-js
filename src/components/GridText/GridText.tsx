import * as Styled from './styles';
import SectionBackground from '../SectionBackground/SectionBackground';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';

export type GridTextElementProps = {
  title: string;
  description: string;
};

export type GridTextProps = {
  title: string;
  description: string;
  grid: GridTextElementProps[];
  background?: boolean;
  sectionId?: string;
  component?: string;
};

function GridText({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridTextProps) {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Text>{description}</Text>
        <Styled.Grid>
          {grid.map((element) => (
            <Styled.GridElement key={element.title}>
              <Heading size="small" colorDark={!background} as="h3">
                {element.title}
              </Heading>
              <Text>{element.description}</Text>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
}

export default GridText;
