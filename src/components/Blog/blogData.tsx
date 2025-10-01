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
      designation: "Musico Profesinal",
    },
    tags: ["Musica"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Piano Intermedio",
    paragraph:
      "Este curso está diseñado para quienes ya dominan los fundamentos del piano y desean llevar su interpretación al siguiente nivel.",
    image: "/images/blog/piano.jpg",
    author: {
      name: "Luis Caminero",
      image: "/images/blog/author-02.png",
      designation: "Musico",
    },
    tags: ["Musica"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Composición Avanzada",
    paragraph:
      "El curso está diseñado para potenciar tu creatividad, expandir tu lenguaje musical y darte herramientas para la composición.",
    image: "/images/blog/composicion.png",
    author: {
      name: "Juan Luis Guerra",
      image: "/images/blog/author-03.png",
      designation: "Compositor",
    },
    tags: ["Composición"],
    publishDate: "2025",
  },
];
export default blogData;
