import logo from '/assets/images/logo-nameless.svg'
import { NavLink } from 'react-router-dom'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

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
        const linkTween = gsap.timeline({
            scrollTrigger: {
                trigger: document.body,
                start: "+=700 top top",
                end: "+=300",
                scrub: true,
            }
        })

        navTween.fromTo('nav', {
            backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))',
            backdropFilter: 'blur(0px)'
        }, {
            backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
            backdropFilter: 'blur(10px)',
            ease: 'power4.out'
        })

        linkTween
            .to('.nav-links a', {
                color: '#aaa',
            })

    }, [])


    return (
        <nav id='navbar'>
            <div className="nav-container ">
                <div className="logo">
                    <NavLink to="/">
                        <img className='logo-image' src={logo} alt="Logo" />
                    </NavLink>
                </div>
                <div className="nav-buttons">
                    <NavLink to="/login">
                        <button className='nav-button login-button'>Log In</button>
                    </NavLink>
                    <NavLink to="/signup">
                        <button className='nav-button signup-button'>Sign Up</button>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export { NavBar }