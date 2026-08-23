import { processSteps } from '../config/artist';

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">Proceso</p>
          <h2 className="section-title">¿Cómo Funciona?</h2>
          <p className="section-subtitle mx-auto mt-4">
            Un proceso simple y transparente para hacer realidad tu idea.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent -translate-x-1/2" />
              )}
              
              <div className="bg-dark-800 rounded-2xl p-8 border border-white/5 hover:border-accent/30 transition-colors duration-300 h-full">
                <div className="font-display text-6xl text-accent/30 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
