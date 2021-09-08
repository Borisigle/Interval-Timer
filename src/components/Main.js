import React, { useState, useEffect } from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  Input,
  Flex,
  Button,
  Spacer,
  Icon,
} from '@chakra-ui/react';
import TimerSelector from './TimerSelector';
import { FiMinusSquare, FiPlusSquare } from 'react-icons/fi';

const Main = ({ setTimer, setShowTimer }) => {
  const [set, setSets] = useState(1);
  const [workSecs, setWorkSecs] = useState('00');
  const [workMin, setWorkMin] = useState('00');
  const [restSecs, setRestSecs] = useState('00');
  const [restMin, setRestMin] = useState('00');

  useEffect(() => {
    setTimer({
      set: set,
      workTime: { minutes: parseInt(workMin), seconds: parseInt(workSecs) },
      restTime: { minutes: parseInt(restMin), seconds: parseInt(restSecs) },
    });
  }, [set, workSecs, workMin, restSecs, restMin]);

  return (
    <Box w={{ base: '70%', md: '10rem' }} m="auto" textAlign="center">
      <Flex my={10}>
        <Text>Inicio rapido</Text>
        <Spacer />
        <Text>-</Text>
      </Flex>
      <VStack spacing={10} mt={20}>
        <VStack spacing={0}>
          <Text fontWeight="bold">SETS</Text>
          <Flex justifyContent="space-between" alignItems="center" w={32}>
            <Icon as={FiMinusSquare} onClick={() => setSets(set - 1)} g />
            <Input
              value={set}
              variant="flushed"
              w="2rem"
              placeholder="00"
              type="number"
              textAlign="center"
              onChange={e => setSets(e.target.value)}
            />
            <Icon as={FiPlusSquare} onClick={() => setSets(set + 1)} />
          </Flex>
        </VStack>
        <TimerSelector
          title="WORK"
          sec={workSecs}
          setSec={setWorkSecs}
          min={workMin}
          setMin={setWorkMin}
        />
        <TimerSelector
          title="REST"
          sec={restSecs}
          setSec={setRestSecs}
          min={restMin}
          setMin={setRestMin}
        />
      </VStack>
      <Button
        colorScheme="teal"
        px={16}
        mt={10}
        onClick={() => setShowTimer(true)}
      >
        Start
      </Button>
    </Box>
  );
};

export default Main;
