import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = (i18n.language || '').startsWith('en') ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
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
        
        <button 
          onClick={toggleLanguage}
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-primary)',
            padding: '0.4rem 0.8rem',
            borderRadius: '20px',
            cursor: 'pointer',
            marginLeft: '1rem',
            fontWeight: 'bold',
            transition: 'all 0.3s'
          }}
        >
          {(i18n.language || '').startsWith('en') ? 'EN' : 'ES'}
        </button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
