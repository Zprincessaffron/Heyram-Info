import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router  } from 'react-router-dom'
import axios from 'axios';

// Setting up the Axios base URL globally
axios.defaults.baseURL = 'http://localhost:3000';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
