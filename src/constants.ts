import { SlideData, SlideType } from './types';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    type: SlideType.COVER,
    title: "SOUNSGUD RECORDS x GEORGE GOROSTIZA",
    subtitle: "Propuesta de Alianza Estratégica"
  },
  {
    id: 2,
    type: SlideType.Content,
    title: "¿Qué es Sounsgud Records?",
    subtitle: "Propuesta 2026",
    items: [
      { title: "Sello Independiente", description: "Somos un sello independiente enfocado 100% en el desarrollo artístico integral de tu proyecto musical.", iconName: "Award" },
      { title: "Valor Agregado", description: "Ofrecemos estrategia, creación de contenido y mentoría para que lanzes tu música de forma profesional.", iconName: "TrendingUp" },
      { title: "Valores", description: "Te garantizamos una relación basada en el trabajo colaborativo y la transparencia de acuerdos.", iconName: "Users" }
    ]
  },
  {
    id: 3,
    type: SlideType.Content,
    title: "Distribución Global",
    subtitle: "Propuesta 2026",
    items: [
      { title: "Alcance Mundial", description: "Te ayudamos a distribuir tu música de forma global a través de Symphonic Distribution, asegurando el lanzamiento y disponibilidad de tu música en las plataformas digitales más importantes del mundo.", iconName: "Globe" },
      { title: "Plataformas", description: "Te facilitamos:\n• Distribución Estándar a DSPs (Spotify, Apple Music, Amazon Music, etc.)\n• Monetización de UGC (Contenido creado por los usuarios en Meta, TikTok, etc.)\n• Monetización de SoundCloud\n• YouTube Content ID\n• Distribución de Video", iconName: "Music", align: "left" },
      { title: "Gestión Profesional", description: "Te ayudamos a gestionar:\n• Regalías Mecánicas (Cobro a través de Symphonic Distribution)\n• Composición en YouTube\n• Derechos Conexos e Intérpretes (SoundExchange)\n• Gestión de Canales de YouTube", iconName: "Settings", align: "left" }
    ]
  },
  {
    id: 4,
    type: SlideType.Content,
    title: "Independencia y Propiedad",
    subtitle: "Propuesta 2026",
    items: [
      { title: "Dueño de tu Obra", description: "El artista conserva el 100% de la propiedad de todos sus masters.", iconName: "Copyright" },
      { title: "Sin Ataduras", description: "No cedemos derechos de autor a terceros.", iconName: "Unlock" },
      { title: "Libertad Creativa", description: "Mantienes el control total sobre el aspecto artístico y legal de tu proyecto.", iconName: "PenTool" }
    ]
  },
  {
    id: 5,
    type: SlideType.FINANCIAL,
    title: "Estructura Financiera",
    subtitle: "Propuesta 2026",
    items: [
      { title: "Propósito", description: "Este margen permite sostener una estructura profesional, invertir en marketing y asegurar el éxito.", iconName: "DollarSign" }
    ]
  },
  {
    id: 6,
    type: SlideType.Content,
    title: "Estrategia de Lanzamiento",
    subtitle: "Propuesta 2026",
    items: [
      { title: "Calendario", description: "Te ayudamos a coordinar fechas clave para lanzar tus sencillos, EPs o álbumes.", iconName: "Calendar" },
      { title: "Visibilidad", description: "Te ayudamos a tener un pitching profesional a playlists editoriales.", iconName: "Radio" },
      { title: "Post-Lanzamiento", description: "Desarrollamos una estrategia de salida y le damos seguimiento.", iconName: "BarChart" }
    ]
  },
  {
    id: 7,
    type: SlideType.Content,
    title: "Marketing y Contenido",
    subtitle: "Propuesta 2026",
    items: [
      { title: "Producción Audiovisual", description: "Te ayudamos a producir contenido audiovisual para promover tu lanzamiento.", iconName: "Video" },
      { title: "Campaña Promocional", description: "Difundimos tus lanzamientos a través de nuestras redes sociales y canales de difusión.", iconName: "Share2" },
      { title: "Media Kit", description: "Te ayudamos a desarrollar un kit de prensa de tu lanzamiento, listo para difusión.", iconName: "FileText" }
    ]
  },
  {
    id: 8,
    type: SlideType.Content,
    title: "Acompañamiento Creativo",
    subtitle: "Propuesta 2026",
    items: [
      { title: "Dirección de Carrera", description: "Te ofrecemos asistencia en dirección creativa e identidad.", iconName: "Compass" },
      { title: "Crecimiento", description: "Te proporcionamos feedback estratégico constante.", iconName: "TrendingUp" },
      { title: "Posicionamiento", description: "Te ayudamos a mejorar tu lugar dentro de la industria.", iconName: "Target" }
    ]
  },
  {
    id: 9,
    type: SlideType.CLOSING,
    title: "Demos el Siguiente Paso",
    subtitle: "Propuesta 2026",
    items: [
      { title: "Control Total", description: "De tu proyecto musical", iconName: "CheckCircle" },
      { title: "Transparencia", description: "De nuestros acuerdos", iconName: "CheckCircle" },
      { title: "Independencia", description: "Con estructura de sello", iconName: "CheckCircle" }
    ]
  }
];