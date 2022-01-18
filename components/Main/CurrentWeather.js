import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

export const CurrentWeather = ({ weather }) => {
  return (
    <Box
      flex="1"
      zIndex="-2"
      background="secondary"
      boxShadow="md"
      borderRadius="15px"
      p={4}
      position="relative"
      overflow="hidden"
    >
      <Box
        zIndex="-1"
        position="absolute"
        width="full"
        height="full"
        top="0"
        left="0"
      >
        <Image src="/rain-raining.gif" width="700px" height="500px" />
      </Box>
      <Flex zIndex="99" flexDir="column">
        <Heading variant="subtitle">Clima actual · {weather.name}</Heading>
        <Heading variant="subtitle" fontSize="150px">
          {`${weather.main.temp}`.slice(0, 2) + '°'}
        </Heading>
        <Heading variant="subtitle">
          {weather.weather[0].main === 'Rain' && 'Lluvia'}
        </Heading>
        <Heading variant="subtitle">
          Min. {`${weather.main.temp_min}`.slice(0, 2) + '°'} Máx.{' '}
          {`${weather.main.temp_max}`.slice(0, 2) + '°'}
        </Heading>
      </Flex>
    </Box>
  );
};
