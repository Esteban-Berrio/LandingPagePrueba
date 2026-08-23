import { ChevronDown, MessageCircle } from 'lucide-react';
import { artist, whatsappLink } from '../config/artist';
import artistPhoto from '../assets/artist/artist.jpg';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/95 to-dark-900 z-10" />
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${artistPhoto})` }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center animate-fade-in">
          <p className="text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-4">
            {artist.profession}
          </p>
          
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-wide mb-6">
            {artist.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light italic">
            "{artist.shortDescription}"
          </p>
          
          <p className="text-gray-500 max-w-xl mx-auto mb-10 text-base md:text-lg">
            {artist.description.substring(0, 100)}...
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              <MessageCircle size={22} />
              Reservar cita
            </a>
            <a
              href="#trabajos"
              className="btn-secondary text-lg px-8 py-4"
            >
              Ver portafolio
              <ChevronDown size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={32} className="text-gray-500" />
      </div>
    </section>
  );
}
