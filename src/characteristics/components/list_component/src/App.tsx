/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * 
 * @author Sara Darias Sánchez
 * @date 02/05/2025
 * @description This file contains the main component of the application. 
 * 
 */

import ListComponent from './Components/ListComponent'
import './App.css'

/**
 * This is the main component of the application.
 * @returns {JSX.Element} A JSX element representing the main component of the application.
 */
function App() {
 return (<div>
  <ListComponent/>
  <ListComponent/>
  <ListComponent/>
  </div>);
}

export default App
