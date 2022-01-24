import {
  Box,
  Fade,
  Flex,
  Heading,
  Select,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const Header = (props) => {
  const { data, currentLocation } = props;
  const route = useRouter() || [];

  const [country, setCountry] = useState('Buenos Aires');

  const handlerCountry = (e) => {
    setCountry(e.target.value);
  };

  useEffect(() => {
    route.push(`/country/${country}`);
  }, [country]);

  return (
    <Flex
      justifyContent="space-between"
      flexDir="column"
      alignItems="center"
      background="#3AAFA9"
      boxShadow="md"
      borderRadius="15px"
      py={2}
      px={4}
      gridGap={3}
    >
      <Box>
        <Heading variant="brand">Floweather ☀️</Heading>
      </Box>
      <Flex
        overflowX="scroll"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        justifyContent="space-between"
        width="full"
        gridGap={3}
      >
        <Select value={currentLocation} onChange={handlerCountry}>
          {data.map((val) => (
            <option
              data-testid="selector"
              key={val.city}
              value={val.city}
              variant="paragraph"
            >
              {val.city + ',' + ' ' + val.country}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  );
};
