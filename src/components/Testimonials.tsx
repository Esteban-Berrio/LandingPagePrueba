import { Star } from 'lucide-react';
import { testimonials } from '../config/artist';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">Testimonios</p>
          <h2 className="section-title">Lo Que Dicen Mis Clientes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-dark-700/50 rounded-2xl p-8 border border-white/5 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.comment}"</p>
              <p className="text-white font-semibold">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
