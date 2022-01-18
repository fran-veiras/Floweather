import { extendTheme } from '@chakra-ui/react';
import { ContainerStyles as Container } from '../../components/chakraUi/ContainerStyles';
import { HeadingStyles as Heading } from '../../components/chakraUi/HeadingStyles';
import { TextStyles as Text } from '../../components/chakraUi/TextStyles';

export const themeApp = extendTheme({
  colors: {
    primary: '#17252A',
    secondary: '#2B7A78',
    tertiary: '#3AAFA9',
    fourth: '#DEF2F1',
    details: '#FEFFFF',
  },
  styles: {
    global: {
      body: {
        bg: '#FEFFFF',
      },
    },
  },
  components: {
    Container,
    Heading,
    Text,
  },
});
