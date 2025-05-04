/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Javier Gómez Alayón
 * @since 01/05/25
 * @desc Example of how to create a button without using React.
 * 
 */
function main(): void {
  const root = document.getElementById('root')!
  const button = document.createElement('button')
  button.innerText = 'Pulsame'
  button.onclick = () => {
    alert('Hola mundo')
  }
  root.appendChild(button)
}

main();