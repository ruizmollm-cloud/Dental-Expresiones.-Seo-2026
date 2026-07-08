import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Sparkles, CheckCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function VeneersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  const benefits = [
    'Diseño de sonrisa en armonía con tu rostro',
    'Resultados naturales y discretos',
    'Materiales de alta durabilidad y estética',
    'Corrección de forma, color y alineación',
    'Proceso guiado y explicado paso a paso'
  ];

  const steps = [
    {
      number: 1,
      title: 'Diseño de tu Sonrisa',
      description: 'Todo comienza escuchando tus expectativas. Analizamos la armonía de tu rostro, la forma de tus dientes y tu tono natural para diseñar una sonrisa a tu medida, sin soluciones genéricas.'
    },
    {
      number: 2,
      title: 'Preparación y Prueba',
      description: 'Según tu caso, preparamos mínimamente el diente y realizamos pruebas para que veas y apruebes el resultado antes de la colocación definitiva. Cada detalle se ajusta a tu comodidad.'
    },
    {
      number: 3,
      title: 'Colocación de las Carillas',
      description: 'Colocamos las carillas directas (en una sesión) o indirectas (elaboradas en laboratorio) con precisión y delicadeza, cuidando el ajuste, el color y la naturalidad de cada pieza.'
    },
    {
      number: 4,
      title: 'Cuidado y Seguimiento',
      description: 'Te damos indicaciones claras para mantener tus carillas en óptimas condiciones y programamos un seguimiento para asegurar que tu sonrisa luzca perfecta a largo plazo.'
    }
  ];

  const faqs = [
    {
      question: '¿Qué diferencia hay entre carillas directas e indirectas?',
      answer: 'Las carillas directas se elaboran y colocan en el consultorio, generalmente en una sola sesión, usando resina compuesta modelada directamente sobre el diente. Las carillas indirectas se fabrican en un laboratorio (en resina o porcelana) a partir de un molde o escáner y se cementan en una cita posterior. La elección depende de tu caso, tus expectativas y el resultado estético que buscamos lograr.'
    },
    {
      question: '¿El diseño de sonrisa se adapta a mi rostro?',
      answer: 'Sí. Nuestro enfoque parte de entender tus expectativas y analizar la armonía de tu rostro. Diseñamos la forma, el tamaño, el color y la alineación de las carillas para que el resultado sea discreto y natural, integrándose de forma equilibrada con tus facciones y no como una solución genérica.'
    },
    {
      question: '¿Es necesario desgastar mucho el diente?',
      answer: 'No siempre. La preparación depende del tipo de carilla y de tu caso particular. Priorizamos siempre la conservación de tu estructura dental, realizando una preparación mínima y cuidadosa. Te explicamos con total transparencia qué se hará antes de iniciar cualquier procedimiento.'
    },
    {
      question: '¿Cuánto duran las carillas dentales?',
      answer: 'Con los cuidados adecuados, las carillas pueden durar muchos años. Utilizamos materiales de alta durabilidad y estética, y su longevidad depende de tus hábitos, tu higiene oral y el seguimiento profesional. Te brindamos todas las indicaciones necesarias para prolongar su vida útil.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <motion.section
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/primera-consulta-hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-slate-900/40"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-white/80 font-semibold mb-8 transition-colors text-lg"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Volver al inicio
          </Link>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/80 font-semibold text-sm tracking-wider mb-4">SERVICIOS</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Diseño de Sonrisa: Carillas Directas e Indirectas
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Diseño de sonrisa en Carretera a El Salvador. Carillas directas e indirectas en armonía con tu rostro, con resultados naturales y discretos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20información%20sobre%20diseño%20de%20sonrisa%20y%20carillas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Agendar Cita
              </a>
              <a
                href="tel:+50255139358"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dental-gray transition-all duration-300 inline-flex items-center justify-center"
              >
                Llamar al +502 5513-9358
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

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
                ¿Qué es el Diseño de Sonrisa?
              </h2>

              <p className="text-dental-gray/80 text-lg leading-relaxed mb-6">
                El diseño de carillas directas e indirectas es un proceso artesanal y clínico que requiere, ante todo, entender tus expectativas. En lugar de aplicar soluciones genéricas, nos tomamos el tiempo de escuchar y analizar la armonía de tu rostro.
              </p>

              <p className="text-dental-gray/80 text-lg leading-relaxed mb-8">
                Diseñamos con precisión y delicadeza en CAES, asegurándote un resultado discreto y natural, guiado por profesionales que priorizan tu tranquilidad y el cuidado de tu salud en cada sesión.
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
                    <CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span className="text-dental-gray/80 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20información%20sobre%20diseño%20de%20sonrisa%20y%20carillas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                >
                  Agendar Cita
                </a>
                <a
                  href="tel:+50255139358"
                  className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 transition-all duration-300 inline-flex items-center justify-center"
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
                  src="/images/carillas-dentales.jpg"
                  alt="Diseño de sonrisa con carillas dentales"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#4A8C7A' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-10 w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-20 right-40 w-3 h-3 bg-teal-300 rounded-full"></div>
          <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 right-20 w-4 h-4 bg-yellow-400 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
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
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
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
              href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20información%20sobre%20diseño%20de%20sonrisa%20y%20carillas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-dental-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-dental-teal/90 transition-all duration-300 hover:scale-105"
            >
              Agendar Ahora
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#7AAF9A' }}>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
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
            <Sparkles className="w-16 h-16 text-rose-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-dental-gray mb-6">
              ¿Listo para Diseñar tu Sonrisa?
            </h2>
            <p className="text-xl text-dental-gray/80 mb-8">
              Agenda tu cita hoy y descubre cómo las carillas directas e indirectas pueden transformar tu sonrisa en armonía con tu rostro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20información%20sobre%20diseño%20de%20sonrisa%20y%20carillas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Agendar Cita
              </a>
              <a
                href="tel:+50255139358"
                className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 transition-all duration-300 inline-flex items-center justify-center"
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
