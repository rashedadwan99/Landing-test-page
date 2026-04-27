import { useEffect, useRef, useState } from "react";
import Button from "./ui/button/Button";
import { useTimer } from "@/hooks/useTimer";

function Timer() {
  const { timer, ref } = useTimer();
  const clearIntervalHandler = () => {
    window.clearInterval(ref.current);
  };

  return (
    <div>
      <h2>{timer}</h2>
      <Button
        label="Stop"
        handleClick={() => {
          clearIntervalHandler();
        }}
        variant="secondary"
      />
    </div>
  );
}

export default Timer;
