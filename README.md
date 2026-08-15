# 🚀 Portafolio de Luis Anderson - Ingeniero de Sistemas

¡Bienvenido al repositorio de mi portafolio personal! Este proyecto fue construido con un enfoque en alto rendimiento, código limpio y animaciones fluidas.

## 🛠 Tecnologías Utilizadas
- **React 19** + **Vite** (Ultra rápido)
- **Framer Motion** (Animaciones físicas avanzadas y rebotes)
- **Lucide React** (Íconos escalables)
- **CSS3** (Variables, Keyframes, Glassmorphism y aceleración por hardware)

## ✨ Características Principales
- **Zero Lag Architecture**: Barra de navegación y *scroll progress* aislados para no saturar el renderizado principal, logrando 60 FPS estables.
- **Partículas Optimizadas**: Sistema de fondo *React.memo*izado para evitar pérdida de memoria.
- **Diseño Glassmorphism**: Tarjetas con aspecto de cristal y fondos reactivos al *hover*.
- **Capa de Datos Separada**: La información (proyectos, habilidades) está separada de los componentes UI (`src/data`), manteniendo el código limpio y fácil de mantener.
- **Bot Asistente Virtual**: Una interfaz simulada de chatbot con respuestas animadas.
- **Responsive Web Design**: Se adapta perfectamente a monitores Ultrawide y teléfonos móviles.

## 📦 Cómo Correrlo Localmente

```bash
# 1. Instalar las dependencias
npm install

# 2. Ejecutar el servidor de desarrollo en tiempo real
npm run dev

# 3. Construir para producción (Genera la carpeta /dist lista para GitHub Pages o Cloudflare)
npm run build
```

## 🌐 Despliegue
Este repositorio está preparado para ser desplegado fácilmente en **GitHub Pages** o **Cloudflare Pages**. La configuración de `vite.config.js` ya cuenta con `base: './'` para funcionar con cualquier sub-ruta en la que se instale.

---
*Desarrollado con pasión por el código, el diseño y las buenas prácticas.*
