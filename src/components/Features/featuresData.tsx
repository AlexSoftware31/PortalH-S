import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M6 2L18 2L18 4L6 4L6 2Z" />
        <path d="M7 4H17V20H7V4Z" opacity="0.5" />
        <path d="M3 10L21 10" stroke="currentColor" strokeWidth="2" />
        <path d="M5 6L5 18" stroke="currentColor" strokeWidth="2" />
        <path d="M19 6L19 18" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Instrumentos",
    paragraph:
      "Guitarra (acústica, eléctrica y clásica), Piano y Teclado, Bajo eléctrico, Batería y percusión, Violín, viola y violonchelo, Ukelele.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path
          d="M4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2Z"
          opacity="0.5"
        />
        <path d="M6 6H18V8H6V6Z" />
        <path d="M6 10H18V12H6V10Z" />
        <path d="M6 14H14V16H6V14Z" />
      </svg>
    ),
    title: "Teoría y Lenguaje Musical",
    paragraph:
      "Lectura musical y solfeo, Armonía básica e intermedia, Armonía avanzada, Entrenamiento auditivo, Ritmo y métrica.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path
          d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25Z"
          opacity="0.5"
        />
        <path d="M20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" />
      </svg>
    ),
    title: "Composición y Producción",
    paragraph:
      "Composición básica, Composición avanzada, Orquestación y arreglos, Producción musical en DAW, Songwriting",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path
          d="M12 14C13.6569 14 15 12.6569 15 11V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V11C9 12.6569 10.3431 14 12 14Z"
          opacity="0.5"
        />
        <path d="M19 11C19 15.4183 15.4183 19 11 19H13C8.58172 19 5 15.4183 5 11H7C7 14.3137 9.68629 17 13 17C16.3137 17 19 14.3137 19 11Z" />
      </svg>
    ),
    title: "Voz y Canto",
    paragraph:
      "Técnica vocal para principiantes, Canto intermedio y avanzado, Estilos vocales (Pop, rock, jazz, lírico, gospel y más.), Cuidado de la voz.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <rect x="3" y="3" width="18" height="18" rx="2" opacity="0.5" />
        <path d="M7 7H17V17H7V7Z" />
      </svg>
    ),
    title: "Tecnología Musical",
    paragraph:
      "Producción con software, Mezcla y masterización, Creación de beats y música electrónica, Home studio.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path
          d="M12 2L13.09 8.26H19.54L14.73 11.97L16.18 18.26L12 14.77L7.82 18.26L9.27 11.97L4.46 8.26H10.91L12 2Z"
          opacity="0.5"
        />
        <path d="M12 4.44L12.85 8.26H16.85L13.35 10.47L14.2 14.26L12 12.15L9.8 14.26L10.65 10.47L7.15 8.26H11.15L12 4.44Z" />
      </svg>
    ),
    title: "Desarrollo Musical y Creativo",
    paragraph:
      "Improvisación, Performance escénica, Composición colaborativa, Creatividad musical.",
  },
];
export default featuresData;
