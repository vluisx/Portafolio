import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nombre = formData.get('nombre');
    const mensaje = formData.get('mensaje');
    const phone = '51963098258';
    // Use the translation string and replace placeholders manually since it's just JS logic
    let text = t('contact.form.whatsapp_message');
    text = text.replace('{{name}}', nombre).replace('{{message}}', mensaje);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={styles.header}
      >
        <h2 style={styles.title}>{t('contact.title')} <span className="text-gradient">{t('contact.title_highlight')}</span></h2>
      </motion.div>

      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.infoBox}
        >
          <h3 style={styles.infoTitle}>{t('contact.info_title')}</h3>
          <p style={styles.infoText}>{t('contact.info_text')}</p>
          
          <div style={styles.contactDetails}>
            <div style={styles.contactItem}>
              <Mail size={24} color="var(--accent-primary)" />
              <span style={styles.contactText}>dimen.escamed@gmail.com</span>
            </div>
            <div style={styles.contactItem}>
              <Phone size={24} color="var(--accent-primary)" />
              <span style={styles.contactText}>(+51) 963098258</span>
            </div>
            <div style={styles.contactItem}>
              <MapPin size={24} color="var(--accent-primary)" />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={styles.contactText}>Perú</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleWhatsAppSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={styles.form}
        >
          <div style={styles.inputGroup}>
            <label style={styles.label}>{t('contact.form.name')}</label>
            <input name="nombre" type="text" style={styles.input} placeholder={t('contact.form.name_placeholder')} required />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>{t('contact.form.message')}</label>
            <textarea name="mensaje" style={styles.textarea} placeholder={t('contact.form.message_placeholder')} rows="4" required></textarea>
          </div>
          
          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {t('contact.form.submit')} <Send size={18} />
          </button>
        </motion.form>
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
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
    gap: '4rem',
    width: '100%',
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  infoTitle: {
    fontSize: '2rem',
    fontWeight: '700',
  },
  infoText: {
    color: 'var(--text-secondary)',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  contactText: {
    fontSize: '1.1rem',
    color: 'var(--text-primary)',
  },
  form: {
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
  },
  input: {
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid var(--glass-border)',
    background: 'rgba(0, 0, 0, 0.2)',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    outline: 'none',
  },
  textarea: {
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid var(--glass-border)',
    background: 'rgba(0, 0, 0, 0.2)',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    outline: 'none',
    resize: 'vertical',
    minHeight: '120px',
  }
};

export default Contact;
