"use client";
import { Gradient } from "./Gradient";
import { useCallback, useEffect } from "react";

export const Canvas = () => {
  const gradient = new Gradient();

  const initGradient = useCallback(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  useEffect(() => {
    initGradient();
  }, [initGradient]);
  return (
    <canvas
      id="gradient-canvas"
      className="h-full w-full shadow-2xl drop-shadow-2xl"
    />
  );
};
