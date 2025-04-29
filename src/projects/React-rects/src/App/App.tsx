"use client"

import { useState, useEffect } from "react"
import SquareCanvas from "../components/SquareCanvas"

/**
 * Componente principal de la aplicación.
 * Maneja la lógica para solicitar y mostrar cuadrados en un canvas.
 */
export default function SquareDrawingApp() {
  const [squareCount, setSquareCount] = useState<number | null>(null)
  /**
   * Solicita al usuario el número de cuadrados al cargar la página.
   */
  useEffect(() => { // Este hook se ejecuta una vez al cargar el componente.
    requestSquareCountFromUser()
  }, [])

  /**
   * Solicita al usuario que ingrese el número de cuadrados.
   */
  const requestSquareCountFromUser = () => {
    const userInputText = prompt("¿Cuántos cuadrados quieres dibujar?")
    // Pongo el input como entero.
    const parsedSquareCount = userInputText ? Number.parseInt(userInputText, 10) : 0
    if (!isNaN(parsedSquareCount) && parsedSquareCount > 0) {
      setSquareCount(parsedSquareCount)
    } else {
      alert("Por favor ingresa un número válido mayor que 0")
      setSquareCount(5) // Valor predeterminado
    }
  }
  return (
    <>
      <h1>Dibujando Cuadrados en Canvas</h1>
      {squareCount !== null && ( // Esto lo que hace es que si squareCount es null no se renderiza el div.
        <div>
          <p>Dibujando {squareCount} cuadrados</p>
          <SquareCanvas numberOfSquares={squareCount} /> {/* utilizamos el componente SquareCanvas*/}
          <button onClick={requestSquareCountFromUser}>Cambiar número de cuadrados</button>
        </div>
      )}
    </>
  )
}
