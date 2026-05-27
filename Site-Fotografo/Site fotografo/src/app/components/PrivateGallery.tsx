import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Eye } from 'lucide-react';

export default function PrivateGallery() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'demo123') {
      setIsAuthenticated(true);
    } else {
      alert('Senha incorreta. Tente: demo123');
    }
  };

  if (isAuthenticated) {
    return (
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif italic mb-4">Sua Galeria Privada</h2>
            <p className="text-black/60">Suas fotos exclusivas estão disponíveis para download</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-white border border-black/10 flex items-center justify-center">
                <Eye className="w-8 h-8 text-black/20" />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-[var(--color-gold)] text-black tracking-wide hover:bg-[var(--color-gold-dark)] transition-colors">
              Baixar Todas (ZIP)
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-6 py-3 bg-gray-200 text-black tracking-wide hover:bg-gray-300 transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 border-2 border-[var(--color-gold)] mb-6"
          >
            <Lock className="w-8 h-8" style={{ color: 'var(--color-gold)' }} />
          </motion.div>
          <h2 className="text-3xl font-serif italic mb-3">Galeria Privada</h2>
          <p className="text-black/60">
            Acesse suas fotos exclusivas com a senha fornecida por e-mail
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-black/70 mb-2">Senha de Acesso</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white border border-black/10 focus:border-[var(--color-gold)] focus:outline-none transition-colors"
              placeholder="Digite sua senha"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-black text-white tracking-wide hover:bg-[var(--color-gold)] hover:text-black transition-all"
          >
            Acessar Galeria
          </button>

          <p className="text-xs text-center text-black/50">
            Não recebeu sua senha? <a href="#contact" className="text-[var(--color-gold)] hover:underline">Entre em contato</a>
          </p>
        </form>
      </div>
    </section>
  );
}
