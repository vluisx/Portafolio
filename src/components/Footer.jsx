import { Code, Globe, MessageCircle, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.brand}>
            <span style={styles.logo}>Dev<span className="text-gradient">Portfolio</span></span>
            <p style={styles.description}>
              {t('hero.description')}
            </p>
          </div>
          
          <div style={styles.socials}>
            <a href="#" style={styles.socialIcon} aria-label="Portfolio"><Globe size={20} /></a>
            <a href="https://github.com/vluisx" target="_blank" rel="noreferrer" style={styles.socialIcon} aria-label="Code"><Code size={20} /></a>
            <a href="#" style={styles.socialIcon} aria-label="Contact"><MessageCircle size={20} /></a>
          </div>
        </div>
        
        <div style={styles.divider}></div>
        
        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} Mi Portafolio. {t('footer.rights')}
          </p>
          <p style={styles.madeWith}>
            Hecho con <Heart size={14} color="#ef4444" style={{ margin: '0 4px' }} /> y React
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'rgba(5, 5, 5, 0.9)',
    borderTop: '1px solid var(--glass-border)',
    padding: '4rem 5% 2rem',
    marginTop: '4rem',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
    marginBottom: '3rem',
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontWeight: '700',
    fontSize: '1.5rem',
  },
  description: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    lineHeight: '1.6',
  },
  socials: {
    display: 'flex',
    gap: '1rem',
  },
  socialIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'var(--glass-bg)',
    border: '1px solid var(--glass-border)',
    color: 'var(--text-primary)',
    transition: 'all 0.3s ease',
  },
  divider: {
    width: '100%',
    height: '1px',
    background: 'var(--glass-border)',
    marginBottom: '2rem',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    color: 'var(--text-secondary)',
    fontSize: '0.85rem',
  },
  madeWith: {
    display: 'flex',
    alignItems: 'center',
  }
};

export default Footer;
