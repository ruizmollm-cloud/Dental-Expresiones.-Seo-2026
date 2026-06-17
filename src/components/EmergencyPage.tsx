import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, AlertCircle, CheckCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function EmergencyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  const emergencies = [
    '¿Diente astillado?',
    '¿Perdiste un relleno o corona?',
    '¿Problemas con muela del juicio?',
    '¿Sangrado de dientes o encías?',
    'Dental Expresiones puede atenderte'
  ];

  const steps = [
    {
      number: 1,
      title: 'Agenda tu cita',
      description: 'Reserva tu cita de emergencia en línea. Las citas del mismo día están disponibles tan pronto como una hora después de contactarnos. Los pacientes existentes también pueden recibir actualizaciones por correo electrónico y mensaje de texto.'
    },
    {
      number: 2,
      title: 'Examen Inicial (60 minutos)',
      description: 'Nuestro equipo de expertos tomará radiografías para que tu dentista pueda identificar rápidamente la causa raíz y crear un plan de atención personalizado. Revisaremos los siguientes pasos y el costo contigo, en términos claros y simples.'
    },
    {
      number: 3,
      title: 'Tratamiento',
      description: 'Procederemos con el tratamiento de emergencia necesario para aliviar tu dolor y resolver el problema dental. Nuestro equipo te explicará cada paso del proceso.'
    },
    {
      number: 4,
      title: 'Seguimiento',
      description: 'Te proporcionaremos instrucciones detalladas de cuidado posterior y programaremos citas de seguimiento según sea necesario para asegurar tu recuperación completa.'
    }
  ];

  const faqs = [
    {
      question: '¿Qué sucede durante un examen de emergencia?',
      answer: 'Tu dentista evaluará tu caso y usará los recursos diagnósticos que sean necesarios —como radiografías o escáner 3D— para identificar la causa del problema. A partir de ahí, controlará la emergencia y, si se requiere, definirá un plan de tratamiento para el seguimiento, explicándote todo en términos claros y simples.'
    },
    {
      question: '¿Cuándo debo ir al dentista por una emergencia?',
      answer: 'Debes buscar atención dental de emergencia si experimentas dolor dental severo, sangrado que no se detiene, diente roto o astillado, pérdida de un relleno o corona, infección dental, o cualquier trauma dental. No esperes si el dolor es intenso o hay inflamación significativa.'
    },
    {
      question: '¿Qué se considera una emergencia dental?',
      answer: 'Una emergencia dental incluye situaciones como dolor intenso, sangrado incontrolable, dientes rotos o astillados, pérdida de dientes, infecciones con inflamación facial, abscesos dentales, o cualquier trauma que afecte tus dientes o encías. Si tienes dudas, contáctanos para evaluar tu situación.'
    },
    {
      question: '¿Cuánto cuesta un examen de emergencia?',
      answer: 'El costo del examen de emergencia varía según la complejidad del caso y el tratamiento necesario. Durante tu visita inicial, te proporcionaremos un presupuesto detallado antes de proceder con cualquier tratamiento. Contáctanos para obtener información específica sobre costos.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/portada-servicios.png)' }}>
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
              Dentista de Emergencia -<br />Examen y Tratamiento
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20necesito%20atención%20de%20emergencia%20dental"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dental-gray text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-dental-gray/90 transition-all duration-300 hover:scale-105"
              >
                Agendar Cita de Emergencia
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
                ¿Atención el Mismo Día para<br />Emergencias Dentales?<br />Te Tenemos Cubierto.
              </h2>

              <ul className="space-y-4">
                {emergencies.map((emergency, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-dental-gray flex-shrink-0 mt-0.5" />
                    <span className="text-dental-gray/80 text-lg">{emergency}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20necesito%20atención%20de%20emergencia%20dental"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Agendar Cita de Emergencia
                </a>
                <a
                  href="tel:+50255139358"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-all duration-300 inline-flex items-center justify-center"
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img
                  src="/Dolor_Dental.jpg"
                  alt="Paciente dental de emergencia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coral-400 to-coral-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-10 w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-20 right-40 w-3 h-3 bg-teal-300 rounded-full"></div>
          <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-blue-300 rounded-full"></div>
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
            Atención Dental de Emergencia Paso a Paso
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
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
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
            <a
              href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dental-gray text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-dental-gray/90 transition-all duration-300 hover:scale-105"
            >
              Agendar Ahora
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-400">
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
            <AlertCircle className="w-16 h-16 text-teal-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-dental-gray mb-6">
              ¿Necesitas Atención de Emergencia?
            </h2>
            <p className="text-xl text-dental-gray/80 mb-8">
              No esperes. Contáctanos inmediatamente para recibir la atención que necesitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20necesito%20atención%20de%20emergencia%20dental"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Agendar Cita de Emergencia
              </a>
              <a
                href="tel:+50255139358"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-all duration-300 inline-flex items-center justify-center"
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
