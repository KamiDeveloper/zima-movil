// Base de datos centralizada de productos
export const PRODUCTS_DATABASE = [
    {
        id: 1,
        name: "Infinix Hot 60 Pro Plus",
        price: 170,
        category: "smartphones",
        description: "Destacado por ser el más Delgado del Mundo con Pantalla Curva AMOLED 3D, IA Avanzada y un Rendimiento Excepcional.",
        image: "/assets/images/products/infinix-hot-60.jpg",
        video: "/assets/videos/products/infinix-hot-60.mp4",
        gallery: ["/assets/images/products/infinix-hot-60.jpg",],
        featured: true,
        inStock: true,
        specs: [
            "Pantalla Curva AMOLED 3D 6.78\"",
            "Procesador MediaTek Dimensity",
            "12GB RAM + 256GB Storage",
            "Cámara Triple 108MP",
            "Batería 5000mAh con carga rápida 45W",
            "5G ultrarrápido"
        ],
        features: [
            "El smartphone más delgado del mundo",
            "IA avanzada integrada",
            "Diseño premium con acabado metálico",
            "Resistente al agua IP54"
        ]
    },
    {
        id: 2,
        name: "Realme Buds T110",
        price: 23,
        category: "audio",
        description: "Auriculares Inalámbricos que Ofrecen una Batería de Larga Duración, Baja Latencia para Juegos y Resistencia a Salpicaduras.",
        image: "/assets/images/products/realme-buds-t110.jpg",
        video: null, // Ruta: /assets/videos/products/realme-buds-t110.mp4
        gallery: ["/assets/images/products/realme-buds-t110.jpg",], // Array de imágenes adicionales
        featured: true,
        inStock: true,
        specs: [
            "Bluetooth 5.3",
            "Batería hasta 38 horas",
            "Drivers dinámicos 10mm",
            "Resistencia IPX5",
            "Baja latencia 88ms",
            "Controles táctiles"
        ],
        features: [
            "Modo Gaming con baja latencia",
            "Resistente a salpicaduras IPX5",
            "Estuche de carga compacto",
            "Conexión instantánea"
        ]
    },
    {
        id: 3,
        name: "Redmi Buds 6 Lite",
        price: 20,
        category: "audio",
        description: "Compacto pero poderoso. Auriculares inalámbricos de Xiaomi que ofrecen cancelación de ruido activa (ANC) son una opción ideal para uso diario y deporte.",
        image: "/assets/images/products/redmi-buds-6-lite.jpg",
        video: null, // Ruta: /assets/videos/products/redmi-buds-6-lite.mp4
        gallery: ["/assets/images/products/redmi-buds-6-lite.jpg",], // Array de imágenes adicionales
        featured: true,
        inStock: true,
        specs: [
            "Cancelación de ruido ANC",
            "Bluetooth 5.3",
            "Batería hasta 38 horas",
            "Drivers 12mm",
            "Resistencia IPX4",
            "Audio de alta fidelidad"
        ],
        features: [
            "ANC hasta 35dB de reducción",
            "Modo transparencia",
            "Ideal para deportes",
            "Ajuste ergonómico"
        ]
    },
    {
        id: 4,
        name: "Band 6",
        price: 15,
        category: "wearables",
        description: "Reloj inteligente con funciones avanzadas de salud y fitness. Monitoreo 24/7 de frecuencia cardíaca, sueño y más de 30 modos deportivos.",
        image: null, // Ruta: /assets/images/products/band-6.jpg
        video: null, // Ruta: /assets/videos/products/band-6.mp4
        gallery: [], // Array de imágenes adicionales
        featured: true,
        inStock: true,
        specs: [
            "Pantalla AMOLED 1.56\"",
            "Batería hasta 14 días",
            "Resistente al agua 5ATM",
            "Sensor de frecuencia cardíaca",
            "SpO2 (saturación de oxígeno)",
            "Más de 30 modos deportivos"
        ],
        features: [
            "Monitoreo de sueño avanzado",
            "Notificaciones inteligentes",
            "Control de música",
            "Seguimiento menstrual"
        ]
    },
    {
        id: 5,
        name: "Buds Pro",
        price: 39,
        category: "audio",
        description: "Audio premium con cancelación de ruido activa. Experiencia sonora inmersiva con controladores de alta fidelidad.",
        image: null, // Ruta: /assets/images/products/buds-pro.jpg
        video: null, // Ruta: /assets/videos/products/buds-pro.mp4
        gallery: [], // Array de imágenes adicionales
        featured: true,
        inStock: true,
        specs: [
            "ANC híbrido avanzado",
            "Drivers de 11mm",
            "Bluetooth 5.2 con LDAC",
            "Batería hasta 28 horas",
            "Carga inalámbrica Qi",
            "Resistencia IPX5"
        ],
        features: [
            "Cancelación de ruido hasta 40dB",
            "Audio espacial 3D",
            "Modo ambiente adaptativo",
            "Carga rápida: 10 min = 3 horas"
        ]
    },
    {
        id: 6,
        name: "Tablet Pro 11",
        price: 499,
        category: "tablets",
        description: "Productividad y entretenimiento en pantalla grande. Perfecta para trabajo, estudio y multimedia.",
        image: null, // Ruta: /assets/images/products/tablet-pro-11.jpg
        video: null, // Ruta: /assets/videos/products/tablet-pro-11.mp4
        gallery: [], // Array de imágenes adicionales
        featured: false,
        inStock: true,
        specs: [
            "Pantalla LCD 11\" 2K 120Hz",
            "Procesador Snapdragon 870",
            "8GB RAM + 256GB Storage",
            "Batería 8720mAh",
            "4 altavoces Dolby Atmos",
            "Stylus pen compatible"
        ],
        features: [
            "Tasa de refresco 120Hz",
            "Modo de lectura",
            "Split screen multitarea",
            "Certificación TÜV (cuidado ocular)"
        ]
    },
    {
        id: 7,
        name: "Cover Pro",
        price: 9,
        category: "accesorios",
        description: "Protección premium para tu dispositivo. Diseño elegante con materiales de alta calidad.",
        image: null, // Ruta: /assets/images/products/cover-pro.jpg
        video: null, // Ruta: /assets/videos/products/cover-pro.mp4
        gallery: [], // Array de imágenes adicionales
        featured: false,
        inStock: true,
        specs: [
            "Material TPU + PC",
            "Protección militar MIL-STD-810G",
            "Bordes elevados para pantalla",
            "Botones de precisión",
            "Compatible con carga inalámbrica",
            "Antideslizante"
        ],
        features: [
            "Absorción de impactos",
            "Diseño slim y ligero",
            "Acabado mate premium",
            "Fácil instalación"
        ]
    },
    {
        id: 8,
        name: "Charger Fast 65W",
        price: 5,
        category: "accesorios",
        description: "Carga rápida de alta potencia. Compatible con múltiples dispositivos y protocolos de carga.",
        image: null, // Ruta: /assets/images/products/charger-fast-65w.jpg
        video: null, // Ruta: /assets/videos/products/charger-fast-65w.mp4
        gallery: [], // Array de imágenes adicionales
        featured: false,
        inStock: true,
        specs: [
            "Potencia 65W",
            "USB-C PD 3.0",
            "GaN Technology",
            "Protección múltiple",
            "Voltaje 100-240V",
            "Cable USB-C incluido 1m"
        ],
        features: [
            "Carga múltiples dispositivos",
            "Compacto y portátil",
            "Protección contra sobrecalentamiento",
            "Certificación de seguridad"
        ]
    },
    {
        id: 9,
        name: "Cable Premium USB-C",
        price: 2.5,
        category: "accesorios",
        description: "Cable de alta durabilidad y velocidad. Diseñado para durar con materiales premium.",
        image: null, // Ruta: /assets/images/products/cable-usbc.jpg
        video: null, // Ruta: /assets/videos/products/cable-usbc.mp4
        gallery: [], // Array de imágenes adicionales
        featured: false,
        inStock: true,
        specs: [
            "Longitud 1.2 metros",
            "USB-C to USB-C",
            "Carga rápida 100W",
            "Transferencia 480Mbps",
            "Refuerzo de kevlar",
            "10000+ ciclos de flexión"
        ],
        features: [
            "Trenzado de nylon premium",
            "Conectores reforzados",
            "Compatible con PD/QC",
            "Garantía extendida"
        ]
    },
    {
        id: 10,
        name: "Screen Protector Ultra",
        price: 2,
        category: "accesorios",
        description: "Protección de pantalla con tecnología anti-rayado. Claridad HD y sensibilidad táctil preservada.",
        image: null, // Ruta: /assets/images/products/screen-protector.jpg
        video: null, // Ruta: /assets/videos/products/screen-protector.mp4
        gallery: [], // Array de imágenes adicionales
        featured: false,
        inStock: true,
        specs: [
            "Vidrio templado 9H",
            "Grosor 0.33mm",
            "Transparencia 99.9%",
            "Recubrimiento oleofóbico",
            "Bordes redondeados 2.5D",
            "Kit de instalación incluido"
        ],
        features: [
            "Resistente a rayones",
            "Fácil instalación sin burbujas",
            "Compatible con fundas",
            "Sensibilidad táctil 100%"
        ]
    }
]

// Categorías disponibles
export const CATEGORIES = [
    { id: 'all', name: 'Todos', slug: 'todos' },
    { id: 'smartphones', name: 'Smartphones', slug: 'smartphones' },
    { id: 'audio', name: 'Audio', slug: 'audio' },
    { id: 'wearables', name: 'Wearables', slug: 'wearables' },
    { id: 'tablets', name: 'Tablets', slug: 'tablets' },
    { id: 'accesorios', name: 'Accesorios', slug: 'accesorios' }
]

// Función helper para obtener producto por ID
export const getProductById = (id) => {
    return PRODUCTS_DATABASE.find(product => product.id === parseInt(id))
}

// Función helper para obtener productos destacados
export const getFeaturedProducts = () => {
    return PRODUCTS_DATABASE.filter(product => product.featured)
}

// Función helper para obtener productos por categoría
export const getProductsByCategory = (category) => {
    if (category === 'all' || !category) return PRODUCTS_DATABASE
    return PRODUCTS_DATABASE.filter(product => product.category === category)
}

// Función helper para buscar productos
export const searchProducts = (query) => {
    const searchTerm = query.toLowerCase()
    return PRODUCTS_DATABASE.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    )
}
