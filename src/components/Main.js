import React, { useState, useEffect } from 'react';
import { Box, HStack, Text, VStack, Input } from '@chakra-ui/react';
import TimerSelector from './TimerSelector';

const Main = ({ setTimer }) => {
  const [set, setSets] = useState(1);
  const [workSecs, setWorkSecs] = useState('00');
  const [workMin, setWorkMin] = useState('00');
  const [restSecs, setRestSecs] = useState('00');
  const [restMin, setRestMin] = useState('00');

  useEffect(() => {
    setTimer({
      sets: set,
      workTime: { minutes: parseInt(workMin), seconds: parseInt(workSecs) },
      restTime: { minutes: parseInt(restMin), seconds: parseInt(restSecs) },
    });
  }, [set, workSecs, workMin, restSecs, restMin]);

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
      <TimerSelector
        title="Work"
        sec={workSecs}
        setSec={setWorkSecs}
        min={workMin}
        setMin={setWorkMin}
      />
      <TimerSelector
        title="Rest"
        sec={restSecs}
        setSec={setRestSecs}
        min={restMin}
        setMin={setRestMin}
      />
    </Box>
  );
};

export default Main;
