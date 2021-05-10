import { useCallback, useEffect, useRef, useState } from 'react';

// タイマーのロジック
// [戻り値]
const useTimer = (limit: number): [number, () => void] => {
  // 状態変数と更新関数
  // 時間変数と時間更新関数
  const [timeLeft, setTimeLeft] = useState(limit);
  // 更新関数の定義
  const tick = () => setTimeLeft((t) => t - 1);
  // あらゆる書き換え可能な値を保持可能
  // stateと違って再レンダリングをしない
  const timerId = useRef<NodeJS.Timeout>();

  // javascript組み込み関数で時間をリセットする (0.2秒で60->59秒になることはなくなる )
  const clearTimer = () => {
    if (timerId.current) clearInterval(timerId.current);
  };

  // 関数定義そのものをメモ化する
  // limitが更新されたときだけ関数の再定義が行われる
  // タイマーの初期化を行う
  const reset = useCallback(() => {
    clearTimer();
    timerId.current = setInterval(tick, 1000);
    // timeLeftをlimit時間にする
    setTimeLeft(limit);
  }, [limit]);

  useEffect(() => {
    reset();

    return clearTimer;
  }, [reset]);
  useEffect(() => {
    if (timeLeft === 0) reset();
  }, [timeLeft, reset]);

  // 返すのは時間変数とタイマーの初期化関数のみ
  // オブジェクトを返しても良い {timeLeft,reset}
  return [timeLeft, reset];
};

export default useTimer;
