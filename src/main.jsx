import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

createRoot(document.getElementById('root')).render(

  <App />
)
