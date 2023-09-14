import PropTypes from 'prop-types';
import { mapData } from '@/api/map-data';
import Home from '@/templates/Home/Home';
import { loadPages } from '@/api/load-pages';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

// SSG -> Static Site Generator
// Quase como um cache, salva os dados e entrega sempre esses arquivos prontos para o cliente = + performace
export const getStaticProps = async () => {
  // const raw = await fetch(
  //   'http://localhost:1337/api/pages/?filters[slug]=olha-so-a-minha-page&populate=deep',
  // );
  // const json = await raw.json();
  // const { attributes } = json.data[0];
  // const data = mapData([attributes]);
  let data = null;

  try {
    data = await loadPages('olha-so-a-minha-page');
  } catch (e) {
    //
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: PropTypes.array,
};
