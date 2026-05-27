import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = ['Todos', 'Casamentos', 'Eventos', 'Ensaios'];

const portfolioImages = [
  {
    category: 'Casamentos',
    image: 'https://images.unsplash.com/photo-1774545272426-264af5db8d01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc4NjMxMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Romance Clássico',
  },
  {
    category: 'Casamentos',
    image: 'https://images.unsplash.com/photo-1768586471756-8237f5df0dc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc4NjMxMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Elegância Atemporal',
  },
  {
    category: 'Casamentos',
    image: 'https://images.unsplash.com/photo-1759054710581-c7745b02cb53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjB3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc4NjMxMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Pôr do Sol Romântico',
  },
  {
    category: 'Eventos',
    image: 'https://images.unsplash.com/photo-1768508665663-fa483a0cb208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb3Jwb3JhdGUlMjBldmVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Nzg2MzEwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Celebração Corporativa',
  },
  {
    category: 'Eventos',
    image: 'https://images.unsplash.com/photo-1768508948485-a7adc1f3427f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjb3Jwb3JhdGUlMjBldmVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Nzg2MzEwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Networking de Luxo',
  },
  {
    category: 'Ensaios',
    image: 'https://images.unsplash.com/photo-1770199780470-1e6e3d30f8f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjB3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc4NjMxMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Retrato Artístico',
  },
  {
    category: 'Casamentos',
    image: 'https://images.unsplash.com/photo-1761571259874-bb4871c44340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxsdXh1cnklMjB3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc4NjMxMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Detalhes Preciosos',
  },
  {
    category: 'Casamentos',
    image: 'https://images.unsplash.com/photo-1762848565064-cc6328d6dc53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxsdXh1cnklMjB3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc4NjMxMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Luxo Moderno',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredImages = activeCategory === 'Todos'
    ? portfolioImages
    : portfolioImages.filter(img => img.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
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
              NOSSO TRABALHO
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif italic text-black mb-4"
          >
            Portfólio Exclusivo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black/60 max-w-2xl mx-auto"
          >
            Cada imagem conta uma história única de amor, celebração e momentos inesquecíveis
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-black/70 hover:bg-[var(--color-gold)] hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((item, index) => (
            <motion.div
              key={`${item.category}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-serif italic mb-1">{item.title}</h3>
                  <p className="text-[var(--color-gold)] text-sm tracking-wide">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
