import { tattooStyles } from '../config/artist';

export default function TattooStyles() {
  return (
    <section id="estilos" className="py-24 md:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">Especialidades</p>
          <h2 className="section-title">Estilos de Tatuaje</h2>
          <p className="section-subtitle mx-auto mt-4">
            Cada estilo tiene su propia esencia. Encuentra el que mejor represente tu historia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tattooStyles.map((style) => (
            <div
              key={style.id}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                  {style.name}
                </h3>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {style.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
