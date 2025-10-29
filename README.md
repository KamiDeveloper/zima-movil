# 🚗 Zima Móvil

E-commerce moderno y de alta gama para la venta de vehículos, desarrollado con React, Vite y Tailwind CSS.

## 📁 Estructura del Proyecto

```
zima-movil/
├── public/
│   └── assets/
│       ├── fonts/          # Fuentes personalizadas
│       └── images/         # Imágenes y recursos estáticos
├── src/
│   ├── components/
│   │   ├── ui/             # Componentes reutilizables
│   │   │   ├── Logo.jsx
│   │   │   ├── ThemeSwitcher.jsx
│   │   │   ├── CurrencySwitcher.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── home-components/
│   │   │   ├── Hero.jsx
│   │   │   ├── Products.jsx
│   │   │   └── Footer.jsx
│   │   └── NavBar.jsx
│   ├── context/
│   │   ├── ThemeContext.jsx      # Sistema de temas global
│   │   └── CurrencyContext.jsx   # Sistema de monedas global
│   ├── layout/
│   │   └── RootLayout.jsx        # Layout principal con Lenis
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── eslint.config.js
├── vite.config.js
├── package.json
└── README.md
```

## ✨ Funcionalidades

### 🎨 Sistema de Temas

- **4 temas disponibles:**
  - Light (Claro)
  - Dark (Oscuro)
  - Solarized (Alternativo claro)
  - Mint (Alternativo claro 2)
- Persistencia con `localStorage`
- Variables CSS dinámicas en formato RGB
- Adaptación automática de todos los componentes

### 💱 Sistema de Monedas

- **Conversión automática USD ↔ BOB**
- Tasa de cambio: **1 USD = 13.5 BOB**
- Toggle visual en la barra de navegación
- Persistencia con `localStorage`
- Formateo automático de precios en todos los componentes

### 🎬 Animaciones

- **GSAP 3.13.0** con ScrollTrigger
- **Lenis** para scroll suave
- Efectos parallax en Hero
- Animaciones de entrada en productos
- Transiciones fluidas entre páginas

### 🛍️ E-commerce

- Página de inicio con Hero y productos destacados
- Catálogo completo con filtros
- Vista detallada de productos
- Tarjetas de producto con hover effects
- Footer con información de contacto

### 🧭 Navegación

- **React Router DOM 7.9.4**
- Barra de navegación responsive
- Logo SVG inline con adaptación a temas
- Enlaces principales: Inicio, Tienda
- Controles de tema y moneda integrados

## 🚀 Instalación

### Requisitos Previos

- **Node.js** 18+ o **Bun** 1.0+
- npm, yarn o bun

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/KamiDeveloper/zima-movil.git
   cd zima-movil
   ```

2. **Instalar dependencias**

   Con npm:

   ```bash
   npm install
   ```

   Con yarn:

   ```bash
   yarn install
   ```

   Con bun:

   ```bash
   bun install
   ```

3. **Iniciar el servidor de desarrollo**

   Con npm:

   ```bash
   npm run dev
   ```

   Con yarn:

   ```bash
   yarn dev
   ```

   Con bun:

   ```bash
   bun run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera el build de producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta el linter ESLint

## 📦 Tecnologías Principales

- **React 19.1.1** - Biblioteca UI
- **Vite (Rolldown)** - Build tool ultra-rápido
- **Tailwind CSS 4.1.16** - Framework CSS
- **GSAP 3.13.0** - Animaciones avanzadas
- **Lenis 1.3.13** - Smooth scrolling
- **React Router DOM 7.9.4** - Enrutamiento

## 🎯 Próximas Funcionalidades

- [ ] Carrito de compras funcional
- [ ] Sistema de autenticación (Login/Signup)
- [ ] Integración con backend
- [ ] Imágenes reales de productos
- [ ] Sistema de búsqueda
- [ ] Filtros avanzados en el catálogo

## 📄 Licencia

Este proyecto es privado y pertenece a Zima Móvil.

---

Desarrollado con ❤️ por KamiDeveloper.
