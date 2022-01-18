/* eslint-disable @next/next/no-page-custom-font */
import { Container, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { Header } from '../components/Header/Header';
import { CurrentWeather } from '../components/Main/CurrentWeather';
import { NextWeather } from '../components/Main/NextForecast/NextWeather';

export default function Home(props) {
  const [nextDays, setNextDays] = useState([]);

  const days = props.nextForecast.list.filter((day) => {
    return day.dt_txt.endsWith('15:00:00');
  });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&family=Spline+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Container>
        <Header data={props.data} />
        <Flex my={2} gridGap={2}>
          <CurrentWeather weather={props.currentWeather} />
          <NextWeather days={days} />
        </Flex>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/places`);
  const data = await res.json();

  const currentWeatherRes = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Buenos aires&appid=${process.env.API_KEY}&units=metric`
  );
  const currentWeather = await currentWeatherRes.json();

  const nextForecastRes = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=Buenos aires&appid=${process.env.API_KEY}&exclude=current,minutely,hourly,alerts&units=metric`
  );
  const nextForecast = await nextForecastRes.json();

  return {
    props: { data, currentWeather, nextForecast },
  };
}
