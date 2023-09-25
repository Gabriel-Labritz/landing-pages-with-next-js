import * as Styled from './styles';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

function MenuLink({ children, link, newTab = false }: MenuLinkProps) {
  const target = newTab ? '_blank' : '_self';

  return (
    <div style={{ display: 'flex' }}>
      <Styled.Container href={link} target={target}>
        {children}
      </Styled.Container>
    </div>
  );
}

export default MenuLink;
