import { useCallback, useEffect, useRef, useState } from "react";
import type React from "react";
import { fireConfetti } from "./confetti";

const FILL_DURATION_MS = 1200;

export function useLogTaskCheckbox() {
  const [pressed, setPressed] = useState(false);
  const [completed, setCompleted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fillTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelConfettiRef = useRef<(() => void) | null>(null);

  const stopConfetti = useCallback(() => {
    cancelConfettiRef.current?.();
    cancelConfettiRef.current = null;
  }, []);

  const handleDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      if (completed) {
        stopConfetti();
        setCompleted(false);
        setPressed(false);
        return;
      }
      setPressed(true);
      fillTimeout.current = setTimeout(() => {
        setCompleted(true);
        setPressed(false);
        if (canvasRef.current) {
          cancelConfettiRef.current = fireConfetti(canvasRef.current);
        }
      }, FILL_DURATION_MS);
    },
    [completed, stopConfetti],
  );

  const handleUp = useCallback(() => {
    setPressed(false);
    if (!completed && fillTimeout.current) {
      clearTimeout(fillTimeout.current);
      fillTimeout.current = null;
    }
  }, [completed]);

  useEffect(
    () => () => {
      if (fillTimeout.current) clearTimeout(fillTimeout.current);
      stopConfetti();
    },
    [stopConfetti],
  );

  return { pressed, completed, canvasRef, handleDown, handleUp };
}
