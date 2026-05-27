import { motion } from 'motion/react';
import { Heart, Building2, Users, Camera } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Casamentos de Luxo',
    description: 'Cobertura completa do seu grande dia, desde os preparativos até a celebração final, com estética cinematográfica premium.',
    features: ['Ensaio pré-wedding', 'Cobertura completa', 'Álbum de luxo', 'Vídeo cinemático'],
  },
  {
    icon: Building2,
    title: 'Eventos Corporativos',
    description: 'Documentação profissional de conferências, lançamentos e celebrações empresariais com elegância e discrição.',
    features: ['Fotografia de evento', 'Retratos executivos', 'Entrega rápida', 'Edição premium'],
  },
  {
    icon: Users,
    title: 'Ensaios Exclusivos',
    description: 'Sessões fotográficas personalizadas para famílias, casais e indivíduos em locações únicas e sofisticadas.',
    features: ['Locações premium', 'Consultoria de estilo', 'Edição artística', 'Impressões fine art'],
  },
  {
    icon: Camera,
    title: 'Editoriais de Moda',
    description: 'Produção de editoriais fashion e lifestyle com conceito autoral e acabamento de alta qualidade.',
    features: ['Direção criativa', 'Equipe completa', 'Pós-produção avançada', 'Uso comercial'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-black text-white">
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
              NOSSOS SERVIÇOS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif italic mb-4"
          >
            Excelência em Cada Projeto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Soluções fotográficas premium adaptadas às suas necessidades mais exclusivas
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 border border-white/10 hover:border-[var(--color-gold)]/40 transition-all duration-500 hover:bg-white/5"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 border-2 border-[var(--color-gold)] mb-4">
                    <Icon className="w-7 h-7" style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <h3 className="text-2xl font-serif italic mb-3">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1 h-1 bg-[var(--color-gold)] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
