import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={styles.header}
      >
        <h2 style={styles.title}>Ponte en <span className="text-gradient">Contacto</span></h2>
      </motion.div>

      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.infoBox}
        >
          <h3 style={styles.infoTitle}>Información de Contacto</h3>
          <p style={styles.infoText}>¿Tienes un proyecto en mente? Hablemos de cómo puedo ayudarte a hacerlo realidad.</p>
          
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
                <span style={styles.contactText}>Lima, Perú</span>
                <span style={styles.contactText}>Trujillo, Perú</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={styles.form}
        >
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nombre</label>
            <input type="text" style={styles.input} placeholder="Tu nombre" />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" style={styles.input} placeholder="tu@email.com" />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Mensaje</label>
            <textarea style={styles.textarea} placeholder="¿Cómo puedo ayudarte?" rows="4"></textarea>
          </div>
          
          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Enviar Mensaje <Send size={18} />
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
