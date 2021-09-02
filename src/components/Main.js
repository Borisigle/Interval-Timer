import React, { useState } from 'react';
import { Box, HStack, Text, VStack, Input } from '@chakra-ui/react';
import TimerSelector from './TimerSelector';

const Main = () => {
  const [set, setSets] = useState(1);
  const [min, setMin] = useState('00');
  const [sec, setSec] = useState('00');
  const [restSecs, setRestSecs] = useState('00');
  const [restMin, setRestMin] = useState('00');

  return (
    <Box>
      <Text>Inicio rapido</Text>
      <VStack>
        <Text>Sets</Text>
        <HStack>
          {set > 1 && (
            <Box as="button" onClick={() => setSets(set - 1)}>
              -
            </Box>
          )}
          <Text>{set}</Text>
          <Box as="button" onClick={() => setSets(set + 1)}>
            +
          </Box>
        </HStack>
      </VStack>
      <TimerSelector title="Work" />
      <TimerSelector />
    </Box>
  );
};

export default Main;
