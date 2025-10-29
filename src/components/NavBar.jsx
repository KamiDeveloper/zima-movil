import logo from '/assets/images/logo-nameless.svg'
import { NavLink } from 'react-router-dom'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ThemeSwitcher from './ui/ThemeSwitcher'
import CurrencySwitcher from './ui/CurrencySwitcher'
import Logo from './ui/Logo'

const NavBar = () => {
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
        <nav id='navbar'>
            <div className="nav-container ">
                <div className="logo">
                    <NavLink to="/">
                        <div>
                            <Logo variant="nameless" className="h-15" hover={true} />
                        </div>
                    </NavLink>
                </div>
                <div className="flex items-center gap-6">
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
                    <div className="nav-buttons">
                        <NavLink to="/login">
                            <button className='nav-button login-button'>Log In</button>
                        </NavLink>
                        <NavLink to="/signup">
                            <button className='nav-button signup-button'>Sign Up</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export { NavBar }