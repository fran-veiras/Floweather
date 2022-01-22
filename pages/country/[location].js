import React from 'react';
import Home from '..';

export default function Country(props) {
  console.log(props);

  return Home(props);
}

export async function getServerSideProps(context) {
  const { location } = context.query;

  const res = await fetch(`https://floweather.vercel.app/api/places`); // para usar en local http://localhost:3000/api/places sv: https://floweather.vercel.app/api/places
  const data = await res.json();

  const currentWeatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}&units=metric`
  );
  const currentWeather = await currentWeatherRes.json();

  const nextForecastRes = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.API_KEY}&exclude=current,minutely,hourly,alerts&units=metric`
  );
  const nextForecast = await nextForecastRes.json();

  return {
    props: { data, currentWeather, nextForecast, location },
  };
}
