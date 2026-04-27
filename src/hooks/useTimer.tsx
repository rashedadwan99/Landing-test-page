import React, { useEffect, useRef, useState } from "react";

export function useTimer() {
  const [timer, setTimer] = useState<ReturnType<typeof setInterval>>(0);
  let ref = useRef<number>(null!);
  useEffect(() => {
    ref.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(ref.current);
  }, []);
  return { ref, timer };
}
