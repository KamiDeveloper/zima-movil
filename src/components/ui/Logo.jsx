/**
 * Logo Component
 * 
 * Componente de logo inline SVG que permite manipulación directa con CSS
 * Los colores se adaptan automáticamente a los temas definidos
 * 
 * Props:
 * @param {string} variant - 'full' (logo completo) o 'nameless' (logo sin nombre)
 * @param {string} className - Clases CSS adicionales
 * @param {string} width - Ancho del logo (por defecto se usa el className)
 * @param {string} height - Alto del logo (por defecto se usa el className)
 * 
 * Uso:
 * <Logo variant="full" className="w-32 h-32" />
 * <Logo variant="nameless" className="w-20 h-20" />
 */

const Logo = ({
    variant = 'full',
    className = '',
    width,
    height
}) => {
    const combinedClasses = `logo-svg ${className}`

    if (variant === 'nameless') {
        return (
            <svg
                className={combinedClasses}
                width={width}
                height={height}
                viewBox="0 0 508.3924 375.47736"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="ZimaMóvil Logo"
            >

                <defs id="defs1">
                    <path id="rect1" d="M28.991377 347.18942h464.56915v98.287842H28.991377z" />
                    <path id="rect5" d="M32.526913 343.6539h451.13412v89.802559H32.526913z" />
                    <path id="rect4" d="M33.23402 340.82547h453.25543v68.589355H33.23402z" />
                </defs>
                <g id="layer2" display="inline" transform="translate(-2.7234667 -21.72532)">
                    <path id="path1" fill="currentColor" stroke-width="1.11647" d="m256.55549 153.38177-98.57156 118.25361-37.52366-13.7879L2.7234667 396.84725l508.3923833.35544-115.7481-137.39268-41.40948 9.23481zm-7.2701 34.39014-2.50767 23.73358-11.68581 12.64745s-.26381.36017-.34889.62147c-.0851.2613-.11558.809-.11558.809l1.59184 27.85491s.0239.25963.0111.38814c-.0135.13399-.0915.39251-.0915.39251l-15.26635 34.17208 21.34148-10.73288s1.88563-.93195 2.72138-1.35415c1.03104-.52084 1.2582.29656 1.2582.29656 3.00859 24.57003-12.11843 32.01558-12.787 32.51702-.58399.43799-23.22865 18.34748-28.94956 22.87225 0 0-.75963 1.30131-1.30182 1.02923-.54219-.27206.0545-1.97779.0545-1.97779l.44702-15.57162-68.52953 37.10499 23.19061-31.13017c.00001 0 8.8637-10.82609 11.07306-24.69522.68787-4.31807.97328-8.68998 1.86223-11.31728.85338-2.52217 3.98831-6.73367 3.98831-6.73367zm137.65655 89.62677s-1.69672 14.42191 3.1902 35.45646l-25.17278-28.71842zm-262.78338 2.90673v13.62217l-1.56786 10.0918 4.3045 5.18108s1.1906 1.49608 1.1906 3.86619v8.54576l.31401 6.60066-6.95827-3.02886-8.65041-5.74587-40.997352 25.03323z" display="inline" />
                    <g id="g4" display="inline" transform="translate(101.36795 21.740321) scale(.37501768)">
                        <path id="path4" d="M812.16 504.1s53.44-60.1 133.53-59.36c80.09.74 139.53 68.26 139.53 68.26" class="cls-5" transform="translate(-524 -185.04)" />
                        <path id="path5" d="M721.43 432.8s106.44-109.48 225-109.48 222.81 108.09 222.81 108.09" class="cls-5" transform="translate(-524 -185.04)" />
                        <path id="path6" d="M638.25 370.44S765.65 216 938.63 216c182.59 0 298.31 151.33 298.31 151.33" class="cls-5" transform="translate(-524 -185.04)" />
                    </g>
                </g>
            </svg>
        )
    }

    // Logo completo (con nombre)
    return (
        <svg
            className={combinedClasses}
            width={width}
            height={height}
            viewBox="0 0 508.3924 470.84189"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="ZimaMóvil Logo Completo"
        >

            <defs id="defs1">
                <path id="rect1" d="M28.991377 347.18942h464.56915v98.287842H28.991377z" />
                <path id="rect5" d="M32.526913 343.6539h451.13412v89.802559H32.526913z" />
                <path id="rect4" d="M33.23402 340.82547h453.25543v68.589355H33.23402z" />
            </defs>
            <g id="layer2" display="inline" transform="translate(-2.7234667 -21.72532)">
                <path id="path1" fill="currentColor" stroke-width="1.11647" d="m256.55549 153.38177-98.57156 118.25361-37.52366-13.7879L2.7234667 396.84725l508.3923833.35544-115.7481-137.39268-41.40948 9.23481zm-7.2701 34.39014-2.50767 23.73358-11.68581 12.64745s-.26381.36017-.34889.62147c-.0851.2613-.11558.809-.11558.809l1.59184 27.85491s.0239.25963.0111.38814c-.0135.13399-.0915.39251-.0915.39251l-15.26635 34.17208 21.34148-10.73288s1.88563-.93195 2.72138-1.35415c1.03104-.52084 1.2582.29656 1.2582.29656 3.00859 24.57003-12.11843 32.01558-12.787 32.51702-.58399.43799-23.22865 18.34748-28.94956 22.87225 0 0-.75963 1.30131-1.30182 1.02923-.54219-.27206.0545-1.97779.0545-1.97779l.44702-15.57162-68.52953 37.10499 23.19061-31.13017c.00001 0 8.8637-10.82609 11.07306-24.69522.68787-4.31807.97328-8.68998 1.86223-11.31728.85338-2.52217 3.98831-6.73367 3.98831-6.73367zm137.65655 89.62677s-1.69672 14.42191 3.1902 35.45646l-25.17278-28.71842zm-262.78338 2.90673v13.62217l-1.56786 10.0918 4.3045 5.18108s1.1906 1.49608 1.1906 3.86619v8.54576l.31401 6.60066-6.95827-3.02886-8.65041-5.74587-40.997352 25.03323z" display="inline" />
                <g id="g4" display="inline" transform="translate(101.36795 21.740321) scale(.37501768)">
                    <path id="path4" d="M812.16 504.1s53.44-60.1 133.53-59.36c80.09.74 139.53 68.26 139.53 68.26" className="cls-5" transform="translate(-524 -185.04)" />
                    <path id="path5" d="M721.43 432.8s106.44-109.48 225-109.48 222.81 108.09 222.81 108.09" className="cls-5" transform="translate(-524 -185.04)" />
                    <path id="path6" d="M638.25 370.44S765.65 216 938.63 216c182.59 0 298.31 151.33 298.31 151.33" className="cls-5" transform="translate(-524 -185.04)" />
                </g>
                <text
                    xmlSpace="preserve"
                    id="logotext"
                    fill="currentColor"
                    direction="ltr"
                    display="inline"
                    fontSize="85.3333"
                    style={{ textAlign: 'start', whiteSpace: 'pre', shapeInside: 'url(#rect1)' }}
                    transform="translate(-32.685017 16.617096) scale(1.116464)"
                    writingMode="lr-tb"
                >
                    <tspan id="tspan4" x="28.992188" y="425.61873">
                        <tspan
                            id="tspan3"
                            fill="currentColor"
                            fontFamily="Montserrat"
                            fontWeight="700"
                            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                        >
                            ZimaMóvil
                        </tspan>
                    </tspan>
                </text>
            </g>
        </svg>
    )
}

export default Logo
