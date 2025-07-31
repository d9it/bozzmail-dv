import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ToastProvider } from './context/toast/ToastProvider';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ToastProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </ToastProvider>
  </StrictMode>

)
