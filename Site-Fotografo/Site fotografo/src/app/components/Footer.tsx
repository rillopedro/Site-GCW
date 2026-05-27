import { Camera, Instagram, Facebook, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <Camera className="w-8 h-8" style={{ color: 'var(--color-gold)' }} />
                <div className="absolute -inset-1 bg-[var(--color-gold)] opacity-20 blur-md rounded-full group-hover:opacity-30 transition-opacity"></div>
              </div>
              <div>
                <div className="font-serif italic tracking-wider text-xl" style={{ color: 'var(--color-gold)' }}>
                  Lumière
                </div>
                <div className="text-xs tracking-widest text-white/60">STUDIO</div>
              </div>
            </a>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Transformando momentos preciosos em memórias eternas através da arte
              da fotografia de luxo e sofisticação cinematográfica.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 tracking-wide">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">
                  Pacotes
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4 tracking-wide">Contato</h4>
            <ul className="space-y-3">
              <li className="text-white/60 text-sm">
                São Paulo, Brasil
              </li>
              <li>
                <a href="tel:+5511987654321" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">
                  (11) 98765-4321
                </a>
              </li>
              <li>
                <a href="mailto:contato@lumierestudio.com.br" className="text-white/60 hover:text-[var(--color-gold)] transition-colors text-sm">
                  contato@lumierestudio.com.br
                </a>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition-all group"
              >
                <Instagram className="w-5 h-5 text-white/60 group-hover:text-[var(--color-gold)]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition-all group"
              >
                <Facebook className="w-5 h-5 text-white/60 group-hover:text-[var(--color-gold)]" />
              </a>
              <a
                href="mailto:contato@lumierestudio.com.br"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition-all group"
              >
                <Mail className="w-5 h-5 text-white/60 group-hover:text-[var(--color-gold)]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>
              © {currentYear} Lumière Studio. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-2">
              Feito com <Heart className="w-4 h-4" style={{ color: 'var(--color-gold)' }} /> para capturar momentos eternos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
