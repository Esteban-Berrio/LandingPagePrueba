# Landing Page - Portafolio de Tatuador

Una landing page moderna, visual y profesional para un tatuador, creada con React, TypeScript, Tailwind CSS y Vite.

## Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

## Instalación

1. Navega a la carpeta del proyecto:
```bash
cd C:\Users\yo\Desktop\LandingPageCarlos
```

2. Instala las dependencias:
```bash
npm install
```

## Ejecutar en Desarrollo

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

La página estará disponible en `http://localhost:5173`

## Build de Producción

Para generar los archivos de producción:
```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/`

## Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.tsx         # Navegación fija con menú hamburguesa
│   ├── Hero.tsx           # Sección principal con impacto visual
│   ├── About.tsx          # Información sobre el tatuador
│   ├── TattooStyles.tsx   # Estilos de tatuaje que ofrece
│   ├── Portfolio.tsx      # Galería con filtros y lightbox
│   ├── Process.tsx        # Proceso de reserva
│   ├── Testimonials.tsx   # Testimonios de clientes
│   ├── SocialLinks.tsx     # Enlaces a redes sociales
│   ├── Contact.tsx        # Sección de contacto
│   ├── Footer.tsx         # Pie de página
│   └── WhatsAppButton.tsx # Botón flotante de WhatsApp
│
├── config/
│   └── artist.ts          # ⚠️ EDITAR: Configuración principal del tatuador
│
├── assets/
│   ├── artist/
│   │   └── artist.jpg     # ⚠️ REEMPLAZAR: Foto del tatuador
│   ├── tattoos/
│   │   ├── tattoo-01.jpg  # ⚠️ REEMPLAZAR: Imagen de tatuaje
│   │   ├── tattoo-02.jpg  # ⚠️ REEMPLAZAR: Imagen de tatuaje
│   │   ├── tattoo-03.jpg  # ⚠️ REEMPLAZAR: Imagen de tatuaje
│   │   ├── tattoo-04.jpg  # ⚠️ REEMPLAZAR: Imagen de tatuaje
│   │   ├── tattoo-05.jpg  # ⚠️ REEMPLAZAR: Imagen de tatuaje
│   │   └── tattoo-06.jpg  # ⚠️ REEMPLAZAR: Imagen de tatuaje
│   └── logo/
│       └── logo.png      # ⚠️ REEMPLAZAR: Logo del tatuador
│
├── App.tsx
├── main.tsx
└── index.css
```

## Personalización

### 1. Cambiar Datos del Tatuador

Edita el archivo `src/config/artist.ts`:

```typescript
export const artist = {
  name: "TU NOMBRE",
  artisticName: "TU NOMBRE ARTÍSTICO",
  profession: "Tattoo Artist",
  city: "TU CIUDAD",
  country: "TU PAÍS",
  description: "Tu descripción aquí...",
  shortDescription: "Tu frase corta aquí...",
  yearsExperience: 5,
  tattoosDone: 500,
  whatsapp: "57XXXXXXXXXX",  // ⚠️ CAMBIAR: Tu número de WhatsApp
  email: "tu@email.com",
  workingHours: "Lunes a Sábado, 10:00 AM - 8:00 PM",
};
```

### 2. Cambiar Número de WhatsApp

Edita `whatsapp` en `src/config/artist.ts`:

```typescript
whatsapp: "57XXXXXXXXXX",  // Formato: código país + número
```

### 3. Cambiar Redes Sociales

Edita `socialLinks` en `src/config/artist.ts`:

```typescript
export const socialLinks = {
  instagram: "https://instagram.com/TU_USUARIO",
  facebook: "https://facebook.com/TU_USUARIO",
  tiktok: "https://tiktok.com/@TU_USUARIO",
};
```

### 4. Cambiar Imágenes

Reemplaza las imágenes placeholder en:
- `src/assets/artist/artist.jpg` - Foto del tatuador
- `src/assets/tattoos/` - Carpeta con fotos de tatuajes
- `src/assets/logo/` - Logo del tatuador

### 5. Cambiar Estilos de Tatuaje

Edita el array `tattooStyles` en `src/config/artist.ts`:

```typescript
export const tattooStyles = [
  {
    id: "blackwork",
    name: "Blackwork",
    description: "Descripción del estilo...",
    image: "/src/assets/tattoos/tattoo-01.jpg",
  },
  // Agregar más estilos...
];
```

### 6. Cambiar Testimonios

Edita el array `testimonials` en `src/config/artist.ts`:

```typescript
export const testimonials = [
  {
    id: 1,
    name: "NOMBRE DEL CLIENTE",
    comment: "Comentario del cliente...",
    rating: 5,
  },
  // Agregar más testimonios...
];
```

### 7. Cambiar Proceso de Trabajo

Edita el array `processSteps` en `src/config/artist.ts`:

```typescript
export const processSteps = [
  {
    number: "01",
    title: "Paso 1",
    description: "Descripción del paso...",
  },
  // Agregar más pasos...
];
```

### 8. Cambiar Color de Acento

El color de acento está definido en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      accent: {
        DEFAULT: '#e63946',  // ⚠️ CAMBIAR: Tu color preferido
        hover: '#d62839',
      }
    },
  },
},
```

Colores sugeridos para tatuadores:
- Rojo oscuro: `#e63946`
- Naranja: `#f97316`
- Amarillo dorado: `#eab308`
- Verde: `#22c55e`

## Tecnologías Utilizadas

- **React** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Vite** - Herramienta de build
- **Lucide React** - Iconos

## Notas Importantes

- Todas las imágenes usan rutas locales (no URLs externas)
- El botón de WhatsApp abre chat con mensaje predefinido
- La galería tiene filtros por estilo de tatuaje
- El diseño es completamente responsive (móvil, tablet, escritorio)
- El menú hamburguesa aparece en pantallas pequeñas
- Animaciones suaves con hover effects

## Estructura de Secciones

1. **Navbar** - Navegación sticky con logo y menú
2. **Hero** - Impacto visual con foto grande y CTAs
3. **Sobre mí** - Información del tatuador con estadísticas
4. **Estilos** - Grid de estilos de tatuaje
5. **Portafolio** - Galería con filtros y lightbox
6. **Proceso** - 4 pasos para reservar un tatuaje
7. **Testimonios** - 3 testimonios de clientes
8. **Redes Sociales** - Enlaces a Instagram, Facebook, TikTok
9. **Contacto** - Información de contacto y botón de WhatsApp
10. **Footer** - Logo, redes y copyright
11. **WhatsApp Button** - Botón flotante siempre visible
