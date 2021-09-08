import { extendTheme } from '@chakra-ui/react';

const myTheme = extendTheme({
  fonts: {
    body: 'Roboto Condensed',
  },
  styles: {
    global: {
      body: {
        bg: '#000000',
        color: 'white',
      },
    },
  },
});

export default myTheme;
