import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        productos: [
            { name: 'Smartphones', path: '/tienda' },
            { name: 'Tablets', path: '/tienda' },
            { name: 'Wearables', path: '/tienda' },
            { name: 'Accesorios', path: '/tienda' }
        ],
        soporte: [
            { name: 'Centro de Ayuda', path: '#' },
            { name: 'Garantía', path: '#' },
            { name: 'Contacto', path: '#' }
        ],
        legal: [
            { name: 'Privacidad', path: '#' },
            { name: 'Términos', path: '#' },
            { name: 'Cookies', path: '#' },
            { name: 'Legal', path: '#' }
        ]
    }

    return (
        <footer
            className="py-16 px-8 border-t"
            style={{
                backgroundColor: `rgb(var(--background))`,
                borderColor: `rgb(var(--border))`
            }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    <div className="lg:col-span-1">
                        <h3
                            className="text-2xl font-bold mb-4"
                            style={{ color: `rgb(var(--foreground))` }}
                        >
                            ZimaMóvil
                        </h3>
                        <p
                            className="text-sm leading-relaxed"
                            style={{ color: `rgb(var(--muted-foreground))` }}
                        >
                            Innovación y diseño al alcance de tu mano.
                            Dispositivos premium para una experiencia excepcional.
                        </p>
                    </div>

                    <div>
                        <h4
                            className="font-bold mb-4"
                            style={{ color: `rgb(var(--foreground))` }}
                        >
                            Productos
                        </h4>
                        <ul className="space-y-2">
                            {footerLinks.productos.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: `rgb(var(--muted-foreground))` }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4
                            className="font-bold mb-4"
                            style={{ color: `rgb(var(--foreground))` }}
                        >
                            Soporte
                        </h4>
                        <ul className="space-y-2">
                            {footerLinks.soporte.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: `rgb(var(--muted-foreground))` }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>



                    <div>
                        <h4
                            className="font-bold mb-4"
                            style={{ color: `rgb(var(--foreground))` }}
                        >
                            Legal
                        </h4>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: `rgb(var(--muted-foreground))` }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div
                    className="pt-8 border-t text-center"
                    style={{ borderColor: `rgb(var(--border))` }}
                >
                    <p
                        className="text-sm"
                        style={{ color: `rgb(var(--muted-foreground))` }}
                    >
                        &copy; {currentYear} ZimaMóvil. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer