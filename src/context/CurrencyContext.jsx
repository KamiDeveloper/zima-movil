import { createContext, useContext, useState, useEffect } from 'react'

const CurrencyContext = createContext(undefined)

export const CURRENCIES = {
    USD: 'USD',
    BOB: 'BOB'
}

export const CURRENCY_SYMBOLS = {
    [CURRENCIES.USD]: '$',
    [CURRENCIES.BOB]: 'Bs.'
}

export const CURRENCY_NAMES = {
    [CURRENCIES.USD]: 'Dólares',
    [CURRENCIES.BOB]: 'Bolivianos'
}

// Tasa de cambio: 1 USD = 13.5 BOB
export const EXCHANGE_RATE = 13.5

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState(() => {
        const savedCurrency = localStorage.getItem('zima-currency')
        return savedCurrency && Object.values(CURRENCIES).includes(savedCurrency)
            ? savedCurrency
            : CURRENCIES.USD
    })

    useEffect(() => {
        localStorage.setItem('zima-currency', currency)
    }, [currency])

    const toggleCurrency = () => {
        setCurrency(prev => prev === CURRENCIES.USD ? CURRENCIES.BOB : CURRENCIES.USD)
    }

    const changeCurrency = (newCurrency) => {
        if (Object.values(CURRENCIES).includes(newCurrency)) {
            setCurrency(newCurrency)
        }
    }

    const formatPrice = (priceInUSD) => {
        const price = currency === CURRENCIES.USD
            ? priceInUSD
            : priceInUSD * EXCHANGE_RATE

        const formattedPrice = price.toLocaleString('es-BO', {
            minimumFractionDigits: currency === CURRENCIES.BOB ? 2 : 0,
            maximumFractionDigits: currency === CURRENCIES.BOB ? 2 : 0
        })

        return `${CURRENCY_SYMBOLS[currency]}${formattedPrice}`
    }

    const convertPrice = (priceInUSD) => {
        return currency === CURRENCIES.USD
            ? priceInUSD
            : priceInUSD * EXCHANGE_RATE
    }

    const value = {
        currency,
        toggleCurrency,
        changeCurrency,
        formatPrice,
        convertPrice,
        symbol: CURRENCY_SYMBOLS[currency],
        name: CURRENCY_NAMES[currency],
        exchangeRate: EXCHANGE_RATE
    }

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () => {
    const context = useContext(CurrencyContext)
    if (context === undefined) {
        throw new Error('useCurrency must be used within a CurrencyProvider')
    }
    return context
}
