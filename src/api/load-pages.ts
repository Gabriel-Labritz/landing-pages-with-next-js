import { mapData } from './map-data';

export const loadPages = async (slug = '') => {
  const cleanSlug = slug ? `[slug]=${slug.replace(/[^a-z0-9-_]/gi, '')}` : '';
  const url = `http://localhost:1337/api/pages/?filters${cleanSlug}&populate=deep`;

  const raw = await fetch(url);
  const json = await raw.json();
  const { attributes } = json.data[0];
  const data = mapData([attributes]);

  return data;
};
