import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import ChatBot from './routes/ChatBot/index.jsx'
import GuinchoSeguro from './routes/GuinchoSeguro/index.jsx'
import QuemSomos from './routes/QuemSomos/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
