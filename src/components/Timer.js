import React, { useState } from 'react';

const Timer = ({ timer }) => {
  const { set, workTime, restTime } = timer;
  const [currentMode, setCurrentMode] = useState(workTime);

  const min = currentMode.minutes;
  const sec = currentMode.secs;
  console.log(timer, min);
  //   const tick = () => {
  //     if (hrs === 0 && secs === 0) console.log('funciono');
  //     else if (mins === 0 && secs === 0) {
  //       setTime([hrs - 1, 59, 59]);
  //     } else if (secs === 0) {
  //       setTime([hrs, mins - 1, 59]);
  //     } else {
  //       setTime([hrs, mins, secs - 1]);
  //     }
  //   };

  //   //   const reset = () =>
  //   //     setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  //   React.useEffect(() => {
  //     const timerId = setInterval(() => tick(), 1000);
  //     return () => clearInterval(timerId);
  //   });
  return <div>Hola</div>;
};

export default Timer;
