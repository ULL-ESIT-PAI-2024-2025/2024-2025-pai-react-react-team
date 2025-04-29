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