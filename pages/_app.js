import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import { themeApp } from '../styles/theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={themeApp}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
