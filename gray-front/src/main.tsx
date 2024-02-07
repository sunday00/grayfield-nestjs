import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { extendedTheme } from './constants/theme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={extendedTheme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)