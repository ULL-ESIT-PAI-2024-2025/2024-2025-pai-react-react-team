/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Javier Gómez Alayón
 * @since 01/05/25
 * @desc Example of how to create a status variable using React.
 * 
 */
import { useState } from 'react';

function Example(): void {
  const [count, setCount] = useState<number>(0);
}

export default Example;
