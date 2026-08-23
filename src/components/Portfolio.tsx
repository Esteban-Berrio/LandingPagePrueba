import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioImages } from '../config/artist';

const filters = [
  { id: 'all', label: 'Todos' },
  { id: 'blackwork', label: 'Blackwork' },
  { id: 'realism', label: 'Realismo' },
  { id: 'fineline', label: 'Fine Line' },
  { id: 'lettering', label: 'Lettering' },
  { id: 'geometric', label: 'Geométrico' },
  { id: 'anime', label: 'Anime' },
  { id: 'Realismo de gatos', label: 'Gatos' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeFilter === 'all'
    ? portfolioImages
    : portfolioImages.filter((img) => img.style === activeFilter);

  const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1].id);
    } else {
      setSelectedImage(filteredImages[filteredImages.length - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1].id);
    } else {
      setSelectedImage(filteredImages[0].id);
    }
  };

  const selectedImageData = filteredImages.find((img) => img.id === selectedImage);

  return (
    <section id="trabajos" className="py-24 md:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">Portafolio</p>
          <h2 className="section-title">Mis Trabajos</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-accent text-white'
                  : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ aspectRatio: index % 5 === 0 ? '1/1' : '1/1' }}
              />
              <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white font-semibold">{image.title}</p>
                  <p className="text-gray-400 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && selectedImageData && (
        <div
          className="fixed inset-0 z-50 bg-dark-900/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft size={40} />
          </button>

          <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImageData.src}
              alt={selectedImageData.title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-900 to-transparent rounded-b-lg">
              <p className="text-white text-xl font-semibold">{selectedImageData.title}</p>
              <p className="text-gray-400">{selectedImageData.description}</p>
            </div>
          </div>

          <button
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}
