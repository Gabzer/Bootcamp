import React from 'react';
import styled from 'styled-components';

import useWeatherDisplay from '../lib/useWeatherDisplay';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 5rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textPrimary};
`;
const Title = styled.h1`
  font-weight: lighter;
`;
const CityName = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;
const TemperatureDisplay = styled.span`
  display: flex;
  justify-content: center;
`;
const TempImage = styled.span`
  border-radius: 1000px;
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.secondary};
`;
const TempValue = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bolder;
`;
const MinMaxContainer = styled.span`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;
const Loading = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-weight: bolder;
`;

export default function WeatherDisplay() {
  const { isFetching, data } = useWeatherDisplay();
  console.log('isFetching', isFetching);
  console.log('data', data);

  if (isFetching || !data) return <Loading>Carregando</Loading>;
  if (!data.weather || !data.main) return <Loading>Sem dados</Loading>;

  return (
    <Container>
      <Title>Tempo agora em</Title>
      <CityName>{data.name}</CityName>
      <TemperatureDisplay>
        <TempImage>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Imagem"
          />
        </TempImage>
        <TempValue>{data.main.temp}</TempValue>
      </TemperatureDisplay>
      <MinMaxContainer>
        <span>Minima: {data.main.temp_min}</span>
        <span>Maxima: {data.main.temp_max}</span>
      </MinMaxContainer>
    </Container>
  );
}
