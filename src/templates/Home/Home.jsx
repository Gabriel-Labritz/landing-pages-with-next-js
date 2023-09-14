import PropTypes from 'prop-types';
import { mapData } from '../../api/map-data';
import Head from 'next/head';

import Base from '../Base/Base';
import PageNotFound from '../PageNotFound/PageNotFound';
import Loading from '../Loading/Loading';
import GridText from '../../components/GridText/GridText';
import GridTwoColumns from '../../components/GridTwoColumns/GridTwoColumns';
import GridContent from '../../components/GridContent/GridContent';

function Home({ data }) {
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
          </Head>
          <>
            {sections.map((section, index) => {
              const { component } = section;
              const key = `${slug}-${index}`;

              if (component === 'section.section-two-columns') {
                return <GridTwoColumns key={key} {...section} />;
              }

              if (component === 'section.section-content') {
                return <GridContent key={key} {...section} />;
              }

              if (component === 'section.section-grid-text') {
                return <GridText key={key} {...section} />;
              }
            })}
          </>
        </Base>
      </div>
    </>
  );
}

export default Home;

Home.propTypes = {
  data: PropTypes.array,
};
