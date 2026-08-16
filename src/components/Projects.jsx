import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { usePortfolioData } from '../data';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project, index }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="glass-card project-card"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
      style={{
        ...styles.card,
        overflow: 'hidden'
      }}
    >
      <div style={{ width: '100%' }}>
        <div style={styles.imageContainer}>
          {project.videoUrl ? (
            <video 
              src={project.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              style={{
                ...styles.media,
                objectFit: project.fit || 'cover'
              }}
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title} 
              loading="lazy"
              style={{
                ...styles.media, 
                objectFit: project.fit || 'cover'
              }}
            />
          )}
        </div>
        <div style={styles.content}>
          <h3 style={styles.cardTitle}>{project.title}</h3>
          <p style={styles.cardDescription}>{project.description}</p>
          
          <div style={styles.tags}>
            {project.tags.map((tag, i) => (
              <span key={i} style={styles.tag}>{tag}</span>
            ))}
          </div>
          
          <div style={styles.links}>
            <a href={project.github} style={styles.link}><Code size={20} /> {t('projects.code')}</a>
            <a href={project.demo} style={styles.link}><ExternalLink size={20} /> {t('projects.demo')}</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const { projects } = usePortfolioData();

  return (
    <section id="projects" style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={styles.header}
      >
        <h2 style={styles.title}>{t('projects.title')} <span className="text-gradient">{t('projects.title_highlight')}</span></h2>
      </motion.div>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '8rem 5%',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    marginBottom: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
    gap: '2.5rem',
    width: '100%',
  },
  card: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    height: '220px',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '1px solid var(--glass-border)',
    background: '#000'
  },
  media: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  content: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  cardDescription: {
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
    flex: 1,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  tag: {
    fontSize: '0.8rem',
    padding: '0.3rem 0.8rem',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '20px',
    color: 'var(--accent-secondary)',
    transition: 'all 0.3s ease',
  },
  links: {
    display: 'flex',
    gap: '1rem',
    position: 'relative',
    zIndex: 10
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    fontWeight: 600,
    transition: 'color 0.3s',
  }
};

export default Projects;
