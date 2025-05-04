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
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Profile from './Example.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Profile />
  </StrictMode>,
)
