import { createRoot } from 'react-dom/client'
import { createElement } from 'react'

const button = createElement('button', { onClick: () => alert('Hola mundo') }, 'Pulsame')

createRoot(document.getElementById('root')!).render(button)
