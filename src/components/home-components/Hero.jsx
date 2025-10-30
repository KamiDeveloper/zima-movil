import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"
import Logo from "../ui/Logo"

const Hero = () => {
    const heroRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const ctaRef = useRef(null)
    const [isAnimationComplete, setIsAnimationComplete] = useState(false)

    useGSAP(() => {
        // Referencias de elementos
        const title = titleRef.current
        const subtitle = subtitleRef.current
        const cta = ctaRef.current
        const hero = heroRef.current

        if (!title || !subtitle || !cta || !hero) return

        // PASO 1: Reset inicial - Asegurar estado de inicio
        gsap.set([title, subtitle, cta], {
            opacity: 0,
            y: 0,
            scale: 1,
            clearProps: "transform" // Limpiar transformaciones previas
        })

        // PASO 2: Animación de entrada (sin ScrollTrigger)
        const entryTimeline = gsap.timeline({
            onComplete: () => {
                setIsAnimationComplete(true)
            }
        })

        entryTimeline
            .to(title, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            })
            .to(subtitle, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.7")
            .to(cta, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.7")

        // PASO 3: Animación de scroll (solo después de entrada completa)
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                onUpdate: (self) => {
                    // Solo aplicar si la animación de entrada terminó
                    if (!isAnimationComplete) return

                    const progress = self.progress

                    // Animación basada en progreso (0-1)
                    gsap.to(title, {
                        y: -100 * progress,
                        opacity: 1 - progress,
                        scale: 1 - (0.2 * progress),
                        duration: 0.1,
                        overwrite: true
                    })

                    gsap.to(subtitle, {
                        y: -80 * progress,
                        opacity: 1 - progress,
                        duration: 0.1,
                        overwrite: true
                    })

                    gsap.to(cta, {
                        y: -60 * progress,
                        opacity: 1 - progress,
                        duration: 0.1,
                        overwrite: true
                    })
                }
            }
        })

        // PASO 4: Cleanup al desmontar
        return () => {
            entryTimeline.kill()
            scrollTimeline.kill()

            // Reset elementos a su estado visible
            gsap.set([title, subtitle, cta], {
                opacity: 1,
                y: 0,
                scale: 1,
                clearProps: "all"
            })
        }
    }, [isAnimationComplete])

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