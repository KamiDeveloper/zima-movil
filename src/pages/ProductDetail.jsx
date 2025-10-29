import { useParams, Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useCurrency } from '../context/CurrencyContext'

const PRODUCTS_DATA = {
    1: {
        name: "Zima Pro Max",
        price: 170,
        description: "El dispositivo más potente de nuestra línea. Rendimiento excepcional que redefine los estándares de la industria.",
        specs: [
            "Procesador de última generación",
            "12GB RAM",
            "512GB almacenamiento",
            "Pantalla AMOLED 6.7\"",
            "Cámara triple 108MP",
            "Batería 5000mAh"
        ],
        features: [
            "Carga rápida 120W",
            "Resistente al agua IP68",
            "5G ultrarrápido",
            "Face ID avanzado"
        ]
    },
    2: {
        name: "Zima Air",
        price: 899,
        description: "Ultraligero y elegante. Perfecto para el día a día sin comprometer rendimiento.",
        specs: [
            "Procesador eficiente",
            "8GB RAM",
            "256GB almacenamiento",
            "Pantalla OLED 6.3\"",
            "Cámara dual 64MP",
            "Batería 4500mAh"
        ],
        features: [
            "Diseño premium",
            "Carga inalámbrica",
            "Ultra delgado 7mm"
        ]
    }
}

const ProductDetail = () => {
    const { id } = useParams()
    const product = PRODUCTS_DATA[id] || PRODUCTS_DATA[1]
    const { formatPrice } = useCurrency()

    const imageRef = useRef(null)
    const contentRef = useRef(null)
    const specsRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        tl.from(imageRef.current, {
            opacity: 0,
            x: -50,
            duration: 1
        })
            .from(contentRef.current, {
                opacity: 0,
                x: 50,
                duration: 1
            }, "<0.2")
            .from(specsRef.current, {
                opacity: 0,
                y: 30,
                duration: 1
            }, "<0.3")
    }, [])

    return (
        <div
            className="min-h-screen pt-32 pb-24 px-8"
            style={{ backgroundColor: `rgb(var(--background))` }}
        >
            <div className="max-w-7xl mx-auto">
                <Link
                    to="/tienda"
                    className="inline-flex items-center gap-2 mb-8 font-medium transition-colors"
                    style={{ color: `rgb(var(--muted-foreground))` }}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Volver a la tienda
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    <div
                        ref={imageRef}
                        className="aspect-square rounded-3xl flex items-center justify-center overflow-hidden"
                        style={{ backgroundColor: `rgb(var(--muted))` }}
                    >
                        <span
                            className="text-6xl font-bold"
                            style={{ color: `rgb(var(--muted-foreground))` }}
                        >
                            {product.name}
                        </span>
                    </div>

                    <div ref={contentRef} className="flex flex-col justify-center">
                        <h1
                            className="text-5xl md:text-6xl font-bold mb-4"
                            style={{ color: `rgb(var(--foreground))` }}
                        >
                            {product.name}
                        </h1>

                        <p
                            className="text-3xl font-bold mb-6"
                            style={{ color: `rgb(var(--primary))` }}
                        >
                            {formatPrice(product.price)}
                        </p>

                        <p
                            className="text-lg mb-8 leading-relaxed"
                            style={{ color: `rgb(var(--muted-foreground))` }}
                        >
                            {product.description}
                        </p>

                        <div className="flex gap-4 mb-8">
                            <button
                                className="flex-1 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                style={{
                                    backgroundColor: `rgb(var(--primary))`,
                                    color: `rgb(var(--primary-foreground))`
                                }}
                            >
                                Agregar al Carrito
                            </button>
                            <button
                                className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: `rgb(var(--secondary))`,
                                    color: `rgb(var(--secondary-foreground))`,
                                    border: `2px solid rgb(var(--border))`
                                }}
                            >
                                ♡
                            </button>
                        </div>

                        <div
                            className="p-6 rounded-2xl"
                            style={{
                                backgroundColor: `rgb(var(--card))`,
                                border: `1px solid rgb(var(--border))`
                            }}
                        >
                            <h3
                                className="font-bold mb-4 text-lg"
                                style={{ color: `rgb(var(--card-foreground))` }}
                            >
                                Características Destacadas
                            </h3>
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2"
                                        style={{ color: `rgb(var(--muted-foreground))` }}
                                    >
                                        <span style={{ color: `rgb(var(--primary))` }}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div ref={specsRef}>
                    <h2
                        className="text-3xl font-bold mb-8"
                        style={{ color: `rgb(var(--foreground))` }}
                    >
                        Especificaciones Técnicas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.specs.map((spec, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: `rgb(var(--card))`,
                                    border: `1px solid rgb(var(--border))`
                                }}
                            >
                                <p
                                    className="font-medium"
                                    style={{ color: `rgb(var(--card-foreground))` }}
                                >
                                    {spec}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
