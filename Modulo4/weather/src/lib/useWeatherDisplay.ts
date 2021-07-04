import { useQuery } from 'react-query';
import { useAtom } from 'jotai';

import { WeatherData } from '../api/Entities/EntityDefinition';
import { weatherQuery } from '../api/queries';

import { checkedCityAtom } from '../global';

const MY_API_KEY = 'aa5a52001c1aabadb42b8ce1828f9fff';

export default function useWeatherDisplay() {
  const [cityChecked] = useAtom(checkedCityAtom);
  const url = `http://api.openweathermap.org/data/2.5/weather?id=${cityChecked}&units=metric&lang=pt_br&appid=${MY_API_KEY}`;
  const { isFetching, data } = useQuery<WeatherData>(
    weatherQuery(cityChecked!),
    () => fetch(url).then(response => response.json())
  );

  return { isFetching, data };
}
