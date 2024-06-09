import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { io } from 'socket.io-client'
import { SocketContextProvider } from './context/SocketContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <AuthContextProvider>
        {/* <SocketContextProvider> */}
          <App />
        {/* </SocketContextProvider> */}
      </AuthContextProvider>
    </BrowserRouter>
  </>,
)
