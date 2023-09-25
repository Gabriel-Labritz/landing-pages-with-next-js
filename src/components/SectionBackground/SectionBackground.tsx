import * as Styled from './styles';
import SectionContainer from '../SectionContainer/SectionContainer';

const random = () =>
  `id-${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, '-');

export type SectionBackgroundProps = {
  children: React.ReactNode;
  background?: boolean;
  sectionId?: string;
};

function SectionBackground({
  children,
  sectionId = '',
  background = false,
}: SectionBackgroundProps) {
  const id = sectionId ? sectionId : random();

  return (
    <Styled.Container background={background} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
}

export default SectionBackground;
