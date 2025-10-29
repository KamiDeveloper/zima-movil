import ProductCard from "../ui/ProductCard"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const FEATURED_PRODUCTS = [
    {
        id: 1,
        name: "Infinix Hot 60 Pro Plus",
        price: 170,
        description: "Destacado por ser el más Delgado del Mundo con Pantalla Curva AMOLED 3D, IA Avanzada y un Rendimiento Excepcional.",
        featured: true
    },
    {
        id: 2,
        name: "Realme Buds T110",
        price: 23,
        description: "Auriculares Inalámbricos que Ofrecen una Batería de Larga Duración, Baja Latencia para Juegos y Resistencia a Salpicaduras."
    },
    {
        id: 3,
        name: "Redmi Buds 6 Lite",
        price: 20,
        description: "Compacto pero poderoso. Auriculares inalámbricos de Xiaomi que ofrecen cancelación de ruido activa (ANC) son una opción ideal para uso diario y deporte."
    },
    {
        id: 4,
        name: "Band 6",
        price: 15,
        description: "Reloj inteligente con funciones avanzadas."
    },
    {
        id: 5,
        name: "Buds Pro",
        price: 39,
        description: "Audio como pocos y con cancelación de ruido activa."
    },
    {
        id: 6,
        name: "Tablet",
        price: 499,
        description: "Productividad y entretenimiento en pantalla grande."
    }
]

const Products = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)

    useGSAP(() => {
        if (!sectionRef.current || !titleRef.current) return

        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "top 50%",
                scrub: 1
            },
            opacity: 0,
            y: 50,
            ease: "power2.out"
        })

        const productCards = sectionRef.current.querySelectorAll(".product-card")
        if (productCards.length > 0) {
            gsap.from(productCards, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "top 40%",
                    scrub: 1
                },
                opacity: 0,
                y: 60,
                stagger: 0.1,
                ease: "power2.out"
            })
        }
    }, { scope: sectionRef })

    return (
        <section
            ref={sectionRef}
            className="min-h-screen py-24 px-8"
            style={{ backgroundColor: `rgb(var(--background))` }}
        >
            <div className="max-w-7xl mx-auto">
                <h2
                    ref={titleRef}
                    className="text-5xl md:text-6xl font-bold mb-16 text-center"
                    style={{ color: `rgb(var(--foreground))` }}
                >
                    Productos Destacados
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
                    <div className="product-card col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
                        <ProductCard {...FEATURED_PRODUCTS[0]} colSpan={2} rowSpan={2} />
                    </div>

                    <div className="product-card col-span-1 md:col-span-1 lg:col-span-1">
                        <ProductCard {...FEATURED_PRODUCTS[1]} />
                    </div>

                    <div className="product-card col-span-1 md:col-span-1 lg:col-span-1">
                        <ProductCard {...FEATURED_PRODUCTS[2]} />
                    </div>

                    <div className="product-card col-span-1 md:col-span-1 lg:col-span-1">
                        <ProductCard {...FEATURED_PRODUCTS[3]} />
                    </div>

                    <div className="product-card col-span-1 md:col-span-1 lg:col-span-1">
                        <ProductCard {...FEATURED_PRODUCTS[4]} />
                    </div>

                </div>

                <div className="text-center mt-16">
                    <button
                        className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        style={{
                            backgroundColor: `rgb(var(--primary))`,
                            color: `rgb(var(--primary-foreground))`
                        }}
                    >
                        Ver Todos los Productos
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Products