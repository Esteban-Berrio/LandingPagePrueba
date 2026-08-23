export const artist = {
  name: "Carlos Ruales",
  artisticName: "Tatto Artist",
  profession: "Tattoo Artist",
  city: "Palmira",
  country: "Colombia",
  description: "Transformo ideas y experiencias en arte permanente. Cada tatuaje cuenta una historia, y mi objetivo es que la tuya quede plasmada con precisión y estilo.",
  shortDescription: "Tinta, precisión y arte que cuenta tu historia.",
  yearsExperience: 5,
  tattoosDone: 500,
  whatsapp: "3182362219",
  email: "BodyArtTattoos@gmail.com",
  workingHours: "Lunes a Sábado, 10:00 AM - 8:00 PM",
};

export const socialLinks = {
  instagram: "https://www.instagram.com/estebanweonado/",
  facebook: "https://www.instagram.com/estebanweonado/",
  tiktok: "https://www.instagram.com/estebanweonado/",
};

export const whatsappMessage = encodeURIComponent(
  "Hola, vi tu portafolio y me gustaría consultar sobre un tatuaje."
);

export const whatsappLink = `https://wa.me/${artist.whatsapp}?text=${whatsappMessage}`;

export const tattooStyles = [
  {
    id: "blackwork",
    name: "Blackwork",
    description: "Diseño audaz con tinta negra, perfecto para piezas statement.",
    image: "src/assets/tattoos/blackwork.jpg", 
  },
  {
    id: "realism",
    name: "Realismo",
    description: "Tatuajes que capturan cada detalle con precisión fotográfica.",
    image: "/src/assets/tattoos/realismo.jpg",
  },
  {
    id: "fineline",
    name: "Fine Line",
    description: "Líneas delicadas y precisas para diseños minimalistas.",
    image: "/src/assets/tattoos/fineline.webp",
  },
  {
    id: "lettering",
    name: "Lettering",
    description: "Tipografías personalizadas para tus frases favoritas.",
    image: "/src/assets/tattoos/letering.jpg",
  },
  {
    id: "geometric",
    name: "Geométrico",
    description: "Patrones geométricos que combinan arte y matemáticas.",
    image: "/src/assets/tattoos/geometrico.jpg",
  },
  {
    id: "anime",
    name: "Anime/Manga",
    description: "Dale vida a tus personajes favoritos del anime.",
    image: "/src/assets/tattoos/anime.jpg",
  },
];

export const portfolioImages = [
  {
    id: 1,
    src: "/src/assets/tattoos/tattoo-01.jpg",
    style: "blackwork",
    title: "Blackwork Sleeve",
    description: "Diseño completo de manga",
  },
  {
    id: 2,
    src: "/src/assets/tattoos/tattoo-02.jpg",
    style: "realism",
    title: "Retrato Realista",
    description: "Retrato en blanco y negro",
  },
  {
    id: 3,
    src: "/src/assets/tattoos/tattoo-03.jpg",
    style: "fineline",
    title: "Flores Fine Line",
    description: "Diseño delicado floral",
  },
  {
    id: 4,
    src: "/src/assets/tattoos/tattoo-04.jpg",
    style: "lettering",
    title: "Lettering Custom",
    description: "Frase personalizada",
  },
  {
    id: 5,
    src: "/src/assets/tattoos/tattoo-05.jpg",
    style: "geometric",
    title: "Mandala Geométrico",
    description: "Patrón matemático",
  },
  {
    id: 6,
    src: "/src/assets/tattoos/tattoo-06.jpg",
    style: "anime",
    title: "Personaje Anime",
    description: "Diseño otaku",
  },
  {
    id: 7,
    src: "/src/assets/tattoos/blackwork1.png",
    style: "blackwork",
    title: "Blackwork Back Piece",
    description: "Diseño de espalda completa",
  },
  {
    id: 8,
    src: "/src/assets/tattoos/tattoo-02.jpg",
    style: "realism",
    title: "Ojo Realista",
    description: " detalle fotográfico",
  },
  {
    id: 9,
    src: "/src/assets/tattoos/tattooAnime.jpg",
    style: "anime",
    title: "tatuaje anime",
    description: " detalle fotográfico",
  },
  {
    id: 10,
    src: "/src/assets/tattoos/gato.jpg",
    style: "Realismo de gatos",
    title: "tatuaje de gato realista",
    description: " detalle fotográfico",
  },
  {
    id: 11,
    src: "/src/assets/tattoos/gato4.jpg",
    style: "Realismo de gatos",
    title: "tatuaje de gato realista 2",
    description: " detalle fotográfico",
  }
  
];

export const testimonials = [
  {
    id: 1,
    name: "[NOMBRE CLIENTE 1]",
    comment: "Increíble trabajo. Superó todas mis expectativas. El proceso fue muy cómodo y el resultado simplemente perfecto.",
    rating: 5,
  },
  {
    id: 2,
    name: "[NOMBRE CLIENTE 2]",
    comment: "El mejor tatuador con el que he trabajado. Atención al detalle impecable y un ambiente increíble en el estudio.",
    rating: 5,
  },
  {
    id: 3,
    name: "[NOMBRE CLIENTE 3]",
    comment: "Segunda vez que me tatúa y sigo fascinado con su trabajo. Totalmente recomendado.",
    rating: 5,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Cuéntame tu idea",
    description: "Escríbeme por WhatsApp y cuéntame qué tienes en mente.",
  },
  {
    number: "02",
    title: "Diseñamos tu idea",
    description: "Hablamos sobre tamaño, ubicación, estilo y detalles.",
  },
  {
    number: "03",
    title: "Reservamos tu cita",
    description: "Definimos fecha y hora para tu sesión.",
  },
  {
    number: "04",
    title: "Creamos tu tatuaje",
    description: "Nos vemos en el estudio y hacemos realidad la idea.",
  },
];
