import { motion } from 'framer-motion';
import { usePortfolioData } from '../data';
import { GraduationCap, Award, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const { skills, technologies } = usePortfolioData();

  return (
    <section id="about" className="about-section" style={{...styles.section, position: 'relative', overflow: 'hidden'}}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={styles.header}
      >
        <h2 style={styles.title}>{t('about.title')} <span className="text-gradient">{t('about.title_highlight')}</span></h2>
        <p style={styles.description}>
          {t('about.description')}
        </p>
      </motion.div>

      <div style={styles.timelineContainer}>
        {/* Educacion */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card timeline-card"
          style={styles.timelineCard}
        >
          <div style={styles.iconCircle}><GraduationCap size={28} color="#fff" /></div>
          <div style={styles.timelineContent}>
            <h3 style={styles.edTitle}>Formación Académica</h3>
            <p style={styles.edDegree}>Ingeniero de Sistemas</p>
            <p style={styles.edDate}>2021 — Actualidad</p>
          </div>
        </motion.div>

        {/* Certificaciones */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card timeline-card"
          style={styles.timelineCard}
        >
          <div style={{...styles.iconCircle, background: 'var(--accent-secondary)'}}><Award size={28} color="#fff" /></div>
          <div style={styles.timelineContent}>
            <h3 style={styles.edTitle}>Certificaciones</h3>
            <div style={styles.certContainer}>
              <span style={styles.certBadge}><Code2 size={16}/> Python Avanzado</span>
              <span style={styles.certBadge}><Award size={16}/> Diseño Web</span>
              <span style={styles.certBadge}><Award size={16}/> Cisco Networking Academy</span>
            </div>
          </div>
        </motion.div>
      </div>

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

      <div style={styles.marqueeContainer}>
        <div className="tech-marquee">
          <div className="tech-marquee-content">
            {technologies.map((tech, i) => (
              <span key={i} style={styles.techItem}>{tech}</span>
            ))}
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
  timelineContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '100%',
    maxWidth: '900px',
  },
  timelineCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    padding: '2rem',
    background: 'rgba(109, 40, 217, 0.05)',
  },
  iconCircle: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'var(--accent-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 0 20px rgba(109, 40, 217, 0.5)',
  },
  timelineContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  edTitle: {
    fontSize: '1.5rem',
    color: 'var(--text-primary)',
    marginBottom: '0.5rem',
  },
  edDegree: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  edDate: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    opacity: 0.7,
    marginTop: '0.5rem',
  },
  certContainer: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '1rem',
  },
  certBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '0.6rem 1.2rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid var(--glass-border)',
    borderRadius: '20px',
    fontSize: '0.85rem',
    color: 'var(--text-primary)',
    transition: 'all 0.3s ease',
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
