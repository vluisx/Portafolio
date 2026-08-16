import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, LayoutGrid, Columns, ChevronLeft, ChevronRight } from 'lucide-react';
import { usePortfolioData } from '../data';
import { useTranslation } from '../context/LanguageContext';

const ProjectCard = ({ project, isCarousel }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      className="glass-card project-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      style={{
        ...styles.card,
        width: isCarousel ? '100%' : 'auto',
        maxWidth: isCarousel ? '700px' : 'none',
        margin: isCarousel ? '0 auto' : '0',
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
  const [viewMode, setViewMode] = useState('grid');
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

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

      {viewMode === 'grid' ? (
        <div style={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} isCarousel={false} />
          ))}
        </div>
      ) : (
        <div style={styles.carouselContainer}>
          <div style={styles.carouselWrapper}>
            
            <button onClick={prevProject} style={{...styles.navBtn, left: '-20px'}}>
              <ChevronLeft size={30} />
            </button>
            
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                <ProjectCard 
                  key={currentIndex} 
                  project={projects[currentIndex]} 
                  isCarousel={true} 
                />
              </AnimatePresence>
            </div>

            <button onClick={nextProject} style={{...styles.navBtn, right: '-20px'}}>
              <ChevronRight size={30} />
            </button>
            
          </div>
          
          <div style={styles.dotsContainer}>
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  ...styles.dot,
                  ...(currentIndex === idx ? styles.activeDot : {})
                }}
              />
            ))}
          </div>
        </div>
      )}
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
  carouselContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '1rem 0'
  },
  carouselWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    maxWidth: '800px',
  },
  navBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(99, 102, 241, 0.2)',
    border: '1px solid var(--accent-primary)',
    color: '#fff',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  },
  dotsContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '2rem',
    justifyContent: 'center'
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  activeDot: {
    background: 'var(--accent-primary)',
    boxShadow: '0 0 10px rgba(99, 102, 241, 0.8)',
    transform: 'scale(1.2)'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  imageContainer: {
    height: '250px',
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
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  cardTitle: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  cardDescription: {
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
    flex: 1,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    marginBottom: '2rem',
  },
  tag: {
    fontSize: '0.9rem',
    padding: '0.4rem 1rem',
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
    fontSize: '1rem',
    fontWeight: 600,
    transition: 'color 0.3s',
  }
};

export default Projects;
