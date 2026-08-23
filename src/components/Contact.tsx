import { MessageCircle, MapPin, Clock, Instagram } from 'lucide-react';
import { artist, socialLinks, whatsappLink } from '../config/artist';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">Contacto</p>
            <h2 className="section-title mb-6">Hablemos de Tu Idea</h2>
            <p className="text-gray-400 text-lg mb-10">
              ¿Listo para convertir tu idea en arte permanente? Contáctame y hagamos realidad tu próximo tatuaje.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">WhatsApp</p>
                  <p className="text-white">{artist.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Ubicación</p>
                  <p className="text-white">{artist.city}, {artist.country}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Horario</p>
                  <p className="text-white">{artist.workingHours}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Instagram size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Instagram</p>
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent transition-colors"
                  >
                    @{artist.name.toLowerCase().replace(' ', '')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-dark-700 rounded-3xl p-10 md:p-14 text-center border border-white/5 w-full max-w-md">
              <h3 className="font-display text-3xl text-white mb-4">¿Listo para tatuarte?</h3>
              <p className="text-gray-400 mb-8">
                Reserva tu cita directamente por WhatsApp y comencemos a planificar tu próximo tatuaje.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-lg py-4"
              >
                <MessageCircle size={24} />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
