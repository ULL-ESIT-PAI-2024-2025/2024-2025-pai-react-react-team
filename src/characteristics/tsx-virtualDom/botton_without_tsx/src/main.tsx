/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Javier Gómez Alayón
 * @since 01/05/25
 * @desc Example of how to create a button using React without TSX.
 * 
 */
import { createRoot } from 'react-dom/client'
import { createElement } from 'react'

const button = createElement('button', { onClick: () => alert('Hola mundo') }, 'Pulsame')

createRoot(document.getElementById('root')!).render(button)
