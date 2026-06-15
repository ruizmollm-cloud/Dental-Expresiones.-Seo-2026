import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, FileText, CheckCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function FillingsPage() {
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
    'Material de resina del color natural del diente',
    'Procedimiento seguro y efectivo',
    'Duración de 10-15 años',
    'Prevención de daños futuros'
  ];

  const steps = [
    {
      number: 1,
      title: 'Antes de tu Cita',
      description: 'Continúa tu higiene oral habitual antes del procedimiento. La mayoría de los rellenos requieren anestesia local, así que come de antemano para evitar mareos u otras reacciones.'
    },
    {
      number: 2,
      title: 'Durante tu Cita',
      description: 'El procedimiento comienza con anestesia local para tu comodidad. La porción cariada del diente se remueve, la cavidad se rellena con resina compuesta, y el diente se moldea y pule para una alineación adecuada.'
    },
    {
      number: 3,
      title: 'Después de tu Cita',
      description: 'Después de un relleno, la anestesia dura de 4 a 6 horas. Ten cuidado al comer para evitar morderte la mejilla o lengua. Reanuda el cepillado y uso de hilo dental, pero sé gentil alrededor del diente tratado durante los primeros días.'
    },
    {
      number: 4,
      title: 'Después de Salir de tu Cita',
      description: 'Espera sensibilidad por 1-2 semanas. El ibuprofeno puede ayudar si lo toleras. Si el dolor empeora o continúa, contacta a tu dentista. Si la mordida se siente alta en el relleno, regresa para un ajuste de mordida.'
    }
  ];

  const faqs = [
    {
      question: '¿Qué es un relleno dental?',
      answer: 'Un relleno dental es un procedimiento restaurador usado para reparar un diente dañado por caries o fracturas menores. Los rellenos están hechos de resina compuesta del color del diente y restauran la función natural, integridad y apariencia del diente mientras previenen daños futuros. Generalmente, un relleno dura de 10 a 15 años y puede necesitar ser reemplazado después de ese tiempo.'
    },
    {
      question: '¿Duele recibir un relleno?',
      answer: 'El procedimiento no debería doler. Utilizamos anestesia local para adormecer completamente el área antes de comenzar. Durante el tratamiento, podrás sentir presión pero no dolor. Después del procedimiento, una vez que la anestesia desaparezca, podrías experimentar algo de sensibilidad leve que es completamente normal y temporal.'
    },
    {
      question: '¿Qué debo esperar después de la cita?',
      answer: 'Después de un relleno, la anestesia dura de 4 a 6 horas, así que ten cuidado al comer para evitar morderte. Es normal experimentar sensibilidad por 1-2 semanas. Puedes tomar ibuprofeno si lo necesitas. Reanuda tu rutina normal de cepillado y uso de hilo dental, pero sé gentil alrededor del diente tratado. Si el dolor empeora o la mordida se siente alta, contáctanos para un ajuste.'
    },
    {
      question: '¿El seguro cubre los rellenos?',
      answer: 'La mayoría de los planes de seguro dental cubren los rellenos como parte de los procedimientos restauradores básicos, generalmente cubriendo entre el 70% y el 80% del costo después de cumplir con tu deducible. Sin embargo, la cobertura varía según tu plan específico. Te recomendamos contactar a tu proveedor de seguro para confirmar los detalles de tu cobertura. Nuestro equipo también puede ayudarte a verificar tus beneficios antes del tratamiento.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cream-100">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center text-dental-gray hover:text-dental-gray/80 font-semibold mb-8 transition-colors text-lg"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Volver al inicio
          </Link>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-dental-gray/70 font-semibold text-sm tracking-wider mb-4">SERVICIOS</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dental-gray mb-8">
              Rellenos Estéticos
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Agendar Cita
              </a>
              <a
                href="tel:+50255139358"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 inline-flex items-center justify-center"
              >
                Llamar al +502 5513-9358
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-dental-gray mb-6">
                ¿Qué es un Relleno?
              </h2>

              <p className="text-dental-gray/80 text-lg leading-relaxed mb-6">
                Un relleno dental es un procedimiento restaurador usado para reparar un diente dañado por caries o fracturas menores. Los rellenos están hechos de resina compuesta del color del diente y restauran la función natural, integridad y apariencia del diente mientras previenen daños futuros. Generalmente, un relleno dura de 10 a 15 años y puede necesitar ser reemplazado después de ese tiempo.
              </p>

              <p className="text-dental-gray/80 text-lg leading-relaxed mb-8">
                Los rellenos están indicados para dientes que tienen cavidades causadas por crecimiento bacteriano, pequeñas grietas o fracturas en el esmalte, o signos de desgaste debido a bruxismo u otras formas de estrés.
              </p>

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
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-dental-gray/80 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => {
                    window.location.href = '/#contacto';
                  }}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Agendar Cita
                </button>
                <a
                  href="tel:+50255139358"
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 inline-flex items-center justify-center"
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                <img
                  src="/rellenos-esteticos.jpg"
                  alt="Rellenos estéticos"
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
            El Proceso
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
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-coral-300">
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FileText className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-dental-gray mb-6">
              ¿Necesitas un Relleno Dental?
            </h2>
            <p className="text-xl text-dental-gray/80 mb-8">
              Agenda tu cita hoy y restaura la salud y belleza de tu sonrisa con nuestros rellenos estéticos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Agendar Cita
              </button>
              <a
                href="tel:+50255139358"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 inline-flex items-center justify-center"
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
