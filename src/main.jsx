import React from 'react'
import ReactDOM from 'react-dom/client'

import { GifExpertApp } from './GifExpertApp'

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode> 
    <div className='bg-slate-200 min-h-screen p-6'>
      <GifExpertApp />
    </div>
   </React.StrictMode>,
)
