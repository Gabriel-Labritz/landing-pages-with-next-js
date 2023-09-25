import * as Styled from './styles';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import GoTop from '../../components/GoTop/GoTop';
import { MenuLinkProps } from '../../components/MenuLink/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink/LogoLink';

export type BaseProps = {
  children: React.ReactNode;
  links: MenuLinkProps[];
  logoData: LogoLinkProps;
  footerHtml: string;
};

function Base({ links = [], logoData, footerHtml, children }: BaseProps) {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer html={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
}

export default Base;
