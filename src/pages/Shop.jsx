import ProductCard from '../components/ui/ProductCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const ALL_PRODUCTS = [
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
    },
    {
        id: 7,
        name: "Cover Pro",
        price: 9,
        description: "Protección para tu dispositivo."
    },
    {
        id: 8,
        name: "Charger Fast",
        price: 5,
        description: "Carga rápida "
    },
    {
        id: 9,
        name: "Zima Cable Premium",
        price: 2.5,
        description: "Cable de alta durabilidad y velocidad."
    },
    {
        id: 10,
        name: "Screen Protector",
        price: 2,
        description: "Protección de pantalla con tecnología anti-rayado."
    }
]

const Shop = () => {
    const titleRef = useRef(null)
    const gridRef = useRef(null)
    const containerRef = useRef(null)

    useGSAP(() => {
        if (!titleRef.current) return

        gsap.from(titleRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out"
        })

        if (!gridRef.current) return

        const productCards = gridRef.current.querySelectorAll('.shop-product-card')
        if (productCards.length > 0) {
            gsap.from(productCards, {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1
                },
                opacity: 0,
                y: 40,
                stagger: 0.08,
                ease: "power2.out"
            })
        }
    }, { scope: containerRef })

    return (
        <div
            ref={containerRef}
            className="min-h-screen pt-32 pb-24 px-8"
            style={{ backgroundColor: `rgb(var(--background))` }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h1
                        ref={titleRef}
                        className="text-5xl md:text-6xl font-bold mb-4"
                        style={{ color: `rgb(var(--foreground))` }}
                    >
                        Tienda
                    </h1>
                    <p
                        className="text-xl"
                        style={{ color: `rgb(var(--muted-foreground))` }}
                    >
                        Descubre nuestra colección completa de productos premium
                    </p>
                </div>

                <div className="mb-8 flex gap-4 flex-wrap">
                    <button
                        className="px-6 py-3 rounded-full font-medium transition-all duration-300"
                        style={{
                            backgroundColor: `rgb(var(--primary))`,
                            color: `rgb(var(--primary-foreground))`
                        }}
                    >
                        Todos
                    </button>
                    <button
                        className="px-6 py-3 rounded-full font-medium transition-all duration-300"
                        style={{
                            backgroundColor: `rgb(var(--secondary))`,
                            color: `rgb(var(--secondary-foreground))`,
                            border: `1px solid rgb(var(--border))`
                        }}
                    >
                        Smartphones
                    </button>
                    <button
                        className="px-6 py-3 rounded-full font-medium transition-all duration-300"
                        style={{
                            backgroundColor: `rgb(var(--secondary))`,
                            color: `rgb(var(--secondary-foreground))`,
                            border: `1px solid rgb(var(--border))`
                        }}
                    >
                        Wearables
                    </button>
                    <button
                        className="px-6 py-3 rounded-full font-medium transition-all duration-300"
                        style={{
                            backgroundColor: `rgb(var(--secondary))`,
                            color: `rgb(var(--secondary-foreground))`,
                            border: `1px solid rgb(var(--border))`
                        }}
                    >
                        Accesorios
                    </button>
                </div>

                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {ALL_PRODUCTS.map((product) => (
                        <div key={product.id} className="shop-product-card">
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop
