import ProductCard from '../components/ui/ProductCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useProducts } from '../context/ProductContext'

const Shop = () => {
    const { filteredProducts, categories, selectedCategory, selectCategory } = useProducts()
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
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => selectCategory(category.id)}
                            className="px-6 py-3 rounded-full font-medium transition-all duration-300"
                            style={{
                                backgroundColor: selectedCategory === category.id
                                    ? `rgb(var(--primary))`
                                    : `rgb(var(--secondary))`,
                                color: selectedCategory === category.id
                                    ? `rgb(var(--primary-foreground))`
                                    : `rgb(var(--secondary-foreground))`,
                                border: `1px solid rgb(var(--border))`
                            }}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProducts.map((product) => (
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
