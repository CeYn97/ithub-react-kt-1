import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
<style>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap');
</style>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
