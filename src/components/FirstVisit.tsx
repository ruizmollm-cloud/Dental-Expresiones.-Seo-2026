import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FirstVisit() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dental-gray mb-6">
            Qué esperar de tu primera visita
          </h2>
          <p className="text-xl text-dental-gray/80 max-w-3xl mx-auto mb-8">
            Tu primera consulta es el paso más importante hacia la sonrisa que siempre has soñado.
            Conoce todo lo que haremos juntos en tu primera visita.
          </p>
          <Link
            to="/servicio/primera-consulta"
            className="inline-flex items-center bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-teal-600 hover:to-teal-700"
          >
            Conocer más sobre la primera consulta
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
