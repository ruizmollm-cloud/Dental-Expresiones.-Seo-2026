import { Sparkles, Microscope, Crown, Braces, FileText, Scissors, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const services = [
    {
      icon: AlertCircle,
      title: 'Examen de Emergencia',
      description: 'Atención dental urgente cuando más la necesitas. Tratamos dolor dental agudo, traumatismos y emergencias dentales.',
      features: ['Evaluación y diagnóstico clínico', 'Radiografías periapicales o escáner 3D si se consideran necesarias', 'Control de la emergencia / Seguimiento'],
      color: 'from-red-500 to-red-600',
      image: '/Dolor_Dental.jpg',
      serviceId: 'emergencias',
      customRoute: '/emergencias',
    },
    {
      icon: Microscope,
      title: 'Primera Consulta',
      description: 'El primer paso hacia tu sonrisa, con claridad y calma. Una evaluación completa donde te explicamos cada hallazgo y diseñamos un plan a tu medida, sin prisas ni tecnicismos.',
      features: ['Evaluación y diagnóstico clínico', 'Radiografías periapicales o escáner 3D cuando se requieran', 'Plan de tratamiento personalizado'],
      color: 'from-blue-500 to-blue-600',
      image: '/primera-consulta.png',
      serviceId: 'primera-consulta',
    },
    {
      icon: Sparkles,
      title: 'Blanqueamiento Dental',
      description: 'Tomar la decisión de iluminar tu sonrisa debe ser una experiencia cómoda y sin sorpresas. Nuestro enfoque en blanqueamiento dental en Carretera al Salvador se centra en el cuidado minucioso de tu sensibilidad. Evaluamos tu caso con total claridad, explicándote el proceso paso a paso para que recuperes un tono brillante y natural en un ambiente de absoluta calma, confianza y respaldo profesional.',
      features: ['Sesión de aproximadamente 1 hora', 'Consulta y limpieza dental previa requerida', 'Máximo blanqueamiento posible de forma segura, adaptado a tu tono natural'],
      color: 'from-teal-500 to-teal-600',
      image: '/blanqueamiento-dental.png',
      serviceId: 'blanqueamiento',
      customRoute: '/blanqueamiento',
    },
    {
      icon: Crown,
      title: 'Coronas y Puentes',
      description: 'Restauraciones dentales que devuelven funcionalidad y estética a tu sonrisa. Diseñadas a medida para resultados perfectos.',
      features: ['Porcelana de alta calidad', 'Ajuste perfecto', 'Durabilidad garantizada'],
      color: 'from-amber-500 to-amber-600',
      image: '/coronas_y_puentes.jpg',
      serviceId: 'coronas-puentes',
      customRoute: '/coronas-puentes',
    },
    {
      icon: Braces,
      title: 'Carillas Directas e Indirectas',
      description: 'El diseño de carillas directas e indirectas es un proceso artesanal y clínico que requiere, ante todo, entender tus expectativas. En lugar de aplicar soluciones genéricas, nos tomamos el tiempo de escuchar y analizar la armonía de tu rostro. Diseñamos con precisión y delicadeza en CAES, asegurándote un resultado discreto y natural, guiado por profesionales que priorizan tu tranquilidad y el cuidado de tu salud en cada sesión.',
      features: ['Procedimiento en una sola sesión', 'Resultados inmediatos', 'Mínima preparación dental'],
      color: 'from-rose-500 to-rose-600',
      image: '/images/carillas-dentales.jpg',
      imgPosition: 'center 70%',
      serviceId: null,
    },
    {
      icon: FileText,
      title: 'Rellenos Estéticos',
      description: 'Restauración avanzada utilizando resinas estéticas de alta durabilidad del mismo color de tu diente. Un tratamiento completamente libre de metales que devuelve la anatomía y funcionalidad dental con total discreción, ideal para quienes buscan cuidar su salud estética en un entorno profesional.',
      features: ['Materiales libres de mercurio', 'Estética superior', 'Proceso rápido'],
      color: 'from-emerald-500 to-emerald-600',
      image: '/images/rellenos-esteticos.jpg',
      serviceId: 'rellenos-esteticos',
      customRoute: '/rellenos-esteticos',
    },
    {
      icon: Scissors,
      title: 'Extracción de Cordales y Exodoncias',
      description: 'La necesidad de una extracción dental o de cordales suele venir acompañada de dudas y molestia física. Abordamos las exodoncias en CAES bajo un enfoque clínico sumamente cuidadoso, priorizando tu confort y explicándote el proceso con total transparencia. Nos aseguramos de que experimentes un procedimiento eficiente y te brindamos un plan de recuperación guiado para que regreses a tu rutina con total tranquilidad.',
      features: ['Enfoque clínico cuidadoso', 'Proceso explicado con transparencia', 'Control de la emergencia / seguimiento'],
      color: 'from-slate-500 to-slate-600',
      image: '/extraccion-cordales.png',
      imgPosition: 'center',
      serviceId: null,
    },
  ];

  const itemVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      },
    },
  };

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dental-gray text-balance">
            Servicios dentales en Carretera al Salvador y Fraijanes
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex flex-col md:flex-row">
                  {service.image ? (
                    <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{ objectPosition: (service as any).imgPosition || 'top' }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/30 to-transparent"></div>
                    </div>
                  ) : (
                    <div className={`md:w-1/2 h-64 md:h-auto bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <Icon className="w-24 h-24 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  )}

                  <div className="md:w-1/2 p-8 space-y-4 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-dental-gray">{service.title}</h3>
                    <p className="text-dental-gray/80 leading-relaxed">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-dental-teal mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-dental-gray/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <a
                        href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20agendar%20una%20cita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 hover:from-teal-600 hover:to-teal-700 text-center"
                      >
                        Agendar {service.title}
                      </a>
                      {service.serviceId && (
                        <Link
                          to={(service as any).customRoute || `/servicio/${service.serviceId}`}
                          className="border-2 border-dental-teal text-dental-teal px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 text-center"
                        >
                          Aprender más
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
