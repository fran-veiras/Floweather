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
        {weather.weather[0].main === 'Rain' && (
          <Image src="/rain-raining.gif" width="700px" height="500px" />
        )}
        {weather.weather[0].main === 'Clear' && (
          <Image src="/sunny.gif" width="700px" height="500px" />
        )}
        {weather.weather[0].main === 'Clouds' && (
          <Image src="/heaven-cloud.gif" width="700px" height="500px" />
        )}
      </Box>
      <Flex zIndex="99" flexDir="column">
        <Heading
          textShadow="1px 1px 10px rgba(0, 0, 0, 0.5)"
          variant="subtitle"
        >
          Clima actual · {weather.name}
        </Heading>
        <Heading
          textShadow="1px 1px 10px rgba(0, 0, 0, 0.5)"
          variant="subtitle"
          fontSize="150px"
        >
          {`${weather.main.temp}`.slice(0, 2) + '°'}
        </Heading>
        <Heading
          textShadow="1px 1px 10px rgba(0, 0, 0, 0.5)"
          variant="subtitle"
        >
          {weather.weather[0].main === 'Rain' && 'Lluvia'}
          {weather.weather[0].main === 'Clear' && 'Soleado'}
          {weather.weather[0].main === 'Clouds' && 'Nublado'}
        </Heading>
        <Heading
          textShadow="1px 1px 10px rgba(0, 0, 0, 0.5)"
          variant="subtitle"
        >
          Min. {`${weather.main.temp_min}`.slice(0, 2) + '°'} Máx.{' '}
          {`${weather.main.temp_max}`.slice(0, 2) + '°'}
        </Heading>
      </Flex>
    </Box>
  );
};
