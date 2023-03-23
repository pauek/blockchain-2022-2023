import React from 'react'
import ReactDOM from 'react-dom/client'
import VMGui from './VMGui'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <VMGui />
  </React.StrictMode>,
)
