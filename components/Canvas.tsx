"use client"

import { useCallback, useEffect } from "react"

import { Gradient } from "../assets/Gradient"

export const Canvas = () => {
  const gradient = new Gradient()

  const initGradient = useCallback(() => {
    gradient.initGradient("#gradient-canvas")
  }, [])

  useEffect(() => {
    initGradient()
  }, [])
  return (
    <canvas
      id="gradient-canvas"
      className="h-full w-full shadow-2xl drop-shadow-2xl"
    />
  )
}
