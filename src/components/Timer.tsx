import { VFC } from 'react';
import { Button, Box } from '@material-ui/core';
import 'components/Timer.css';

// ボタンを押したときに実行する関数や、画面に表示する変数の定義
type Props = {
  timeLeft?: number;
  reset?: () => void;
};

const Timer: VFC<Props> = ({ timeLeft = 0, reset = () => undefined }) => (
  <>
    <Box m={1} textAlign="center" fontSize="h2.fontSize">
      {timeLeft}
    </Box>
    <Box m={1} textAlign="center">
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={reset}
      >
        Reset
      </Button>
    </Box>
  </>
);

export default Timer;
