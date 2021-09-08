import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Main from './components/Main';
import Timer from './components/Timer';
import myTheme from './theme';
import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/700.css';

function App() {
  const [showTimer, setShowTimer] = useState(false);
  const [timer, setTimer] = useState({
    set: 0,
    workTime: { minutes: 0, seconds: 0 },
    restTime: { minutes: 0, seconds: 0 },
  });
  return (
    <ChakraProvider theme={myTheme}>
      {showTimer ? (
        <Timer timer={timer} setShowTimer={setShowTimer} />
      ) : (
        <Box>
          <Main setTimer={setTimer} setShowTimer={setShowTimer} />
        </Box>
      )}
    </ChakraProvider>
  );
}

export default App;
