import { Box, Flex, Grid, Heading } from '@chakra-ui/react';

import React from 'react';
import { DayItemForecast } from './DayItemForecast';

export const NextWeather = ({ days }) => {
  console.log(days);
  return (
    <Box
      flex="1"
      background="secondary"
      boxShadow="md"
      borderRadius="15px"
      p={4}
    >
      <Flex flexDir="column" height="90%" justifyContent="space-between">
        <Heading variant="subtitle">Próximos días</Heading>
        {days.map((val) => (
          <DayItemForecast
            key={val.dt_txt}
            forecast={val.main}
            weather={val.weather}
            day={val.dt_txt}
          />
        ))}
      </Flex>
    </Box>
  );
};
