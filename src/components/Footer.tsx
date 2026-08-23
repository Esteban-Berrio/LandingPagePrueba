import { Instagram, Facebook, Video, MessageCircle } from 'lucide-react';
import { artist, socialLinks, whatsappLink } from '../config/artist';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl text-white mb-2">{artist.name}</p>
            <p className="text-gray-500 text-sm">{artist.profession}</p>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
              aria-label="TikTok"
            >
              <Video size={18} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-green-500 hover:bg-green-500/10 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {artist.name}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
