import { useCurrency } from '../../context/CurrencyContext'

const CurrencySwitcher = () => {
    const { currency, toggleCurrency, symbol, name } = useCurrency()

    return (
        <button
            onClick={toggleCurrency}
            className="px-4 py-2 rounded-lg font-medium text-sm cursor-pointer transition-all duration-200 flex items-center gap-2 hover:scale-105"
            style={{
                backgroundColor: `rgb(var(--card))`,
                color: `rgb(var(--card-foreground))`,
                border: `1px solid rgb(var(--border))`
            }}
            aria-label={`Cambiar moneda. Actual: ${name}`}
        >
            <span className="font-bold">{symbol}</span>
            <span className="text-xs opacity-70">{currency}</span>
            <svg
                className="w-4 h-4 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
            </svg>
        </button>
    )
}

export default CurrencySwitcher
