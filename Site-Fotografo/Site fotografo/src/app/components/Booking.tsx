import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitação de agendamento enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 border border-[var(--color-gold)]/40"
          >
            <span className="text-xs tracking-widest" style={{ color: 'var(--color-gold)' }}>
              RESERVE SUA DATA
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif italic mb-4"
          >
            Agende Sua Sessão
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar disponibilidade
          </motion.p>
        </div>

        {/* Booking Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm text-white/70 mb-2">
                <User className="w-4 h-4" />
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-white/70 mb-2">
                <Mail className="w-4 h-4" />
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-white/70 mb-2">
                <Phone className="w-4 h-4" />
                Telefone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-white/70 mb-2">
                <Calendar className="w-4 h-4" />
                Tipo de Evento
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:border-[var(--color-gold)] focus:outline-none transition-colors appearance-none"
              >
                <option value="" className="bg-black">Selecione...</option>
                <option value="casamento" className="bg-black">Casamento</option>
                <option value="evento-corporativo" className="bg-black">Evento Corporativo</option>
                <option value="ensaio-familia" className="bg-black">Ensaio Família</option>
                <option value="ensaio-casal" className="bg-black">Ensaio Casal</option>
                <option value="ensaio-individual" className="bg-black">Ensaio Individual</option>
                <option value="outro" className="bg-black">Outro</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-sm text-white/70 mb-2">
                <Clock className="w-4 h-4" />
                Data Desejada
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:border-[var(--color-gold)] focus:outline-none transition-colors"
              />
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-sm text-white/70 mb-2">
                <MessageSquare className="w-4 h-4" />
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[var(--color-gold)] focus:outline-none transition-colors resize-none"
                placeholder="Conte-nos mais sobre o seu evento..."
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-[var(--color-gold)] text-black tracking-wide hover:bg-[var(--color-gold-light)] transition-colors"
          >
            Enviar Solicitação
          </button>
        </motion.form>
      </div>
    </section>
  );
}
