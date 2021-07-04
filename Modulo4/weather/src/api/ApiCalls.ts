import cities from './Entities/city.json';

const fetchCities = async () => {
  return JSON.parse(JSON.stringify(cities));
};

export default fetchCities;
