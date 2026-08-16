import { motion } from 'framer-motion';
import { ArrowRight, Code, Briefcase, MessageCircle, Database, Cpu, Terminal, Globe2, FileCode } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', paddingTop: '5rem' }}>
      <div 
        className="bg-glow"
        style={{ top: '20%', left: '10%', position: 'absolute' }}
      />
      <div 
        className="bg-glow-2"
        style={{ bottom: '20%', right: '10%', position: 'absolute' }}
      />

        <motion.div 
          className="hero-content" 
          style={styles.content}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1 }}
        >
          <div style={styles.textContent}>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <h2 style={styles.subtitle}>{t('hero.greeting')}</h2>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              style={styles.title}
            >
              <span className="text-cycler" data-p1={t('hero.title_part1')} data-p2={t('hero.title_part2')} data-p3={t('hero.title_part3')}></span> <br />
              <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--text-primary)' }}>
                {t('hero.title_sub')}
              </span>
            </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={styles.description}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={styles.actionContainer}
          >
            <a href="#projects" className="btn-primary" style={styles.primaryBtn}>
              {t('hero.cta')} <ArrowRight size={20} />
            </a>
            
            <div style={styles.socialLinks}>
              <a href="https://github.com/vluisx" target="_blank" rel="noreferrer" style={styles.socialIcon}><Code size={24} /></a>
              <a href="#" style={styles.socialIcon}><Briefcase size={24} /></a>
              <a href="#" style={styles.socialIcon}><MessageCircle size={24} /></a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          style={styles.imageContent}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="blob-profile" style={{ width: '100%', maxWidth: '450px', aspectRatio: '1/1', overflow: 'hidden', position: 'relative' }}>
            <img 
              src="./SonGoku.gif" 
              alt="Son Goku" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
            />
          </div>
          
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: 'absolute', top: '5%', right: '0', background: 'var(--glass-bg)', padding: '0.8rem', borderRadius: '12px', border: '1px solid var(--glass-border)', backdropFilter: 'blur(10px)', color: '#F7DF1E', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}
          >
            <FileCode size={24} /> JS
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: 'absolute', bottom: '10%', left: '0', background: 'var(--glass-bg)', padding: '0.8rem', borderRadius: '12px', border: '1px solid var(--glass-border)', backdropFilter: 'blur(10px)', color: '#61DAFB', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}
          >
            <Code size={24} /> React
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ position: 'absolute', top: '20%', left: '5%', background: 'var(--glass-bg)', padding: '0.8rem', borderRadius: '12px', border: '1px solid var(--glass-border)', backdropFilter: 'blur(10px)', color: '#3776AB', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}
          >
            <Terminal size={24} /> Python
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            style={{ position: 'absolute', bottom: '30%', right: '5%', background: 'var(--glass-bg)', padding: '0.8rem', borderRadius: '12px', border: '1px solid var(--glass-border)', backdropFilter: 'blur(10px)', color: '#336791', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}
          >
            <Database size={24} /> SQL
          </motion.div>
        </motion.div>
      </motion.div>


    </section>
  );
};

const styles = {
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
    alignItems: 'center',
    maxWidth: '1400px',
    zIndex: 10,
    width: '100%',
    padding: '0 5%',
    gap: '4rem',
    margin: '0 auto',
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  imageContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '1rem',
    color: 'var(--text-secondary)',
  },
  title: {
    fontSize: 'clamp(3rem, 8vw, 5rem)',
    marginBottom: '1.5rem',
    lineHeight: 1.1,
  },
  description: {
    fontSize: '1.2rem',
    color: 'var(--text-secondary)',
    marginBottom: '2.5rem',
    maxWidth: '600px',
    lineHeight: 1.6,
  },
  actionContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 2rem',
    background: 'var(--text-primary)',
    color: 'var(--bg-color)',
    borderRadius: '30px',
    fontWeight: 600,
    transition: 'transform 0.3s ease',
    textDecoration: 'none',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
  },
  socialIcon: {
    padding: '0.75rem',
    border: '1px solid var(--glass-border)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--glass-bg)',
    color: 'var(--text-primary)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  }
};

export default Hero;
