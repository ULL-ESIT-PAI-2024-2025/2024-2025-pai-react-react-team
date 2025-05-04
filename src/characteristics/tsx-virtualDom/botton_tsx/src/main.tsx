import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <button onClick={() => alert('Hola mundo')}>Pulsame</button>
)