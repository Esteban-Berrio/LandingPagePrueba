import { MapPin, Award, Clock, Users } from 'lucide-react';
import { artist } from '../config/artist';
import artistPhoto from '../assets/artist/artist.jpg';

export default function About() {
  const stats = [
    { icon: Award, value: `+${artist.yearsExperience}`, label: 'Años de experiencia' },
    { icon: Users, value: `+${artist.tattoosDone}`, label: 'Tatuajes realizados' },
    { icon: MapPin, value: artist.city, label: 'Ubicación' },
    { icon: Clock, value: '24/7', label: 'Disponibilidad' },
  ];

  return (
    <section id="sobre-mi" className="py-24 md:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={artistPhoto}
                alt={artist.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">Sobre mí</p>
              <h2 className="section-title mb-6">{artist.name}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {artist.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-dark-700/50 rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-colors duration-300"
                >
                  <stat.icon className="text-accent mb-3" size={24} />
                  <p className="text-2xl md:text-3xl font-display text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
