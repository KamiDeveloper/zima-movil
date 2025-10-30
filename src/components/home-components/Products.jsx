import ProductCard from "../ui/ProductCard"
import FeaturedProductCard from "../ui/FeaturedProductCard"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { useProducts } from "../../context/ProductContext"

const Products = () => {
    const { featuredProducts } = useProducts()
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
                        <FeaturedProductCard {...featuredProducts[0]} showVideo={true} colSpan={2} rowSpan={2} />
                    </div>

                    <div className="product-card col-span-1 md:col-span-1 lg:col-span-1">
                        <ProductCard {...featuredProducts[1]} />
                    </div>

                    <div className="product-card col-span-1 md:col-span-1 lg:col-span-1">
                        <ProductCard {...featuredProducts[2]} />
                    </div>

                    <div className="product-card col-span-1 md:col-span-1 lg:col-span-1">
                        <ProductCard {...featuredProducts[3]} />
                    </div>

                    <div className="product-card col-span-1 md:col-span-1 lg:col-span-1">
                        <ProductCard {...featuredProducts[4]} />
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