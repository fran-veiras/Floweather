import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';

export const Header = (props) => {
  const { data } = props;
  const route = useRouter();

  const [country, setCountry] = useState('Buenos Aires');

  const handlerCountry = (val) => {
    setCountry(val);
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
        {data.map((val) => (
          <Flex key={val.id} alignItems="center" gridGap={1}>
            <HiLocationMarker />
            <Text variant="paragraph" onClick={() => handlerCountry(val.city)}>
              {val.city + ',' + ' ' + val.country}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
