import { motion } from 'framer-motion';
import { skills, technologies } from '../data';

const About = () => {
  return (
    <section id="about" className="about-section" style={{...styles.section, position: 'relative', overflow: 'hidden'}}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={styles.header}
      >
        <h2 style={styles.title}>Sobre <span className="text-gradient">Mí</span></h2>
        <p style={styles.description}>
          Estudiante de Ingeniería de Sistemas orientado al desarrollo web y móvil, bases de datos, 
          redes e infraestructura. Capacidad de adaptación a nuevas tecnologías y uso de IA como apoyo al desarrollo.
        </p>
      </motion.div>

      {}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.educationCard}
        className="glass-card"
      >
        <h3 style={styles.edTitle}>Formación Académica</h3>
        <p style={styles.edDegree}>Ingeniero de Sistemas</p>
        <p style={styles.edDate}>2021 – Actualidad</p>
        
        <div style={styles.certContainer}>
          <span style={styles.certBadge}>Certificación Python</span>
          <span style={styles.certBadge}>Diseño Web</span>
          <span style={styles.certBadge}>Cisco Networking Academy</span>
        </div>
      </motion.div>

      {}
      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="glass-card skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={styles.card}
          >
            <div style={styles.iconWrapper}>{skill.icon}</div>
            <h3 style={styles.cardTitle}>{skill.title}</h3>
            <p style={styles.cardDescription}>{skill.description}</p>
          </motion.div>
        ))}
      </div>

      {}
      <div style={styles.marqueeContainer}>
        <div className="tech-marquee">
          <div className="tech-marquee-content">
            {technologies.map((tech, i) => (
              <span key={i} style={styles.techItem}>{tech}</span>
            ))}
            {}
            {technologies.map((tech, i) => (
              <span key={`dup-${i}`} style={styles.techItem}>{tech}</span>
            ))}
          </div>
        </div>
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4rem',
  },
  header: {
    textAlign: 'center',
    maxWidth: '800px',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    marginBottom: '1rem',
  },
  description: {
    color: 'var(--text-secondary)',
    fontSize: '1.1rem',
    lineHeight: 1.6,
  },
  educationCard: {
    width: '100%',
    maxWidth: '1000px',
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    background: 'rgba(109, 40, 217, 0.05)',
  },
  edTitle: {
    fontSize: '1.5rem',
    color: 'var(--text-primary)',
    marginBottom: '1rem',
  },
  edSchool: {
    fontSize: '1.2rem',
    color: 'var(--accent-secondary)',
    fontWeight: '600',
  },
  edDegree: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    marginTop: '0.2rem',
  },
  edDate: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    opacity: 0.7,
    marginTop: '0.5rem',
    marginBottom: '1.5rem',
  },
  certContainer: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  certBadge: {
    padding: '0.5rem 1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid var(--glass-border)',
    borderRadius: '20px',
    fontSize: '0.85rem',
    color: 'var(--text-primary)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    width: '100%',
    maxWidth: '1000px',
  },
  card: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    cursor: 'default',
  },
  iconWrapper: {
    color: 'var(--accent-primary)',
    marginBottom: '1.5rem',
    padding: '1rem',
    background: 'rgba(109, 40, 217, 0.1)',
    borderRadius: '12px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
  cardDescription: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    lineHeight: 1.6,
  },
  marqueeContainer: {
    width: '100vw',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    overflow: 'hidden',
    marginTop: '2rem',
    background: 'rgba(0,0,0,0.3)',
    padding: '1.5rem 0',
    borderTop: '1px solid var(--glass-border)',
    borderBottom: '1px solid var(--glass-border)',
  },
  techItem: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    margin: '0 2rem',
    whiteSpace: 'nowrap',
  }
};

export default About;
