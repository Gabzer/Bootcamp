import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useAtom } from 'jotai';
import styled, { ThemeProvider } from 'styled-components';

import '../styles/colors.styles.css';

import CitySearch from '../molecules/CitySearch.component';
import WeatherDisplay from '../atoms/WeatherDisplay';
import ThemeSwitch from '../atoms/ThemeSwitch.component';
import { themeAtom } from '../global';
import { DarkTheme, LightTheme } from '../themes';

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background};
`;
const AppContainer = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.background};
`;
const ContainerWeatherDisplay = styled.div`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  const queryCliente = new QueryClient();
  const [theme] = useAtom(themeAtom);

  return (
    <QueryClientProvider client={queryCliente}>
      <ThemeProvider theme={theme === 'dark' ? DarkTheme : LightTheme}>
        <AppContainer>
          <Container>
            <ThemeSwitch />
            <div>
              <CitySearch />
            </div>
            <ContainerWeatherDisplay>
              <WeatherDisplay />
            </ContainerWeatherDisplay>
          </Container>
        </AppContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
