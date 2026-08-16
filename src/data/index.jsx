import { Code, Database, Gamepad2, Network } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const usePortfolioData = () => {
  const { t } = useTranslation();

  const skills = [
    {
      icon: <Code size={32} />,
      title: t('about.skills.dev.title'),
      description: t('about.skills.dev.description')
    },
    {
      icon: <Database size={32} />,
      title: t('about.skills.data.title'),
      description: t('about.skills.data.description')
    },
    {
      icon: <Gamepad2 size={32} />,
      title: t('about.skills.games.title'),
      description: t('about.skills.games.description')
    },
    {
      icon: <Network size={32} />,
      title: t('about.skills.network.title'),
      description: t('about.skills.network.description')
    }
  ];

  const technologies = [
    "JavaScript", "Java", "Kotlin", "C#", "SQL", "React", "Node.js", "Express", 
    "HTML", "CSS", "Android", ".NET", "SQL Server", "MySQL", "PostgreSQL", 
    "Supabase", "Power BI", "Enterprise Architect", "Unity", "3ds Max", "Linux", "Git", "GitHub"
  ];

  const projects = [
    {
      title: t('projects.items.db.title'),
      description: t('projects.items.db.description'),
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: './videos/CRUD_PYTHONJAVA.mp4',
      fit: 'contain',
      tags: ['SQL Server', 'MySQL', 'PostgreSQL', 'Python', 'Java'],
      github: '#',
      demo: '#'
    },
    {
      title: t('projects.items.bi.title'),
      description: t('projects.items.bi.description'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: './videos/BussingInteligenceBigData.mp4',
      fit: 'contain',
      tags: ['Power BI', 'SQL', 'Data Analytics', 'DAX'],
      github: '#',
      demo: '#'
    },
    {
      title: t('projects.items.mobile.title'),
      description: t('projects.items.mobile.description'),
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: './videos/CreacionesDeApps.mp4',
      fit: 'contain',
      tags: ['Android', 'Kotlin', 'Supabase', 'API'],
      github: '#',
      demo: '#'
    },
    {
      title: t('projects.items.games.title'),
      description: t('projects.items.games.description'),
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: './videos/DiseñoVideosJuegosUnity.mp4',
      fit: 'contain',
      tags: ['Unity', 'C#', '3D Graphics', 'Game Design'],
      github: '#',
      demo: '#'
    },
    {
      title: t('projects.items.3d.title'),
      description: t('projects.items.3d.description'),
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: './videos/Diseño3D.mp4',
      fit: 'contain',
      tags: ['3ds Max', 'Modeling', 'Texturing', 'Rendering'],
      github: '#',
      demo: '#'
    },
    {
      title: t('projects.items.web.title'),
      description: t('projects.items.web.description'),
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: '', // No video for this one yet
      fit: 'cover',
      tags: ['React', 'Node.js', 'Express', 'HTML', 'CSS', 'JavaScript'],
      github: '#',
      demo: '#'
    }
  ];

  return { skills, technologies, projects };
};
