import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?', isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg = { id: Date.now(), text: inputValue, isBot: false };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');

    setTimeout(() => {
      const botResponses = [
        "¡Qué interesante! Si deseas contactar a Luis Anderson, te sugiero enviarle un correo o usar el formulario de contacto.",
        "Actualmente estoy en versión de prueba (simulación), ¡pero pronto tendré IA integrada!",
        "Luis Anderson es experto en React, Node.js y Unity. ¿Quieres saber más sobre alguna de estas tecnologías?",
        "Puedes ver los proyectos de Luis Anderson en la sección de arriba o en su GitHub."
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: randomResponse,
        isBot: true
      }]);
    }, 1000);
  };

  return (
    <>
      {}
      <motion.button
        className="chatbot-fab"
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={styles.fab}
      >
        <MessageCircle size={28} />
      </motion.button>

      {}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={styles.chatWindow}
            className="glass-card"
          >
            {}
            <div style={styles.chatHeader}>
              <div style={styles.headerTitle}>
                <Bot size={24} color="var(--accent-secondary)" />
                <span style={{ fontWeight: 'bold' }}>Asistente Virtual</span>
              </div>
              <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
                <X size={20} />
              </button>
            </div>

            {}
            <div style={styles.chatBody}>
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  style={{
                    ...styles.messageContainer,
                    justifyContent: msg.isBot ? 'flex-start' : 'flex-end'
                  }}
                >
                  <div style={{
                    ...styles.messageBubble,
                    background: msg.isBot ? 'rgba(255,255,255,0.1)' : 'var(--accent-primary)',
                    color: msg.isBot ? 'var(--text-primary)' : '#fff',
                    borderRadius: msg.isBot ? '12px 12px 12px 2px' : '12px 12px 2px 12px'
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {}
            <form onSubmit={handleSend} style={styles.chatFooter}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe un mensaje..."
                style={styles.input}
              />
              <button type="submit" style={styles.sendBtn} disabled={!inputValue.trim()}>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const styles = {
  fab: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'var(--accent-primary)',
    color: '#fff',
    border: 'none',
    boxShadow: '0 10px 25px rgba(109, 40, 217, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 9999,
  },
  chatWindow: {
    position: 'fixed',
    bottom: '90px',
    right: '20px',
    width: '350px',
    height: '450px',
    maxWidth: 'calc(100vw - 40px)',
    maxHeight: 'calc(100vh - 120px)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    zIndex: 9999,
    boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
  },
  chatHeader: {
    padding: '1rem',
    background: 'rgba(5, 5, 5, 0.9)',
    borderBottom: '1px solid var(--glass-border)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  closeBtn: {
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    border: 'none',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.3s ease',
  },
  chatBody: {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    background: 'rgba(20,20,20,0.95)',
  },
  messageContainer: {
    display: 'flex',
    width: '100%',
  },
  messageBubble: {
    padding: '0.8rem 1rem',
    maxWidth: '85%',
    fontSize: '0.9rem',
    lineHeight: 1.4,
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
  },
  chatFooter: {
    padding: '1rem',
    background: 'rgba(5, 5, 5, 0.95)',
    borderTop: '1px solid var(--glass-border)',
    display: 'flex',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '0.8rem 1rem',
    borderRadius: '20px',
    border: '1px solid var(--glass-border)',
    background: 'rgba(255,255,255,0.08)',
    color: 'var(--text-primary)',
    outline: 'none',
    fontSize: '0.9rem',
    transition: 'border-color 0.3s ease'
  },
  sendBtn: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: 'var(--accent-secondary)',
    color: '#fff',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(59, 130, 246, 0.4)'
  }
};

export default Chatbot;
