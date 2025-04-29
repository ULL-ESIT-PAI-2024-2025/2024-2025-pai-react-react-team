"use client"

import { useRef, useEffect } from "react"

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
    const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "cyan", "magenta", "lime", "teal", "navy", "maroon", "olive", "silver", "gray"]
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
    // Limpiar el canvas
    canvasContext.clearRect(0, 0, canvasWidth, canvasHeight)

    // Dibujar la cantidad especificada de cuadrados
    for (let squareIndex = 0; squareIndex < numberOfSquares; squareIndex++) {
      // Tamaño aleatorio entre 20 y 100 píxeles
      const squareSize = Math.random() * 80 + 20

      // Posición aleatoria dentro del canvas
      const squarePositionX = Math.random() * (canvasWidth - squareSize)
      const squarePositionY = Math.random() * (canvasHeight - squareSize)

      // Color aleatorio
      canvasContext.fillStyle = generateRandomColor()

      // Dibujar el cuadrado
      canvasContext.fillRect(squarePositionX, squarePositionY, squareSize, squareSize)
    }
  }

  /**
   * Efecto para dibujar los cuadrados cuando cambia el número.
   */
  useEffect(() => {
    const canvasElement = canvasReference.current
    if (!canvasElement) return

    const canvasContext = canvasElement.getContext("2d")
    if (!canvasContext) return

    const canvasWidth = canvasElement.width
    const canvasHeight = canvasElement.height

    renderSquaresOnCanvas(canvasContext, canvasWidth, canvasHeight)
  }, [numberOfSquares])

  return <canvas ref={canvasReference} width={500} height={400} />
}
