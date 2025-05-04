/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Javier Gómez Alayón
 * @since 01/05/25
 * @desc Component that draws squares on a canvas element.
 * 
 */
'use client'

import { useRef, useEffect } from 'react'

/**
 * Props para el componente SquareCanvas.
 */
interface SquareCanvasProps {
  numberOfSquares: number
}

/**
 * Componente que dibuja cuadrados en un elemento canvas.
 * @param {SquareCanvasProps} props - Las propiedades del componente.
 */
export default function SquareCanvas({ numberOfSquares }: SquareCanvasProps) {
  const canvasReference = useRef<HTMLCanvasElement>(null)
  /**
   * Genera un color RGB aleatorio.
   * @return {string} Un string con el color generado.
   */
  const generateRandomColor = (): string => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'lime', 'teal', 'navy', 'maroon', 'olive', 'silver', 'gray']
    return colors[Math.floor(Math.random() * colors.length)]
  }
  /**
   * Dibuja cuadrados aleatorios en el canvas.
   * @param {CanvasRenderingContext2D} canvasContext - El contexto 2D del canvas.
   * @param {number} canvasWidth - El ancho del canvas.
   * @param {number} canvasHeight - El alto del canvas.
   */
  const renderSquaresOnCanvas = (
    canvasContext: CanvasRenderingContext2D, 
    canvasWidth: number, 
    canvasHeight: number
  ): void => {
    canvasContext.clearRect(0, 0, canvasWidth, canvasHeight)
    for (let squareIndex = 0; squareIndex < numberOfSquares; squareIndex++) {
      const squareSize = Math.random() * 80 + 20
      const squarePositionX = Math.random() * (canvasWidth - squareSize)
      const squarePositionY = Math.random() * (canvasHeight - squareSize)
      canvasContext.fillStyle = generateRandomColor()
      canvasContext.fillRect(squarePositionX, squarePositionY, squareSize, squareSize)
    }
  }

  /**
   * Efecto para dibujar los cuadrados cuando cambia el número.
   */
  useEffect(() => {
    const canvasElement = canvasReference.current
    if (!canvasElement) return
    const canvasContext = canvasElement.getContext('2d')
    if (!canvasContext) return

    const canvasWidth = canvasElement.width
    const canvasHeight = canvasElement.height

    renderSquaresOnCanvas(canvasContext, canvasWidth, canvasHeight)
  }, [numberOfSquares])

  return <canvas ref={canvasReference} width={800} height={500} />
}
