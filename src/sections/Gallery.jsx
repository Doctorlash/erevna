// src/sections/Gallery.jsx
import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'src/assets/pic1.jpg',
  'src/assets/pic2.jpg',
  'src/assets/pic3.jpg',
  'src/assets/pic4.jpg',
  'src/assets/pic5.jpg',
  'src/assets/pic6.jpg',
  'src/assets/pic7.jpg',
  'src/assets/pic8.jpg',
  'src/assets/pic9.jpg',
  'src/assets/pic10.jpg',
  'src/assets/pic11.jpg',
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  
    return (
    <section id="gallery" className="py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif text-gold text-center mb-20"
        >
          Moments of Transformation
        </motion.h2>

        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
          {/* Main Sliding Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Erevna Leadership Academy moment ${currentIndex + 1}`}
              className="w-full h-96 md:h-screen max-h-screen object-cover"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-gold text-5xl hover:text-gold-light transition z-10"
          >
            ‹
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/web:2translate-y-1/2 text-gold text-5xl hover:text-gold-light transition z-10"
          >
            ›
          </button>

          {/* Caption */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-cream">
            <p className="text-xl md:text-2xl font-serif bg-navy/60 px-8 py-3 rounded-full backdrop-blur">
              Young Leaders in Action
            </p>
          </div>
        </div>

        {/* Thumbnail Dots */}
        <div className="flex justify-center gap-3 mt-10 flex-wrap">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gold w-12'
                  : 'bg-cream/40 hover:bg-cream/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}