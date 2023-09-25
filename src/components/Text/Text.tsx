import * as Styled from './styles';

export type TextProps = {
  children: React.ReactNode;
};

function Text({ children }: TextProps) {
  return <Styled.Text dangerouslySetInnerHTML={{ __html: children }} />;
}

export default Text;
