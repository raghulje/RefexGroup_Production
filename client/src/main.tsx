
import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { initGA4 } from './utils/ga4'

// Initialize Google Analytics 4 (only once)
initGA4();

AOS.init({
  duration: 600, // Reduced from 800ms for smoother animations
  once: true,
  offset: 50,
  easing: 'ease-out-cubic',
  delay: 0,
  anchorPlacement: 'top-bottom',
  useClassNames: false, // Better performance
  disableMutationObserver: false,
  debounceDelay: 50, // Optimize scroll performance
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
