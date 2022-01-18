import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';

export const Header = (data) => {
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
        {data.data.map((val) => (
          <Flex key={val.id} alignItems="center" gridGap={1}>
            <HiLocationMarker />
            <Text variant="paragraph">
              {val.city + ',' + ' ' + val.country}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
