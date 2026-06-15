import { Check, Award, Users, Clock, Heart, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyUs() {
  const benefits = [
    {
      icon: Check,
      title: 'Atención Personalizada',
      description: 'Cada paciente es único. Creamos planes de tratamiento adaptados a tus necesidades específicas y objetivos de salud dental.',
    },
    {
      icon: Award,
      title: 'Tecnología de Vanguardia',
      description: 'Equipamiento de última generación para diagnósticos precisos y tratamientos más efectivos y cómodos.',
    },
    {
      icon: Users,
      title: 'Equipo Profesional Certificado',
      description: 'Dentistas especializados con formación continua, comprometidos con la excelencia y tu bienestar.',
    },
    {
      icon: Clock,
      title: 'Horarios Flexibles',
      description: 'Lunes a Viernes de 8 AM - 6 PM y Sábados de 8 AM - 1 PM. Nos adaptamos a tu agenda para que nunca faltes a tu cita.',
    },
    {
      icon: Heart,
      title: 'Ambiente Cómodo y Seguro',
      description: 'Instalaciones modernas con protocolos de higiene y esterilización de nivel hospitalario para tu tranquilidad.',
    },
    {
      icon: DollarSign,
      title: 'Planes de Financiamiento',
      description: 'Opciones de pago flexibles y planes de financiamiento para que tu sonrisa perfecta sea accesible.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="por-que-nosotros" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dental-gray">
            Tratamiento gentil y amigable desde nuestra clínica local
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative lg:sticky lg:top-24"
          >
            <img
              src="/image copy copy copy copy copy copy copy copy copy copy copy.png"
              alt="Sonrisa saludable"
              className="w-full max-w-md mx-auto h-auto rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="group bg-cream-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="space-y-4">
                    <div className="text-dental-gray/40 font-medium text-sm">
                      {String(index + 1).padStart(2, '0')}.
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dental-gray mb-3">{benefit.title}</h3>
                      <p className="text-dental-gray/80 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
