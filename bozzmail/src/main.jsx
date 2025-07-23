import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { ToastProvider } from './context/toast/ToastProvider';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ToastProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ToastProvider>
  </StrictMode>

)
