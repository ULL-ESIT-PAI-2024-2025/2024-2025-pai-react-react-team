import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Profile from './Example.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Profile />
  </StrictMode>,
)
