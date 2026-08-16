import { Code, Database, Gamepad2, Network } from 'lucide-react';

export const skills = [
  {
    icon: <Code size={32} />,
    title: 'Desarrollo Web & Móvil',
    description: 'Aplicaciones web (React, Node.js) y móviles (Android, Kotlin) con integración de APIs.'
  },
  {
    icon: <Database size={32} />,
    title: 'Bases de Datos & BI',
    description: 'SQL Server, MySQL, PostgreSQL. Dashboards y análisis en Power BI y DAX.'
  },
  {
    icon: <Gamepad2 size={32} />,
    title: 'Videojuegos & Diseño 3D',
    description: 'Desarrollo en Unity con C# (físicas, mecánicas) y modelado 3D en 3ds Max.'
  },
  {
    icon: <Network size={32} />,
    title: 'Redes, Infraestructura & IA',
    description: 'VLAN, DHCP, Firewall, Cámaras IP. Uso de IA Generativa y Agentes como apoyo.'
  }
];

export const technologies = [
  "JavaScript", "Java", "Kotlin", "C#", "SQL", "React", "Node.js", "Express", 
  "HTML", "CSS", "Android", ".NET", "SQL Server", "MySQL", "PostgreSQL", 
  "Supabase", "Power BI", "Unity", "3ds Max", "Linux", "Git", "GitHub"
];

export const projects = [
  {
    title: 'Bases de Datos',
    description: 'Diseño de bases de datos relacionales, consultas SQL, CRUD, procedimientos y funciones.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: './videos/CRUD_PYTHONJAVA.mp4',
    fit: 'contain',
    tags: ['SQL Server', 'MySQL', 'PostgreSQL', 'Python', 'Java'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Business Intelligence',
    description: 'Dashboards y análisis de datos mediante Power BI, Power Query y DAX.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: './videos/BussingInteligenceBigData.mp4',
    fit: 'contain',
    tags: ['Power BI', 'SQL', 'Data Analytics', 'DAX'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Aplicaciones Móviles',
    description: 'Aplicaciones Android y multiplataforma con integración de APIs y servicios de datos.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: './videos/CreacionesDeApps.mp4',
    fit: 'contain',
    tags: ['Android', 'Kotlin', 'Supabase', 'API'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Videojuegos 2D/3D',
    description: 'Desarrollo en Unity con C#, incluyendo mecánicas, físicas, animaciones e interacción.',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: './videos/DiseñoVideosJuegosUnity.mp4',
    fit: 'contain',
    tags: ['Unity', 'C#', '3D Graphics', 'Game Design'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Modelado y Diseño 3D',
    description: 'Creación de assets, objetos y entornos 3D.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: './videos/Diseño3D.mp4',
    fit: 'contain',
    tags: ['3ds Max', 'Modeling', 'Texturing', 'Rendering'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Desarrollo Web',
    description: 'Aplicaciones web con frontend, backend, APIs, autenticación y bases de datos.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: '', // No video for this one yet
    fit: 'cover',
    tags: ['React', 'Node.js', 'Express', 'HTML', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#'
  }
];
