import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'

import { HashRouter } from 'react-router-dom'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

 if (!PUBLISHABLE_KEY) {
   throw new Error('Add your Clerk Publishable Key to the .env file')
}
  
createRoot(document.getElementById('root')).render(
   <ClerkProvider publishableKey={PUBLISHABLE_KEY}afterSignOutUrl={"/"}>
 <HashRouter>
    <App />
    </HashRouter>
   </ClerkProvider>
 
)
