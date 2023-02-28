'use client'
import { Gradient } from '@/components/Gradient/Gradient'
import { useCallback, useEffect } from 'react'

export const Canvas = () => {
    const gradient = new Gradient()

    const initGradient = useCallback(() => {
        gradient.initGradient('#gradient-canvas')
    }, [])

    useEffect(() => {
        initGradient()
    }, [initGradient])
    return (

        <canvas
            id='gradient-canvas'
            className='h-full w-full shadow-3xl drop-shadow-2xl' />

    )
}
