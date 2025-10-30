import { useEffect } from 'react'
import gsap from 'gsap'

const HamburgerButton = ({ isOpen, onClick }) => {
    useEffect(() => {
        const line1 = document.querySelector('.hamburger-line-1')
        const line2 = document.querySelector('.hamburger-line-2')
        const line3 = document.querySelector('.hamburger-line-3')

        if (isOpen) {
            // Animación a X
            gsap.to(line1, {
                rotate: 45,
                y: 8,
                duration: 0.3,
                ease: 'power2.out'
            })
            gsap.to(line2, {
                opacity: 0,
                duration: 0.2,
                ease: 'power2.out'
            })
            gsap.to(line3, {
                rotate: -45,
                y: -8,
                duration: 0.3,
                ease: 'power2.out'
            })
        } else {
            // Animación de vuelta a líneas
            gsap.to(line1, {
                rotate: 0,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            })
            gsap.to(line2, {
                opacity: 1,
                duration: 0.2,
                ease: 'power2.out',
                delay: 0.1
            })
            gsap.to(line3, {
                rotate: 0,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            })
        }
    }, [isOpen])

    return (
        <button
            onClick={onClick}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-all duration-300 hover:scale-110"
            style={{
                backgroundColor: `rgb(var(--secondary))`,
                border: `1px solid rgb(var(--border))`
            }}
            aria-label="Toggle menu"
        >
            <span
                className="hamburger-line-1 block w-5 h-0.5 mb-1 rounded-full"
                style={{ backgroundColor: `rgb(var(--foreground))` }}
            />
            <span
                className="hamburger-line-2 block w-5 h-0.5 mb-1 rounded-full"
                style={{ backgroundColor: `rgb(var(--foreground))` }}
            />
            <span
                className="hamburger-line-3 block w-5 h-0.5 rounded-full"
                style={{ backgroundColor: `rgb(var(--foreground))` }}
            />
        </button>
    )
}

export default HamburgerButton
