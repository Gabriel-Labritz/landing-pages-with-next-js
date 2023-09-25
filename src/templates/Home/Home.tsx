import Head from 'next/head';

import Base from '../Base/Base';
import GridText, { GridTextProps } from '../../components/GridText/GridText';
import GridTwoColumns, {
  GridTwoColumnsProps,
} from '../../components/GridTwoColumns/GridTwoColumns';
import GridContent, {
  GridContentProps,
} from '../../components/GridContent/GridContent';
import { theme } from '../../styles/theme';
import { LogoLinkProps } from '../../components/LogoLink/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink/MenuLink';
import GridImage, {
  GridImageProps,
} from '../../components/GridImage/GridImage';

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};

export type SectionProps =
  | GridImageProps
  | GridTextProps
  | GridTwoColumnsProps
  | GridContentProps;

export type HomeProps = {
  data: PageData[];
};

function Home({ data }: HomeProps) {
  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <>
      <div>
        <Base
          links={links}
          logoData={{ text, link, srcImg }}
          footerHtml={footerHtml}
        >
          <Head>
            <title>{title}</title>
            <meta name="theme-color" content={theme.colors.primaryColor} />
            <meta
              name="description"
              content="As landing pages mais legais da internet."
            />
          </Head>
          <>
            {sections.map((section, index) => {
              const { component } = section;
              const key = `${slug}-${index}`;

              if (component === 'section.section-two-columns') {
                return (
                  <GridTwoColumns
                    key={key}
                    {...(section as GridTwoColumnsProps)}
                  />
                );
              }

              if (component === 'section.section-content') {
                return (
                  <GridContent key={key} {...(section as GridContentProps)} />
                );
              }

              if (component === 'section.section-grid-text') {
                return <GridText key={key} {...(section as GridTextProps)} />;
              }

              if (component === 'section.section-grid-image') {
                return <GridImage key={key} {...(section as GridImageProps)} />;
              }
            })}
          </>
        </Base>
      </div>
    </>
  );
}

export default Home;
