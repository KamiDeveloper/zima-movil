import { NavBar } from '../components/NavBar'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

const RootLayout = () => {
    const location = useLocation()
    const lenisRef = useRef(null)

    // Inicializar Lenis
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothTouch: false,
            touchMultiplier: 2,
        })

        lenisRef.current = lenis

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    // Scroll to top al cambiar de página
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, {
                immediate: true, // Scroll instantáneo al cambiar página
                force: true,
                lock: true
            })
        }
    }, [location.pathname])

    return (
        <div>
            <NavBar />
            <div id="main-app-container">
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout