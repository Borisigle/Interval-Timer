import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Main from './components/Main';
import Timer from './components/Timer';

function App() {
  const [timer, setTimer] = useState({
    sets: 0,
    workTime: { minutes: 0, seconds: 0 },
    restTime: { minutes: 0, seconds: 0 },
  });
  return (
    <ChakraProvider theme={theme}>
      <Main setTimer={setTimer} />
      <Timer timer={timer} />
    </ChakraProvider>
  );
}

export default App;
