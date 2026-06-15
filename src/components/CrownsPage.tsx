import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Crown, CheckCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function CrownsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  const benefits = [
    'Restauración completa de dientes dañados',
    'Coronas de porcelana de alta calidad',
    'Resultados estéticos permanentes',
    'Durabilidad de 10-15 años o más',
    'Funcionalidad completamente restaurada',
    'Ajuste personalizado para tu sonrisa'
  ];

  const steps = [
    {
      number: 1,
      title: 'Consulta y Evaluación',
      description: 'Durante tu primera consulta, evaluaremos el estado de tu diente y discutiremos las opciones disponibles. Tomaremos radiografías para asegurar un diagnóstico preciso y explicaremos el proceso completo.'
    },
    {
      number: 2,
      title: 'Preparación del Diente',
      description: 'Prepararemos el diente removiendo cualquier área dañada o decaída. Luego crearemos una impresión digital o física que se utilizará para fabricar tu corona personalizada.'
    },
    {
      number: 3,
      title: 'Corona Temporal',
      description: 'Mientras se fabrica tu corona permanente, colocaremos una corona temporal para proteger el diente preparado. Esta puede durar de 2 a 3 semanas mientras se completa tu corona definitiva.'
    },
    {
      number: 4,
      title: 'Colocación Final',
      description: 'Una vez lista tu corona permanente, la colocaremos y ajustaremos para asegurar un ajuste perfecto y una mordida cómoda. Realizaremos cualquier ajuste necesario para tu máxima comodidad.'
    }
  ];

  const faqs = [
    {
      question: '¿Cuánto tiempo dura una corona dental?',
      answer: 'Las coronas de porcelana de alta calidad pueden durar de 10 a 15 años o más con el cuidado adecuado. La longevidad depende de tus hábitos de higiene bucal, tu dieta y el cuidado que le des a la corona.'
    },
    {
      question: '¿Es doloroso el proceso de colocación de corona?',
      answer: 'No, el proceso no es doloroso. Utilizamos anestesia local para adormecer el diente y el área circundante. Podrías sentir presión durante la preparación, pero no debería haber dolor. Si sientes molestia, comunícalo inmediatamente.'
    },
    {
      question: '¿Cuál es el costo de una corona dental?',
      answer: 'El costo varía según el tipo de corona y la complejidad del caso. Durante tu consulta inicial, te proporcionaremos un presupuesto detallado. Contáctanos para obtener información específica sobre precios y opciones de pago.'
    },
    {
      question: '¿Necesito cuidados especiales después de una corona?',
      answer: 'Las coronas requieren el mismo cuidado que los dientes naturales: cepillado diario, uso de hilo dental y visitas regulares al dentista. Evita morder objetos duros directamente sobre la corona para prolongar su vida útil.'
    },
    {
      question: '¿Puedo notar que tengo una corona?',
      answer: 'No. Nuestras coronas están diseñadas para verse y sentirse como dientes naturales. Coinciden perfectamente con el color y forma de tus dientes existentes, por lo que nadie podrá notar que tienes una corona.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/Assets/image.png)' }}>
        <div className="absolute inset-0 bg-dental-gray/30"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-white/90 font-semibold mb-8 transition-colors text-lg"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Volver al inicio
          </Link>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/90 font-semibold text-sm tracking-wider mb-4">SERVICIOS</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              Coronas y Puentes -<br />Restauración Dental Completa
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-700 transition-all duration-300 hover:scale-105"
              >
                Agendar Cita
              </a>
              <a
                href="tel:+50255139358"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                Llamar al +502 5513-9358
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-dental-gray mb-6">
                Restaura tu Sonrisa<br />con Coronas Dentales
              </h2>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-dental-gray/80 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => {
                    window.location.href = '/#contacto';
                  }}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Agendar Cita
                </button>
                <a
                  href="tel:+50255139358"
                  className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Llamar
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[240px] sm:h-[320px] lg:h-[400px] max-w-sm mx-auto lg:max-w-none">
                <img
                  src="/coronas_y_puentes.jpg"
                  alt="Coronas y puentes dentales"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-400 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-10 w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-20 right-40 w-3 h-3 bg-blue-300 rounded-full"></div>
          <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-teal-300 rounded-full"></div>
          <div className="absolute top-1/2 right-20 w-4 h-4 bg-yellow-400 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-dental-gray text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Proceso de Colocación de Corona Paso a Paso
          </motion.h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-cream-50 rounded-2xl p-8 shadow-sm"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dental-gray mb-3">
                      {step.title}
                    </h3>
                    <p className="text-dental-gray/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={() => {
                window.location.href = '/#contacto';
              }}
              className="bg-dental-gray text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-dental-gray/90 transition-all duration-300 hover:scale-105"
            >
              Agendar Ahora
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-300">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-dental-gray text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Preguntas Frecuentes
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-dental-gray pr-8">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-dental-gray flex-shrink-0">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-dental-gray/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Crown className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-dental-gray mb-6">
              Recupera tu Sonrisa Perfecta
            </h2>
            <p className="text-xl text-dental-gray/80 mb-8">
              Las coronas dentales son la solución perfecta para restaurar dientes dañados. Contáctanos hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  window.location.href = '/#contacto';
                }}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Agendar Cita
              </button>
              <a
                href="tel:+50255139358"
                className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                +502 5513-9358
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
