/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * 
 * @author Sara Darias Sánchez
 * @date 02/05/2025
 * @description This file contains the List component using props. 
 * 
 */


/**
 * This interface defines the structure of the props for the ListComponent.
 * It includes a title of type string and an array of items of type string.
 */
interface Prop {
  title: string;
  items: string[];
}

/**
 * This is a simple List component that displays a list of items.
 * @param {string} title - The title of the list.
 * @param {string[]} items - The items to be displayed in the list.
 * @returns {JSX.Element} A JSX element representing the List component.
 */
function ListComponent({title, items}: Prop) {
  return (
    <>
      <h1>{title}</h1>
      <ul>
       {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListComponent;