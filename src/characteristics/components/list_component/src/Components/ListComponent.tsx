/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * 
 * @author Sara Darias Sánchez
 * @date 02/05/2025
 * @description This file contains the List component . 
 * 
 */

/**
 * This is a simple List component that displays a list of items.
 * @returns {JSX.Element} A JSX element representing the List component.
 */
function ListComponent() {
  return (
    <div>
      <h1>List Component</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

export default ListComponent;