import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import Logo from "../ui/Logo"

const Hero = () => {
    const heroRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const ctaRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: false
            }
        })

        tl.to(titleRef.current, {
            y: -100,
            opacity: 0,
            scale: 0.8,
            ease: "power2.out"
        })
            .to(subtitleRef.current, {
                y: -80,
                opacity: 0,
                ease: "power2.out"
            }, "<")
            .to(ctaRef.current, {
                y: -60,
                opacity: 0,
                ease: "power2.out"
            }, "<")

        gsap.from(titleRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            delay: 0.2
        })

        gsap.from(subtitleRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
            delay: 0.5
        })

        gsap.from(ctaRef.current, {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power3.out",
            delay: 0.8
        })

    }, [])

    return (
        <section
            ref={heroRef}
            className="min-h-screen flex flex-col items-center justify-center px-8 relative overflow-hidden"
            style={{ backgroundColor: `rgb(var(--background))` }}
        >
            <div className="max-w-6xl mx-auto text-center z-10">
                <div
                    ref={titleRef}
                    className="flex flex-col items-center mb-6"
                >
                    <Logo variant="nameless" className="h-90.5" />
                    <h1
                        className="text-6xl md:text-8xl font-bold tracking-tight"
                        style={{ color: `rgb(var(--foreground))` }}
                    >
                        ZimaMóvil
                    </h1>
                </div>
                <p
                    ref={subtitleRef}
                    className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed"
                    style={{ color: `rgb(var(--muted-foreground))` }}
                >
                    Queremos ser la única tienda para tí y ofrecerte la mejor experiencia, calidad y servicio.
                </p>
                <div ref={ctaRef} className="flex gap-4 justify-center flex-wrap">
                    <button
                        className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        style={{
                            backgroundColor: `rgb(var(--primary))`,
                            color: `rgb(var(--primary-foreground))`
                        }}
                    >
                        Explorar Catálogo
                    </button>
                    <button
                        className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                        style={{
                            backgroundColor: `rgb(var(--secondary))`,
                            color: `rgb(var(--secondary-foreground))`,
                            border: `2px solid rgb(var(--border))`
                        }}
                    >
                        Saber Más
                    </button>
                </div>
            </div>

            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: `rgb(var(--primary) / 0.3)` }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: `rgb(var(--accent) / 0.3)` }}
                ></div>
            </div>
        </section>
    )
}

export default Hero