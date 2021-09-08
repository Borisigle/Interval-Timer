import { Text, Center, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const Timer = ({ timer, setShowTimer }) => {
  const { set, workTime, restTime } = timer;
  const [isWorking, setIsWorking] = useState();
  const [isPreparing, setIsPreparing] = useState(true);
  const [currentSet, setCurrentSet] = useState(set);
  const [[mins, secs], setTime] = useState([0, 5]);

  const updateTime = working => {
    //console.log(isWorking);
    const { minutes, seconds } = working ? workTime : restTime;
    setTime([minutes, seconds]);
  };

  const tick = () => {
    if (currentSet === 1 && mins === 0 && secs === 0) {
      setShowTimer(false);
    } else if (mins === 0 && secs === 0) {
      setIsPreparing(false);
      if (!isPreparing && !isWorking) {
        setCurrentSet(currentSet - 1);
      }
      setIsWorking(!isWorking);
      updateTime(!isWorking);
    } else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <Center height="100vh" bg="green.500">
      <VStack>
        {isWorking != null && (
          <Text fontWeight="500" fontSize="4xl">
            {currentSet}
          </Text>
        )}

        <Text fontWeight="500" fontSize="8rem">{`${mins
          .toString()
          .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</Text>
        <Text fontWeight="500" fontSize="6xl" textTransform="uppercase">
          {isWorking == null
            ? 'Preparación'
            : isWorking
            ? 'Trabajo'
            : 'Descanso'}
        </Text>
      </VStack>
    </Center>
  );
};

export default Timer;
