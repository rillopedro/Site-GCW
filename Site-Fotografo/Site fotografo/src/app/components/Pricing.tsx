import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Essencial',
    price: 'R$ 3.500',
    description: 'Perfeito para ensaios e pequenos eventos',
    features: [
      '4 horas de cobertura',
      '150 fotos editadas',
      'Galeria online privada',
      'Entrega em 15 dias',
      'Consultoria de locação',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: 'R$ 7.500',
    description: 'Ideal para casamentos e eventos especiais',
    features: [
      '8 horas de cobertura',
      '400 fotos editadas',
      'Álbum digital premium',
      'Galeria online privada',
      'Entrega em 21 dias',
      'Segundo fotógrafo',
      'Ensaio pré-wedding incluso',
    ],
    popular: true,
  },
  {
    name: 'Exclusivo',
    price: 'R$ 15.000',
    description: 'A experiência completa de luxo',
    features: [
      'Cobertura ilimitada',
      '600+ fotos editadas',
      'Álbum fine art personalizado',
      'Vídeo cinemático (5-7min)',
      'Galeria online privada',
      'Entrega em 30 dias',
      'Equipe completa',
      'Ensaio pré e pós-evento',
      'Impressões fine art',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-gray-50">
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
              INVESTIMENTO
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif italic text-black mb-4"
          >
            Pacotes Personalizados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black/60 max-w-2xl mx-auto"
          >
            Escolha o pacote ideal para o seu evento ou solicite um orçamento personalizado
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white p-8 ${
                pkg.popular
                  ? 'border-2 border-[var(--color-gold)] shadow-2xl scale-105'
                  : 'border border-black/10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--color-gold)] text-black text-xs tracking-widest">
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-serif italic mb-2">{pkg.name}</h3>
                <p className="text-sm text-black/60 mb-4">{pkg.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl" style={{ color: 'var(--color-gold)' }}>{pkg.price}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-gold)' }} />
                    <span className="text-sm text-black/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center px-6 py-3 text-sm tracking-wide transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-black text-white hover:bg-[var(--color-gold)] hover:text-black'
                    : 'bg-gray-100 text-black hover:bg-black hover:text-white'
                }`}
              >
                Solicitar Orçamento
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 border border-[var(--color-gold)]/40 bg-white"
        >
          <h3 className="text-2xl font-serif italic mb-3">Precisa de algo personalizado?</h3>
          <p className="text-black/60 mb-6">
            Criamos pacotes sob medida para atender suas necessidades específicas
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[var(--color-gold)] text-black tracking-wide hover:bg-[var(--color-gold-dark)] transition-colors"
          >
            Falar com Especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
