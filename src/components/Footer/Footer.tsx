import * as Styled from './styles';
import Text from '../Text/Text';
import SectionContainer from '../SectionContainer/SectionContainer';

export type FooterProps = {
  html: string;
};

function Footer({ html }: FooterProps) {
  return (
    <Styled.Container>
      <SectionContainer>
        <Text>{html}</Text>
      </SectionContainer>
    </Styled.Container>
  );
}

export default Footer;
