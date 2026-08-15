import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { projects } from '../data';

const ProjectCard = ({ project, index }) => {
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
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            style={{...styles.image, transition: 'transform 0.3s ease'}}
          />
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
            <a href={project.github} style={styles.link}><Code size={20} /> Código</a>
            <a href={project.demo} style={styles.link}><ExternalLink size={20} /> Demo</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={styles.header}
      >
        <h2 style={styles.title}>Proyectos <span className="text-gradient">Destacados</span></h2>
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
    height: '200px',
    overflow: 'hidden',
    borderBottom: '1px solid var(--glass-border)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
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
  },
  links: {
    display: 'flex',
    gap: '1rem',
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
