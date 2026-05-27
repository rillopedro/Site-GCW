import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Juliana & Ricardo Santos',
    event: 'Casamento - Dezembro 2025',
    rating: 5,
    text: 'O trabalho do Lumière Studio superou todas as nossas expectativas. As fotos ficaram absolutamente deslumbrantes, capturando cada emoção e detalhe do nosso dia especial. A equipe foi discreta, profissional e extremamente talentosa.',
    image: 'https://images.unsplash.com/photo-1759054710581-c7745b02cb53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
  },
  {
    name: 'Marina Oliveira',
    event: 'Ensaio Gestante - Janeiro 2026',
    rating: 5,
    text: 'Uma experiência única e emocionante! A fotógrafa me fez sentir linda e confortável durante todo o ensaio. As fotos são verdadeiras obras de arte que vou guardar para sempre.',
    image: 'https://images.unsplash.com/photo-1770199780470-1e6e3d30f8f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
  },
  {
    name: 'Tech Innovations Corp',
    event: 'Evento Corporativo - Março 2026',
    rating: 5,
    text: 'Contratamos o Lumière Studio para nosso lançamento de produto e ficamos impressionados com o profissionalismo e qualidade. As imagens estão sendo usadas em toda nossa campanha de marketing.',
    image: 'https://images.unsplash.com/photo-1768508665663-fa483a0cb208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
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
              DEPOIMENTOS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif italic text-black mb-4"
          >
            Clientes Satisfeitos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black/60 max-w-2xl mx-auto"
          >
            A opinião de quem confiou seus momentos mais especiais ao nosso trabalho
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 opacity-10" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: 'var(--color-gold)' }}
                  />
                ))}
              </div>

              <p className="text-black/80 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center">
                  <span className="text-[var(--color-gold)]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-black">{testimonial.name}</div>
                  <div className="text-xs text-black/50">{testimonial.event}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
