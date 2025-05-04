/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Javier Gómez Alayón
 * @since 01/05/25
 * @desc Third example of how to create a status variable using React.
 * 
 */
import { useState } from 'react';

function Profile() {
  const [name] = useState<string>('Pedro');
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <p>{name}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increase
      </button>
    </>
  );
}

export default Profile;
