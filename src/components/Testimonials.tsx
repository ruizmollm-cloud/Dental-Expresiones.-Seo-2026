import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: 'Excelente atención desde que entras. Me hicieron un blanqueamiento dental y los resultados superaron mis expectativas. El Dr. y su equipo son muy profesionales.',
      author: 'María Silva',
      service: 'Blanqueamiento Dental',
      initials: 'MS',
      color: 'from-teal-500 to-teal-600',
    },
    {
      rating: 5,
      text: 'Después de años sin sonreír por mis dientes, decidí ponerme implantes. Fue la mejor decisión. El proceso fue más sencillo de lo que pensaba y el resultado es increíble.',
      author: 'Carlos Ramírez',
      service: 'Implantes Dentales',
      initials: 'CR',
      color: 'from-blue-500 to-blue-600',
    },
    {
      rating: 5,
      text: 'Mi hija de 12 años necesitaba ortodoncia y aquí la trataron con mucho cariño y paciencia. Los resultados van muy bien y ella está feliz con sus brackets.',
      author: 'Ana Patricia López',
      service: 'Ortodoncia',
      initials: 'AP',
      color: 'from-rose-500 to-rose-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Testimonios</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900">
            Lo Que Dicen Nuestros Pacientes
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-teal-600">{testimonial.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
