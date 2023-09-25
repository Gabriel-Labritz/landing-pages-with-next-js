import * as Styled from './styles';
import MenuLink, { MenuLinkProps } from '../MenuLink/MenuLink';

export type NavLinksProps = {
  links?: MenuLinkProps[];
};

function NavLinks({ links = [] }: NavLinksProps) {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} link={link.link}>
          {link.children}
        </MenuLink>
      ))}
    </Styled.Container>
  );
}

export default NavLinks;
