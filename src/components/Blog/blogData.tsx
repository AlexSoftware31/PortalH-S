import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Guitarra para Principiantes",
    paragraph:
      "Este curso está diseñado especialmente para principiantes que desean aprender desde cero y desarrollar una base sólida en la guitarra.",
    image: "/images/blog/Guitarra.jpg",
    author: {
      name: "Juan Sanz",
      image: "/images/blog/author-03.png",
      designation: "Musico Profesional",
    },
    tags: ["Musica"],
    publishDate: "9/2025",
    description:
      "El curso combina teoría sencilla con mucha práctica, de forma dinámica y entretenida. No necesitas experiencia previa: solo tu guitarra, ganas de aprender y constancia. Al finalizar, podrás tocar canciones populares, acompañarte mientras cantas y tendrás las herramientas para seguir avanzando hacia un nivel intermedio.",
    leaning: [
      "La correcta postura y técnica para tocar cómodamente.",
      "Cómo afinar tu guitarra y conocer sus partes principales.",
      "Acordes básicos y progresiones para acompañar canciones.",
      "Rítmicas esenciales para distintos estilos musicales.",
      "Lectura de tablaturas y ejercicios prácticos para mejorar la agilidad de tus manos.",
      "Primeras melodías y canciones completas.",
    ],
  },
  {
    id: 2,
    title: "Piano Intermedio",
    paragraph:
      "Este curso está diseñado para quienes ya dominan los fundamentos del piano y desean llevar su interpretación al siguiente nivel.",
    image: "/images/blog/piano.jpg",
    author: {
      name: "Luis Pintor",
      image: "/images/blog/author-02.png",
      designation: "Musico",
    },
    tags: ["Musica"],
    publishDate: "10/2025",
    description:
      "El curso combina teoría aplicada con ejercicios prácticos, diseñados para que avances a tu ritmo y consolides tu técnica.A través de un enfoque práctico y progresivo, desarrollarás nuevas técnicas y ampliarás tu repertorio musical. Al finalizar, habrás mejorado tu destreza pianística, ampliarás tu repertorio y estarás preparado para enfrentar piezas de mayor dificultad.",
    leaning: [
      "Escalas y arpegios intermedios para mejorar la agilidad y la digitación.",
      "Acordes complejos y progresiones armónicas más avanzadas.",
      "Lectura de partituras con mayor fluidez y comprensión rítmica.",
      "Técnicas de expresión musical: dinámica, articulación y matices.",
      "Improvisación básica y acompañamiento de melodías.",
      "Ejecución de piezas completas de nivel intermedio en diferentes estilos (clásico, pop y jazz ligero).",
    ],
  },
  {
    id: 3,
    title: "Composición Avanzada",
    paragraph:
      "El curso está diseñado para potenciar tu creatividad, expandir tu lenguaje musical y darte herramientas para la composición.",
    image: "/images/blog/composicion.png",
    author: {
      name: "Pablo Lopez",
      image: "/images/blog/blog-men.jpg",
      designation: "Compositor",
    },
    tags: ["Composición"],
    publishDate: "8/2025",
    description:
      "Este curso está dirigido a músicos y compositores con experiencia previa que desean perfeccionar su técnica creativa y explorar nuevas formas de expresión musical. A través de un enfoque integral, profundizarás en recursos de armonía, orquestación y desarrollo temático, aplicados a distintos géneros y estilos. Al finalizar, tendrás la capacidad de escribir música más sofisticada, con un estilo definido y con dominio de técnicas avanzadas que te permitirán destacar como compositor.",
    leaning: [
      "Técnicas avanzadas de armonía y modulaciones.",
      "Desarrollo temático y variaciones complejas.",
      "Composición para distintos formatos: solistas, conjuntos de cámara y orquesta.",
      "Uso de contrapunto y texturas polifónicas.",
      "Introducción a técnicas contemporáneas (atonalidad, minimalismo, serialismo).",
      "Herramientas digitales para la composición (DAWs y software de notación).",
      "Creación de piezas originales con identidad musical propia."
    ],
  },
  {
    id: 4,
    title: "Composición Avanzada",
    paragraph:
      "El curso está diseñado para potenciar tu creatividad, expandir tu lenguaje musical y darte herramientas para la composición.",
    image: "/images/blog/composicion.png",
    author: {
      name: "Pablo Lopez",
      image: "/images/blog/blog-men.jpg",
      designation: "Compositor",
    },
    tags: ["Composición"],
    publishDate: "8/2025",
    description:
      "Este curso está dirigido a músicos y compositores con experiencia previa que desean perfeccionar su técnica creativa y explorar nuevas formas de expresión musical. A través de un enfoque integral, profundizarás en recursos de armonía, orquestación y desarrollo temático, aplicados a distintos géneros y estilos. Al finalizar, tendrás la capacidad de escribir música más sofisticada, con un estilo definido y con dominio de técnicas avanzadas que te permitirán destacar como compositor.",
    leaning: [
      "Técnicas avanzadas de armonía y modulaciones.",
      "Desarrollo temático y variaciones complejas.",
      "Composición para distintos formatos: solistas, conjuntos de cámara y orquesta.",
      "Uso de contrapunto y texturas polifónicas.",
      "Introducción a técnicas contemporáneas (atonalidad, minimalismo, serialismo).",
      "Herramientas digitales para la composición (DAWs y software de notación).",
      "Creación de piezas originales con identidad musical propia."
    ],
  },
  {
    id: 5,
    title: "Piano Intermedio",
    paragraph:
      "Este curso está diseñado para quienes ya dominan los fundamentos del piano y desean llevar su interpretación al siguiente nivel.",
    image: "/images/blog/piano.jpg",
    author: {
      name: "Luis Pintor",
      image: "/images/blog/author-02.png",
      designation: "Musico",
    },
    tags: ["Musica"],
    publishDate: "10/2025",
    description:
      "El curso combina teoría aplicada con ejercicios prácticos, diseñados para que avances a tu ritmo y consolides tu técnica.A través de un enfoque práctico y progresivo, desarrollarás nuevas técnicas y ampliarás tu repertorio musical. Al finalizar, habrás mejorado tu destreza pianística, ampliarás tu repertorio y estarás preparado para enfrentar piezas de mayor dificultad.",
    leaning: [
      "Escalas y arpegios intermedios para mejorar la agilidad y la digitación.",
      "Acordes complejos y progresiones armónicas más avanzadas.",
      "Lectura de partituras con mayor fluidez y comprensión rítmica.",
      "Técnicas de expresión musical: dinámica, articulación y matices.",
      "Improvisación básica y acompañamiento de melodías.",
      "Ejecución de piezas completas de nivel intermedio en diferentes estilos (clásico, pop y jazz ligero).",
    ],
  },
  {
    id: 6,
    title: "Guitarra para Principiantes",
    paragraph:
      "Este curso está diseñado especialmente para principiantes que desean aprender desde cero y desarrollar una base sólida en la guitarra.",
    image: "/images/blog/Guitarra.jpg",
    author: {
      name: "Juan Sanz",
      image: "/images/blog/author-03.png",
      designation: "Musico Profesional",
    },
    tags: ["Musica"],
    publishDate: "9/2025",
    description:
      "El curso combina teoría sencilla con mucha práctica, de forma dinámica y entretenida. No necesitas experiencia previa: solo tu guitarra, ganas de aprender y constancia. Al finalizar, podrás tocar canciones populares, acompañarte mientras cantas y tendrás las herramientas para seguir avanzando hacia un nivel intermedio.",
    leaning: [
      "La correcta postura y técnica para tocar cómodamente.",
      "Cómo afinar tu guitarra y conocer sus partes principales.",
      "Acordes básicos y progresiones para acompañar canciones.",
      "Rítmicas esenciales para distintos estilos musicales.",
      "Lectura de tablaturas y ejercicios prácticos para mejorar la agilidad de tus manos.",
      "Primeras melodías y canciones completas.",
    ],
  },
];
export default blogData;
