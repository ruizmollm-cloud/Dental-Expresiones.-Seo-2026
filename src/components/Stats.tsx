import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = duration / frameRate;

    const yearsTarget = 20;
    const clientsTarget = 5000;

    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setYearsCount(Math.floor(yearsTarget * progress));
      setClientsCount(Math.floor(clientsTarget * progress));

      if (frame >= totalFrames) {
        clearInterval(counter);
        setYearsCount(yearsTarget);
        setClientsCount(clientsTarget);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [isVisible]);

  return (
    <section id="stats-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-dental-teal mb-3">
              {Math.floor(yearsCount)}+
            </div>
            <div className="text-lg text-dental-gray font-medium">
              Años de Experiencia
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-dental-teal mb-3">
              {Math.floor(clientsCount).toLocaleString()}+
            </div>
            <div className="text-lg text-dental-gray font-medium">
              Pacientes Satisfechos
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
