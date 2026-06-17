import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Sparkles, CheckCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function WhiteningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  const benefits = [
    '60 minutos para una sonrisa notablemente más brillante',
    'Tecnología Pola Rapid con respaldo profesional',
    'Resultado adaptado al tono natural y salud de tus dientes',
    'Diferencia de tonos visible',
    'Consulta y limpieza dental previa requerida'
  ];

  const steps = [
    {
      number: 1,
      title: 'Pre-Pulido',
      description: 'Pre-pulimos tus dientes para eliminar cualquier mancha superficial. Luciendo mejor desde ya.'
    },
    {
      number: 2,
      title: 'Blanqueamiento',
      description: 'Luego aplicamos una barrera protectora de gingiva en tus encías, seguido por gel blanqueador Pola Rapid, administrado en cuatro sesiones de 8 minutos. ¡Rápido! ¡Fácil! ¡Brillante!'
    },
    {
      number: 3,
      title: 'Post-Tratamiento',
      description: '¡Di cheese! Es hora de tomar una foto "después" y volver a casa con instrucciones personalizadas para mantener tu sonrisa brillante.'
    }
  ];

  const faqs = [
    {
      question: '¿Cuánto tiempo toma el blanqueamiento dental y cuánto cuesta?',
      answer: (
        <>
          Nuestro tratamiento de blanqueamiento profesional toma aproximadamente 60 minutos en una sola visita. El costo varía según el tipo de tratamiento.{' '}
          <a
            href="https://wa.me/50255139358?text=Hola,%20quiero%20información%20sobre%20el%20costo%20del%20blanqueamiento%20dental%20y%20las%20opciones%20de%20pago%20disponibles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dental-teal underline hover:no-underline"
          >
            Contáctanos para obtener información específica sobre precios y opciones de pago disponibles
          </a>
          .
        </>
      )
    },
    {
      question: '¿Por qué necesito una consulta y limpieza dental antes del blanqueamiento?',
      answer: 'Hay dos razones importantes. Primero, si aún no eres paciente nuestro, necesitamos evaluarte y conocer tu caso para recomendarte la mejor opción. Segundo, la limpieza es indispensable: el sarro y la placa actúan como una barrera que impide que el gel blanqueador actúe de forma uniforme, lo que puede generar resultados irregulares. Una superficie limpia permite que el agente blanqueador penetre mejor y de forma más pareja. Además, es necesario esperar a que tus encías estén completamente sanas: sin inflamación ni sangrado. Cuando las encías están inflamadas cubren parte del diente, y al estar sanas y desinflamadas queda expuesta toda la superficie que necesitamos tratar para un resultado óptimo.'
    },
    {
      question: '¿Qué debo hacer para prepararme para mi cita?',
      answer: 'Es recomendable cepillarse los dientes antes de la cita. Evita consumir alimentos y bebidas que puedan manchar los dientes (café, té, vino tinto) en las 24 horas previas. Si tienes sensibilidad dental, háznoslo saber para tomar precauciones adicionales.'
    },
    {
      question: '¿Cómo funciona el mejor blanqueamiento dental?',
      answer: 'Utilizamos el pulidor de aire para eliminar manchas externas. El amarillamiento de los dientes proviene de manchas tanto internas como externas. El gel blanqueador penetra la capa exterior del diente y oxida las moléculas que causan las manchas en las capas internas, logrando un tono más blanco. A mayor concentración del gel, mayor es la oxidación.'
    },
    {
      question: '¿Qué sucede si mis dientes no se blanquean?',
      answer: 'El blanqueamiento dental profesional es efectivo en la mayoría de los casos. Sin embargo, algunos tipos de manchas (como las causadas por ciertos medicamentos) pueden ser más resistentes. Durante tu consulta inicial, evaluaremos tus dientes y te informaremos sobre los resultados esperados. Si el blanqueamiento no es efectivo, podemos discutir alternativas como carillas.'
    },
    {
      question: '¿Las coronas, carillas y rellenos se blanquean?',
      answer: 'No, los materiales de restauración como coronas, carillas y rellenos no responden al blanqueamiento dental. Solo los dientes naturales se blanquean. Si tienes restauraciones visibles, podemos discutir opciones para igualar el color después del tratamiento de blanqueamiento.'
    },
    {
      question: '¿Con qué frecuencia necesito blanquear?',
      answer: 'Los resultados del blanqueamiento profesional pueden durar de 6 meses a 2 años, dependiendo de tus hábitos alimenticios y de higiene oral. Evitar alimentos y bebidas que manchan, mantener una buena higiene dental y usar productos de mantenimiento recomendados ayudará a prolongar los resultados.'
    },
    {
      question: '¿En qué se diferencia el blanqueamiento en Dental Expresiones de otros lugares?',
      answer: 'En Dental Expresiones priorizamos tu salud dental sobre la estética. Buscamos el mayor blanqueamiento posible, pero nunca a costa de tus dientes. Si un tono más blanco puede afectarte, te lo diremos con honestidad y trabajaremos hasta el límite que sea seguro para ti.'
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
              Blanqueamiento Dental<br />Profesional
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dental-gray text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-dental-gray/90 transition-all duration-300 hover:scale-105"
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
                Una Sonrisa Más Brillante<br />en 60 Minutos:<br />Fácil como 1-2-3
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
                    <CheckCircle className="w-6 h-6 text-dental-gray flex-shrink-0 mt-0.5" />
                    <span className="text-dental-gray/80 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20agendar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Agendar Cita
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[240px] sm:h-[320px] lg:h-[400px] max-w-sm mx-auto lg:max-w-none">
                <img
                  src="/images/blanqueamiento-dental.jpg"
                  alt="Blanqueamiento dental profesional"
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
            Proceso de Blanqueamiento Paso a Paso
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
              className="bg-dental-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-dental-teal/90 transition-all duration-300 hover:scale-105"
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-16 h-16 text-teal-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-dental-gray mb-6">
              ¿Listo para una Sonrisa Más Brillante?
            </h2>
            <p className="text-xl text-dental-gray/80 mb-8">
              Agenda tu cita hoy y descubre cómo podemos transformar tu sonrisa en solo 90 minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Agendar Cita
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
