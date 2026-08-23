import { Instagram, Facebook, Video } from 'lucide-react';
import { socialLinks } from '../config/artist';

export default function SocialLinks() {
  return (
    <section className="py-16 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">Sígueme</p>
          <h2 className="section-title text-4xl md:text-5xl">Redes Sociales</h2>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
            aria-label="TikTok"
          >
            <Video size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
