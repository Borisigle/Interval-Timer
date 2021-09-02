import React from 'react';
import { HStack, VStack, Text, Box, Input } from '@chakra-ui/react';

const TimerSelector = ({ title }) => {
  const addTime = () => {
    if (parseInt(sec) === 59) {
      setSec('00');
      let minutes = parseInt(min) + 1;
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      setMin(minutes.toString());
    } else {
      let seconds = parseInt(sec) + 1;
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      setSec(seconds.toString());
    }
  };

  const substractTime = () => {
    if (min === '00' && sec === '00') return;
    if (sec === '00') {
      setSec('59');
      if (min < 11) {
        setMin('0' + (parseInt(min) - 1));
      } else {
        setMin((parseInt(min) - 1).toString());
      }
    } else {
      if (sec < 11) {
        setSec('0' + (parseInt(sec) - 1));
      } else {
        setSec((parseInt(sec) - 1).toString());
      }
    }
  };

  return (
    <VStack>
      <Text>{title} </Text>
      <HStack>
        <Box as="button" onClick={() => substractTime()}>
          -
        </Box>
        <Input
          value={min}
          variant="flushed"
          w="2rem"
          placeholder="00"
          type="number"
          textAlign="center"
          onChange={e => setMin(e.target.value)}
        />
        <Text>:</Text>
        <Input
          value={sec}
          variant="flushed"
          w="2rem"
          type="number"
          placeholder="00"
          textAlign="center"
          onChange={e => setSec(e.target.value)}
        />
        <Box as="button" onClick={() => addTime()}>
          +
        </Box>
      </HStack>
    </VStack>
  );
};

export default TimerSelector;
