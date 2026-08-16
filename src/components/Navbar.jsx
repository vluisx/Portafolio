import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, setLang } = useTranslation();

  const handleLanguageChange = (lang) => {
    setLang(lang);
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLang = lang;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="nav-brand"
      >
        Dev<span className="text-gradient">Portfolio</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="nav-links"
      >
        <a href="#home">{t('navbar.home')}</a>
        <a href="#about">{t('navbar.about')}</a>
        <a href="#projects">{t('navbar.projects')}</a>
        <a href="#contact">{t('navbar.contact')}</a>
        
        {/* Selector de idioma estilizado */}
        <div style={styles.langContainer}>
          <Globe size={16} color="var(--text-secondary)" style={{marginRight: '4px'}} />
          <button 
            onClick={() => handleLanguageChange('es')}
            style={{
              ...styles.langBtn,
              background: currentLang.startsWith('es') ? 'rgba(255,255,255,0.1)' : 'transparent',
              color: currentLang.startsWith('es') ? 'var(--text-primary)' : 'var(--text-secondary)',
            }}
          >
            ES
          </button>
          <span style={{color: 'var(--glass-border)'}}>|</span>
          <button 
            onClick={() => handleLanguageChange('en')}
            style={{
              ...styles.langBtn,
              background: currentLang.startsWith('en') ? 'rgba(255,255,255,0.1)' : 'transparent',
              color: currentLang.startsWith('en') ? 'var(--text-primary)' : 'var(--text-secondary)',
            }}
          >
            EN
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

const styles = {
  langContainer: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid var(--glass-border)',
    borderRadius: '20px',
    padding: '2px 8px',
    marginLeft: '1rem',
    gap: '4px'
  },
  langBtn: {
    background: 'transparent',
    border: 'none',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    transition: 'all 0.3s'
  }
};

export default Navbar;
