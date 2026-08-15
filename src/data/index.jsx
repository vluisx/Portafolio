import { Code, Database, Gamepad2, Network } from 'lucide-react';

export const skills = [
  {
    icon: <Code size={32} />,
    title: 'Desarrollo Web & Móvil',
    description: 'Apps frontend/backend, APIs, autenticación y apps Android multiplataforma.'
  },
  {
    icon: <Database size={32} />,
    title: 'Bases de Datos & BI',
    description: 'SQL Server, PostgreSQL, MySQL. Dashboards en Power BI y Power Query.'
  },
  {
    icon: <Gamepad2 size={32} />,
    title: 'Videojuegos 2D/3D',
    description: 'Desarrollo en Unity con C#, mecánicas, físicas y animaciones.'
  },
  {
    icon: <Network size={32} />,
    title: 'Redes, Infraestructura & IA',
    description: 'VLAN, Routing, Firewall. Integración de IA Generativa y Agentes.'
  }
];

export const technologies = [
  "JavaScript", "Java", "Kotlin", "C#", "SQL", "React", "Node.js", "Express", 
  "Android", ".NET", "Supabase", "Power BI", "Unity", "Linux", "Git", "GitHub"
];

export const projects = [
  {
    title: 'Plataforma E-Commerce',
    description: 'Sistema completo con autenticación, carrito y panel administrativo.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'SQL Server', 'Express'],
    github: '#',
    demo: '#'
  },
  {
    title: 'App de Gestión de Tareas',
    description: 'Aplicación Android multiplataforma con actualizaciones en tiempo real y consumo de APIs.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Android', 'Kotlin', 'Supabase', 'API'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Generador y Agente IA',
    description: 'Integración de IA Generativa (LLM) en un entorno de red automatizado.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'LLM', 'React', 'Generative AI'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Dashboard Analítico',
    description: 'Análisis de datos financieros mediante Power Query, DAX y gráficos interactivos.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Power BI', 'SQL', 'Data Analytics', 'Business Intelligence'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Motor 3D de Videojuego',
    description: 'Desarrollo de un juego en 2D/3D integrando mecánicas, físicas y animaciones.',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Unity', 'C#', '3D Graphics', '3ds Max'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Arquitectura de Red',
    description: 'Diseño e implementación de infraestructura con VLAN, Routing, DHCP y Firewall.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Cisco', 'Packet Tracer', 'Networking', 'Security'],
    github: '#',
    demo: '#'
  }
];
