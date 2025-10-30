import { NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ThemeSwitcher from './ThemeSwitcher'
import CurrencySwitcher from './CurrencySwitcher'

const MobileMenu = ({ isOpen, onClose }) => {
    const menuRef = useRef(null)
    const overlayRef = useRef(null)
    const itemsRef = useRef([])

    useEffect(() => {
        if (isOpen) {
            // Primero asegurar que todos los elementos sean visibles
            gsap.set(itemsRef.current, { opacity: 1, x: 0 })

            // Animación de apertura
            const tl = gsap.timeline()

            // Overlay fade in
            tl.to(overlayRef.current, {
                opacity: 1,
                pointerEvents: 'auto',
                duration: 0.3,
                ease: 'power2.out'
            })

            // Menu slide in
            tl.to(menuRef.current, {
                x: 0,
                duration: 0.4,
                ease: 'power3.out'
            }, '-=0.2')

            // Items stagger (reset y luego animar)
            tl.set(itemsRef.current, { opacity: 0, x: -20 })
            tl.to(itemsRef.current, {
                opacity: 1,
                x: 0,
                stagger: 0.1,
                duration: 0.3,
                ease: 'power2.out'
            }, '-=0.2')

        } else {
            // Animación de cierre
            const tl = gsap.timeline()

            tl.to(itemsRef.current, {
                opacity: 0,
                x: -20,
                stagger: 0.05,
                duration: 0.2,
                ease: 'power2.in'
            })

            tl.to(menuRef.current, {
                x: '-100%',
                duration: 0.3,
                ease: 'power3.in'
            }, '-=0.1')

            tl.to(overlayRef.current, {
                opacity: 0,
                pointerEvents: 'none',
                duration: 0.2,
                ease: 'power2.in'
            }, '-=0.2')
        }
    }, [isOpen])

    return (
        <>
            {/* Overlay con backdrop blur */}
            <div
                ref={overlayRef}
                className="md:hidden fixed inset-0 opacity-0 pointer-events-none"
                style={{
                    backgroundColor: `rgba(var(--background), 0.8)`,
                    backdropFilter: 'blur(10px)',
                    zIndex: 999
                }}
                onClick={onClose}
            />

            {/* Menú lateral */}
            <div
                ref={menuRef}
                className="md:hidden fixed top-0 left-0 h-full w-[280px] shadow-2xl"
                style={{
                    transform: 'translateX(-100%)',
                    backgroundColor: `rgb(var(--card))`,
                    borderRight: `1px solid rgb(var(--border))`,
                    zIndex: 1000
                }}
            >
                <div className="flex flex-col h-full p-6">
                    {/* Header */}
                    <div
                        ref={(el) => (itemsRef.current[0] = el)}
                        className="mb-8 pb-4"
                        style={{ borderBottom: `1px solid rgb(var(--border))` }}
                    >
                        <h2
                            className="text-2xl font-bold"
                            style={{ color: `rgb(var(--foreground))` }}
                        >
                            Menú
                        </h2>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-4 mb-8">
                        <NavLink
                            ref={(el) => (itemsRef.current[1] = el)}
                            to="/"
                            onClick={onClose}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: `rgb(var(--secondary))`,
                                color: `rgb(var(--foreground))`,
                                border: `1px solid rgb(var(--border))`
                            }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Inicio
                        </NavLink>

                        <NavLink
                            ref={(el) => (itemsRef.current[2] = el)}
                            to="/tienda"
                            onClick={onClose}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: `rgb(var(--secondary))`,
                                color: `rgb(var(--foreground))`,
                                border: `1px solid rgb(var(--border))`
                            }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            Tienda
                        </NavLink>
                    </nav>

                    {/* Divider */}
                    <div
                        ref={(el) => (itemsRef.current[3] = el)}
                        className="my-4"
                        style={{ borderTop: `1px solid rgb(var(--border))` }}
                    />

                    {/* Controls (Theme & Currency) */}
                    <div
                        ref={(el) => (itemsRef.current[4] = el)}
                        className="flex flex-col gap-4 mb-8"
                    >
                        <div className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ backgroundColor: `rgb(var(--secondary))` }}>
                            <span className="font-medium" style={{ color: `rgb(var(--foreground))` }}>
                                Tema
                            </span>
                            <ThemeSwitcher />
                        </div>

                        <div className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ backgroundColor: `rgb(var(--secondary))` }}>
                            <span className="font-medium" style={{ color: `rgb(var(--foreground))` }}>
                                Moneda
                            </span>
                            <CurrencySwitcher />
                        </div>
                    </div>

                    {/* Divider */}
                    <div
                        ref={(el) => (itemsRef.current[5] = el)}
                        className="my-4"
                        style={{ borderTop: `1px solid rgb(var(--border))` }}
                    />

                    {/* Auth Buttons */}
                    <div
                        ref={(el) => (itemsRef.current[6] = el)}
                        className="flex flex-col gap-3 mt-auto"
                    >
                        <NavLink to="/login" onClick={onClose}>
                            <button
                                className="w-full px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: `rgb(var(--secondary))`,
                                    color: `rgb(var(--foreground))`,
                                    border: `1px solid rgb(var(--border))`
                                }}
                            >
                                Iniciar Sesión
                            </button>
                        </NavLink>

                        <NavLink to="/signup" onClick={onClose}>
                            <button
                                className="w-full px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                style={{
                                    backgroundColor: `rgb(var(--primary))`,
                                    color: `rgb(var(--primary-foreground))`
                                }}
                            >
                                Registrarse
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu
