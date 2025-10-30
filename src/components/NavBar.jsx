import logo from '/assets/images/logo-nameless.svg'
import { NavLink } from 'react-router-dom'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useState } from 'react'
import ThemeSwitcher from './ui/ThemeSwitcher'
import CurrencySwitcher from './ui/CurrencySwitcher'
import Logo from './ui/Logo'
import HamburgerButton from './ui/HamburgerButton'
import MobileMenu from './ui/MobileMenu'

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "+=300",
                scrub: true
            }
        })

        navTween.fromTo('nav', {
            backgroundImage: 'linear-gradient(to bottom, rgba(var(--background), 0), rgba(var(--background), 0))',
            backdropFilter: 'blur(0px)'
        }, {
            backgroundImage: 'linear-gradient(to bottom, rgba(var(--background), 0.8), rgba(var(--background), 0))',
            backdropFilter: 'blur(10px)',
            ease: 'power4.out'
        })

    }, [])


    return (
        <>
            <nav id='navbar' className='flex h-[7.5%] w-full fixed z-50 justify-center items-center'>
                <div className="nav-container flex justify-between items-center w-6/7 lg:w-2/3">
                    <div className="logo">
                        <NavLink to="/">
                            <div>
                                <Logo variant="nameless" className="h-8 md:h-10 " hover={true} />
                            </div>
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <NavLink
                            to="/"
                            className="font-semibold text-sm transition-colors"
                            style={{ color: `rgb(var(--foreground))` }}
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to="/tienda"
                            className="font-semibold text-sm transition-colors"
                            style={{ color: `rgb(var(--foreground))` }}
                        >
                            Tienda
                        </NavLink>
                        <CurrencySwitcher />
                        <ThemeSwitcher />
                        <div className="nav-buttons flex gap-2 !px-1 !py-1 rounded-4xl transition-colors">
                            <NavLink to="/login">
                                <button className='px-2 py-1 rounded-2xl transition-colors '>Log In</button>
                            </NavLink>
                            <NavLink to="/signup">
                                <button className='px-2 py-1 rounded-2xl transition-colors signup-button bg-[rgb(var(--card))] text-[rgb(var(--card-foreground))]'>Sign Up</button>
                            </NavLink>
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <HamburgerButton
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </div>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    )
}

export { NavBar }