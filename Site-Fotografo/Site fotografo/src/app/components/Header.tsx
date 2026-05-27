import { useState } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Serviços', href: '#services' },
    { label: 'Pacotes', href: '#pricing' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <Camera className="w-8 h-8" style={{ color: 'var(--color-gold)' }} />
              <div className="absolute -inset-1 bg-[var(--color-gold)] opacity-20 blur-md rounded-full group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div>
              <div className="font-serif italic tracking-wider" style={{ color: 'var(--color-gold)' }}>Lumière</div>
              <div className="text-xs tracking-widest text-black/60">STUDIO</div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-wide text-black/70 hover:text-[var(--color-gold)] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              className="px-6 py-2.5 bg-black text-white text-sm tracking-wide hover:bg-[var(--color-gold)] hover:text-black transition-all duration-300"
            >
              Agendar Sessão
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm tracking-wide text-black/70 hover:text-[var(--color-gold)] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#booking"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-6 py-2.5 bg-black text-white text-sm tracking-wide hover:bg-[var(--color-gold)] hover:text-black transition-all"
                >
                  Agendar Sessão
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
