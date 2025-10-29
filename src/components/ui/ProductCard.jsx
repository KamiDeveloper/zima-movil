import { Link } from 'react-router-dom'
import { useCurrency } from '../../context/CurrencyContext'

const ProductCard = ({
    id,
    name,
    price,
    image,
    description,
    featured = false,
    colSpan = 1,
    rowSpan = 1
}) => {
    const gridClasses = `col-span-${colSpan} row-span-${rowSpan}`
    const { formatPrice } = useCurrency()

    return (
        <Link
            to={`/producto/${id}`}
            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] ${gridClasses}`}
            style={{
                backgroundColor: `rgb(var(--card))`,
                border: `1px solid rgb(var(--border))`
            }}
        >
            <div className="relative h-full flex flex-col p-6">
                {featured && (
                    <span
                        className="absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full z-10"
                        style={{
                            backgroundColor: `rgb(var(--primary))`,
                            color: `rgb(var(--primary-foreground))`
                        }}
                    >
                        Destacado
                    </span>
                )}

                <div className="flex-1 flex items-center justify-center mb-6 overflow-hidden">
                    {image ? (
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    ) : (
                        <div
                            className="w-full h-48 flex items-center justify-center rounded-lg"
                            style={{ backgroundColor: `rgb(var(--muted))` }}
                        >
                            <span style={{ color: `rgb(var(--muted-foreground))` }}>
                                Sin imagen
                            </span>
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <h3
                        className="text-xl font-bold tracking-tight group-hover:translate-x-1 transition-transform duration-300"
                        style={{ color: `rgb(var(--card-foreground))` }}
                    >
                        {name}
                    </h3>

                    {description && (
                        <p
                            className="text-sm line-clamp-2"
                            style={{ color: `rgb(var(--muted-foreground))` }}
                        >
                            {description}
                        </p>
                    )}

                    <div className="flex items-center justify-between pt-2">
                        <span
                            className="text-2xl font-bold"
                            style={{ color: `rgb(var(--primary))` }}
                        >
                            {formatPrice(price)}
                        </span>
                        <button
                            className="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg"
                            style={{
                                backgroundColor: `rgb(var(--primary))`,
                                color: `rgb(var(--primary-foreground))`
                            }}
                            onClick={(e) => {
                                e.preventDefault()
                                console.log('Agregar al carrito:', id)
                            }}
                        >
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
