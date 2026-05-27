import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Responderemos em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 border border-[var(--color-gold)]/40"
          >
            <span className="text-xs tracking-widest" style={{ color: 'var(--color-gold)' }}>
              FALE CONOSCO
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif italic text-black mb-4"
          >
            Entre em Contato
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black/60 max-w-2xl mx-auto"
          >
            Estamos prontos para transformar seus momentos especiais em memórias eternas
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif italic mb-6">Informações de Contato</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[var(--color-gold)] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <div>
                    <div className="text-sm text-black/50 mb-1">Telefone</div>
                    <div className="text-black">(11) 98765-4321</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[var(--color-gold)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <div>
                    <div className="text-sm text-black/50 mb-1">E-mail</div>
                    <div className="text-black">contato@lumierestudio.com.br</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[var(--color-gold)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <div>
                    <div className="text-sm text-black/50 mb-1">Localização</div>
                    <div className="text-black">São Paulo, Brasil</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 border border-black/10 flex items-center justify-center hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition-all group"
                >
                  <Instagram className="w-5 h-5 text-black/60 group-hover:text-[var(--color-gold)]" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-black/10 flex items-center justify-center hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition-all group"
                >
                  <Facebook className="w-5 h-5 text-black/60 group-hover:text-[var(--color-gold)]" />
                </a>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-l-4 border-[var(--color-gold)]">
              <h4 className="font-medium mb-2">Horário de Atendimento</h4>
              <p className="text-sm text-black/60">Segunda a Sexta: 9h às 18h</p>
              <p className="text-sm text-black/60">Sábado: 9h às 14h</p>
              <p className="text-sm text-black/60">Domingo: Fechado</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm text-black/70 mb-2">Nome</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-black/10 focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label className="block text-sm text-black/70 mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-black/10 focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm text-black/70 mb-2">Assunto</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-black/10 focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                placeholder="Como podemos ajudar?"
              />
            </div>

            <div>
              <label className="block text-sm text-black/70 mb-2">Mensagem</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-50 border border-black/10 focus:border-[var(--color-gold)] focus:outline-none transition-colors resize-none"
                placeholder="Conte-nos sobre o que você precisa..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-black text-white tracking-wide hover:bg-[var(--color-gold)] hover:text-black transition-all flex items-center justify-center gap-2 group"
            >
              Enviar Mensagem
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
