import * as Styled from './styles';
import SectionBackground from '../SectionBackground/SectionBackground';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';

export type GridContentProps = {
  title: string;
  html: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
};

function GridContent({
  title,
  html,
  background = false,
  sectionId = '',
}: GridContentProps) {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <Text>{html}</Text>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
}

export default GridContent;
