import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, LayoutGrid, GalleryHorizontalEnd, LayoutList, Columns } from 'lucide-react';
import { usePortfolioData } from '../data';
import { useTranslation } from '../context/LanguageContext';

const ProjectCard = ({ project, index, viewMode }) => {
  const { t } = useTranslation();
  
  const isCarousel = viewMode === 'carousel';
  
  return (
    <motion.div
      layout
      className="glass-card project-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      style={{
        ...styles.card,
        minWidth: isCarousel ? '350px' : 'auto',
        maxWidth: isCarousel ? '400px' : 'none',
        flex: isCarousel ? '0 0 auto' : 'auto',
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
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
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'carousel'

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
        
        <div style={styles.toggleContainer}>
          <button 
            className={`btn-toggle ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            style={{...styles.toggleBtn, ...(viewMode === 'grid' ? styles.activeToggle : {})}}
          >
            <LayoutGrid size={20} /> Grid
          </button>
          <button 
            className={`btn-toggle ${viewMode === 'carousel' ? 'active' : ''}`}
            onClick={() => setViewMode('carousel')}
            style={{...styles.toggleBtn, ...(viewMode === 'carousel' ? styles.activeToggle : {})}}
          >
            <Columns size={20} /> Carousel
          </button>
        </div>
      </motion.div>

      <motion.div 
        layout 
        style={viewMode === 'grid' ? styles.grid : styles.carousel}
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} viewMode={viewMode} />
          ))}
        </AnimatePresence>
      </motion.div>
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
    marginBottom: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    marginBottom: '1.5rem',
  },
  toggleContainer: {
    display: 'flex',
    background: 'rgba(255,255,255,0.05)',
    padding: '0.4rem',
    borderRadius: '30px',
    gap: '0.5rem',
    border: '1px solid var(--glass-border)',
  },
  toggleBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'transparent',
    border: 'none',
    color: 'var(--text-secondary)',
    padding: '0.6rem 1.2rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  },
  activeToggle: {
    background: 'var(--accent-primary)',
    color: '#fff',
    boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
    gap: '2.5rem',
    width: '100%',
  },
  carousel: {
    display: 'flex',
    overflowX: 'auto',
    gap: '2rem',
    padding: '1rem 0 2rem 0',
    width: '100%',
    scrollSnapType: 'x mandatory',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'thin',
    scrollbarColor: 'var(--accent-primary) transparent',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    scrollSnapAlign: 'start'
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
