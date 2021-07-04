import { useAtom } from 'jotai';
import styled from 'styled-components';

import { checkedCityAtom, citiesAtom } from '../global';
import CityTag from '../atoms/CityTag.component';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function CityList() {
  const [cities] = useAtom(citiesAtom);
  const [checkedCity, setCheckedCity] = useAtom(checkedCityAtom);

  const onClick = (id: number) => {
    setCheckedCity(id);
  };

  return (
    <Container>
      {cities.map(city => (
        <CityTag
          key={city.id}
          onClick={() => onClick(city.id)}
          checked={checkedCity === city.id}
          name={city.name}
        />
      ))}
    </Container>
  );
}
