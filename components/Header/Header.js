import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      background="fourth"
      boxShadow="md"
      borderRadius="15px"
      py={2}
      px={4}
    >
      <Heading variant="brand">Floweather ☀️</Heading>
      <Box display="flex">
        <Text>Buenos Aires, Argentina |</Text>
        <Text> Rio De Janeiro, Brasil |</Text>
        <Text> Nueva York, Estados Unidos |</Text>
        <Text> Madrid, España |</Text>
        <Text>Cancún, México</Text>
      </Box>
    </Flex>
  );
};
