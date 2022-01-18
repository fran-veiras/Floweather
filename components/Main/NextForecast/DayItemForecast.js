import {
  Box,
  Center,
  Divider,
  grid,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export const DayItemForecast = ({ forecast, weather, day }) => {
  const weekday = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  const d = new Date(day);
  let dayNumber = d.getDay();

  return (
    <>
      <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(4, 1fr)">
        <GridItem>
          <Text variant="paragraph">{weekday[dayNumber]}</Text>
        </GridItem>
        <GridItem>
          <Text variant="paragraph">
            Min. {`${forecast.temp_min}`.slice(0, 2) + '°'}
          </Text>
        </GridItem>
        <GridItem>
          <Text variant="paragraph">
            Máx. {`${forecast.temp_max}`.slice(0, 2) + '°'}{' '}
          </Text>
        </GridItem>
        <GridItem>
          <Text variant="paragraph">
            {weather[0].main === 'Clouds' && '☁️'}
            {weather[0].main === 'Rain' && '🌧'}
          </Text>
        </GridItem>
      </Grid>
      <Divider orientation="horizontal" />
    </>
  );
};
