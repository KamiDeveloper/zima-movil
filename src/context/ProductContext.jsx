import { createContext, useContext, useState, useMemo } from 'react'
import {
    PRODUCTS_DATABASE,
    CATEGORIES,
    getProductById,
    getFeaturedProducts,
    getProductsByCategory,
    searchProducts
} from '../data/products'

// Crear el contexto
const ProductContext = createContext()

// Hook personalizado para usar el contexto
export const useProducts = () => {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error('useProducts debe ser usado dentro de ProductProvider')
    }
    return context
}

// Provider del contexto
export const ProductProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')

    // Obtener todos los productos
    const allProducts = useMemo(() => PRODUCTS_DATABASE, [])

    // Obtener productos filtrados por categoría
    const filteredProducts = useMemo(() => {
        if (searchQuery) {
            return searchProducts(searchQuery)
        }
        return getProductsByCategory(selectedCategory)
    }, [selectedCategory, searchQuery])

    // Obtener productos destacados
    const featuredProducts = useMemo(() => getFeaturedProducts(), [])

    // Obtener categorías
    const categories = useMemo(() => CATEGORIES, [])

    // Función para obtener un producto por ID
    const getProduct = (id) => {
        return getProductById(id)
    }

    // Función para cambiar categoría
    const selectCategory = (category) => {
        setSelectedCategory(category)
        setSearchQuery('') // Limpiar búsqueda al cambiar categoría
    }

    // Función para buscar
    const search = (query) => {
        setSearchQuery(query)
        setSelectedCategory('all') // Buscar en todas las categorías
    }

    // Función para limpiar búsqueda
    const clearSearch = () => {
        setSearchQuery('')
    }

    const value = {
        // Datos
        allProducts,
        filteredProducts,
        featuredProducts,
        categories,
        selectedCategory,
        searchQuery,

        // Funciones
        getProduct,
        selectCategory,
        search,
        clearSearch
    }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext
