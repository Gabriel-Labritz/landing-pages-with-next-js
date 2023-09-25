import Home, { HomeProps } from '../templates/Home/Home';
import { loadPages } from '../api/load-pages';
import { GetServerSideProps } from 'next';

export default function Index({ data = null }: HomeProps) {
  return <Home data={data} />;
}

// SSR -> Server Side Rendering
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // Toda vez que eu acessar essa página tudo abaixo vai ser feito novamente (buscar os dados)
  // fica rodando o servidor por baixo dos panos
  // bom -> não precisa ser rebuildado toda vez que a página atualizar
  // podemos misturar os dois SSG e SSR -> ISR -> basta usar revalidate: tempo
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

// SSG -> Static Site Generation
// export const getStaticProps = async () => {
//   let data = null;

//   try {
//     data = await loadPages('olha-so-a-minha-page');
//   } catch (e) {
//     data = null;
//   }

//   if (!data || !data.length) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       data,
//     },
//   };
// };
