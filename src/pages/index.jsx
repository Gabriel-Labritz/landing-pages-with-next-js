import PropTypes from 'prop-types';
import { mapData } from '@/api/map-data';
import Home from '@/templates/Home/Home';
import { loadPages } from '@/api/load-pages';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  let data = null;

  try {
    data = await loadPages('olha-so-a-minha-page');
  } catch (e) {
    data = null;
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
