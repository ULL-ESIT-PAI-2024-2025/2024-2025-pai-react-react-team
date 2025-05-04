/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * 
 * @author Sara Darias Sánchez
 * @date 02/05/2025
 * @description This file contains the main component. 
 * 
 */

import './App.css'
import ListComponent from '../Components/list_component_with_props'

/**
 * This is the main component of the application.
 * It renders two ListComponent instances with different titles and items.
 * @returns {JSX.Element} A JSX element representing the main component of the application.
 */
function App() {
  return (
    <>
      <ListComponent title="My List" items={['Item 1', 'Item 2', 'Item 3']} />
      <ListComponent title="Fruits" items={['Apple', 'Orange', 'Strawberry']} />
    </>
  )
}

export default App
