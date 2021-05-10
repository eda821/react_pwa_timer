import { VFC } from 'react';
import useTimer from 'hooks/use-timer';
import Timer from 'components/Timer';

const ContainerTimer: VFC<{ limit: number }> = ({ limit }) => {
  // custom hooks
  const [timeLeft, reset] = useTimer(limit);

  return <Timer timeLeft={timeLeft} reset={reset} />;
};

export default ContainerTimer;
