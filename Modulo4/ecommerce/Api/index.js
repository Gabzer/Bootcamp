import list from './productList.json';

const fetchData = async () => {
  const result = await JSON.parse(JSON.stringify(list));
  return result;
};

export default fetchData;
