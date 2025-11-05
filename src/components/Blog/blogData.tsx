import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Guitarra",
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
    videoLinks: {
      basico: [
        "https://www.youtube.com/watch?v=g6h2ztdqCc8",
        "https://www.youtube.com/watch?v=omui_UyFsIA",
        "https://www.youtube.com/watch?v=WOW-sXw2t6Q",
        "https://www.youtube.com/watch?v=kg4O9QzDfH8",
      ],
      intermedio: [
        "https://www.youtube.com/watch?v=pcpn2zGiG3M",
        "https://www.youtube.com/watch?v=llvHQlUbPM8",
        "https://www.youtube.com/watch?v=lFR-OwfPrZI",
        "https://www.youtube.com/watch?v=pmZpbzrQfbo",
      ],
      avanzado: [
        "https://www.youtube.com/watch?v=AVQvoVgPvgQ",
        "https://www.youtube.com/watch?v=zw7aiAKR4No",
        "https://www.youtube.com/watch?v=kr8SNdUTB0s",
      ],
    },
  },
  {
    id: 2,
    title: "Piano",
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
      "El curso combina teoría aplicada con ejercicios prácticos, diseñados para que avances a tu ritmo y consolides tu técnica. A través de un enfoque práctico y progresivo, desarrollarás nuevas técnicas y ampliarás tu repertorio musical. Al finalizar, habrás mejorado tu destreza pianística, ampliarás tu repertorio y estarás preparado para enfrentar piezas de mayor dificultad.",
    leaning: [
      "Escalas y arpegios intermedios para mejorar la agilidad y la digitación.",
      "Acordes complejos y progresiones armónicas más avanzadas.",
      "Lectura de partituras con mayor fluidez y comprensión rítmica.",
      "Técnicas de expresión musical: dinámica, articulación y matices.",
      "Improvisación básica y acompañamiento de melodías.",
      "Ejecución de piezas completas de nivel intermedio en diferentes estilos (clásico, pop y jazz ligero).",
    ],
    videoLinks: {
      basico: [
        "https://www.youtube.com/watch?v=kAALQ4JEY6c",
        "https://www.youtube.com/watch?v=LYuZIZ_LDKk",
        "https://www.youtube.com/watch?v=rkP-S0U7O1w",
        "https://www.youtube.com/watch?v=ZY1JIg5VRN0",
      ],
      intermedio: [
        "https://www.youtube.com/watch?v=uKGBj3apwVQ",
        "https://www.youtube.com/watch?v=F2YOB_nTzVw",
        "https://www.youtube.com/watch?v=FOqM_lv6D68",
        "https://www.youtube.com/watch?v=91NWpdT2U6U",
      ],
      avanzado: [
        "https://www.youtube.com/watch?v=UsG9vWGh0N8",
        "https://www.youtube.com/watch?v=dJ5zCSBmVuU",
        "https://www.youtube.com/watch?v=7MKT8OFr0SI",
        "https://www.youtube.com/watch?v=5Xo7NXw0xCg",
        "https://www.youtube.com/watch?v=n2JCApyjFio"
      ],
    },
  },
  {
    id: 3,
    title: "Violín",
    paragraph:
      "El curso está diseñado para despertar tu sensibilidad musical, darte confianza con el instrumento y construir una base técnica sólida.",
    image: "/images/blog/violin.jpg",
    author: {
      name: "William Luna",
      image: "/images/blog/blog-men.jpg",
      designation: "Musico",
    },
    tags: ["Musica"],
    publishDate: "10/2025",
    description:
      "Este curso está dirigido a personas sin experiencia previa que desean aprender a tocar el violín desde cero. A través de un enfoque progresivo y práctico, desarrollarás las habilidades básicas necesarias para interpretar música con soltura y expresividad. Aprenderás desde cómo sostener el instrumento hasta tocar tus primeras piezas, explorando distintos estilos y formatos. Al finalizar, tendrás una base sólida para continuar tu formación musical con confianza y estilo propio.",
    leaning: [
      "Postura correcta, manejo del arco y colocación de los dedos.",
      "Lectura musical básica y entrenamiento auditivo.",
      "Ejercicios progresivos para desarrollar coordinación y afinación.",
      "Interpretación de piezas sencillas en distintos estilos.",
      "Introducción al repertorio clásico y popular para principiantes",
      "Práctica con metrónomo, afinador y apps de estudio.",
      "Primeras presentaciones y grabaciones para evaluar tu progreso.",
    ],
    videoLinks: {
      basico: [
        "https://www.youtube.com/watch?v=NQrO5aBan9s",
        "https://www.youtube.com/watch?v=p0vOvVevOVs",
        "https://www.youtube.com/watch?v=GtnRdBsAFYw",
        "https://www.youtube.com/watch?v=mgQj6ZS5Gho",
        "https://www.youtube.com/watch?v=xmuyk_jt-sw",
        "https://www.youtube.com/watch?v=PTb1hMMup0g",
      ],
      intermedio: [
        "https://www.youtube.com/watch?v=Ij0KZvF5puM",
        "https://www.youtube.com/watch?v=Wh4LIDq8eVk",
        "https://www.youtube.com/watch?v=tOU4dGAKSFg",
        "https://www.youtube.com/watch?v=tITOjdjsUxQ",
      ],
      avanzado: [
        "https://www.youtube.com/watch?v=SB8y1Fdttok",
        "https://www.youtube.com/watch?v=C1DkefzMHWk",
        "https://www.youtube.com/watch?v=i1mAE7om59o",
        "https://www.youtube.com/watch?v=ZGkx7YryQ_w",
        "https://www.youtube.com/watch?v=86WzPII6enM",
      ],
    },
  },
  {
    id: 4,
    title: "Composición",
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
      "Creación de piezas originales con identidad musical propia.",
    ],
    videoLinks: {
      basico: [
        "https://www.youtube.com/watch?v=video_basico_1",
        "https://www.youtube.com/watch?v=video_basico_2",
        "https://www.youtube.com/watch?v=video_basico_3",
      ],
      intermedio: [
        "https://www.youtube.com/watch?v=video_intermedio_1",
        "https://www.youtube.com/watch?v=video_intermedio_2",
      ],
      avanzado: ["https://www.youtube.com/watch?v=video_avanzado_1"],
    },
  },
  {
    id: 5,
    title: "Piano",
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
    videoLinks: {
      basico: [
        "https://www.youtube.com/watch?v=video_basico_1",
        "https://www.youtube.com/watch?v=video_basico_2",
        "https://www.youtube.com/watch?v=video_basico_3",
      ],
      intermedio: [
        "https://www.youtube.com/watch?v=video_intermedio_1",
        "https://www.youtube.com/watch?v=video_intermedio_2",
      ],
      avanzado: ["https://www.youtube.com/watch?v=video_avanzado_1"],
    },
  },
  {
    id: 6,
    title: "Guitarra",
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
    videoLinks: {
      basico: [
        "https://www.youtube.com/watch?v=video_basico_1",
        "https://www.youtube.com/watch?v=video_basico_2",
        "https://www.youtube.com/watch?v=video_basico_3",
      ],
      intermedio: [
        "https://www.youtube.com/watch?v=video_intermedio_1",
        "https://www.youtube.com/watch?v=video_intermedio_2",
      ],
      avanzado: ["https://www.youtube.com/watch?v=video_avanzado_1"],
    },
  },
];
export default blogData;
