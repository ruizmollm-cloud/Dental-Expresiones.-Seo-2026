import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Calendar, CheckCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface ServiceStep {
  number: number;
  title: string;
  description: string;
}

interface ServiceFaq {
  question: string;
  answer: string;
}

interface ServicePageData {
  title: string;
  heroTitle: string;
  image: string;
  imageAlt: string;
  headline: string;
  benefits: string[];
  stepsTitle: string;
  steps: ServiceStep[];
  faqs: ServiceFaq[];
  ctaTitle: string;
  ctaSubtitle: string;
}

const serviceData: Record<string, ServicePageData> = {
  'primera-consulta': {
    title: 'Primera Consulta',
    heroTitle: 'Primera Consulta\nIntegral',
    image: '/primera-consulta.png',
    imageAlt: 'Scanner 3D durante primera consulta dental',
    headline: 'El primer paso hacia tu sonrisa perfecta, con claridad y calma',
    benefits: [
      'Evaluación integral de 60 minutos',
      'Fotografías clínicas',
      'Radiografías periapicales o escáner 3D según criterio del doctor',
      'Plan de tratamiento explicado con claridad',
      'Limpieza dental opcional en la misma cita',
    ],
    stepsTitle: 'Cómo es tu Primera Consulta Paso a Paso',
    steps: [
      {
        number: 1,
        title: 'Ficha médica digital',
        description: 'Conversamos contigo y completamos juntos tu historial de forma sencilla. Es un momento para conocerte, entender lo que te preocupa y resolver cualquier duda antes de empezar.',
      },
      {
        number: 2,
        title: 'Scanner 3D',
        description: 'Tomamos un escáner intraoral rápido y sin molestias, sin moldes incómodos. Te mostramos las imágenes en pantalla para que veas con claridad el estado real de tu boca.',
      },
      {
        number: 3,
        title: 'Toma de fotografías',
        description: 'Capturamos fotografías clínicas para documentar tu punto de partida. Así puedes seguir tu progreso y entender, paso a paso, lo que proponemos y por qué.',
      },
      {
        number: 4,
        title: 'Evaluación profesional',
        description: 'Nuestros odontólogos evalúan cada detalle de tu salud bucal de forma cercana y sin prisas.',
      },
      {
        number: 5,
        title: 'Radiografías si son necesarias',
        description: 'Si el diagnóstico lo requiere, tomamos radiografías para tener una visión completa antes de decidir.',
      },
      {
        number: 6,
        title: 'Diagnóstico claro',
        description: 'Te explicamos con palabras simples el estado de tu salud bucal y lo que encontramos.',
      },
      {
        number: 7,
        title: 'Plan de tratamiento',
        description: 'Diseñamos y te explicamos un plan de tratamiento personalizado, con prioridades, tiempos y opciones.',
      },
      {
        number: 8,
        title: 'Limpieza opcional',
        description: 'Si lo deseas, realizamos tu limpieza dental en la misma cita para que aproveches al máximo tu visita.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la duración de mi primera consulta?',
        answer: 'La duración de la evaluación inicial es de 30 minutos. Nos tomamos ese tiempo para hacer una correcta evaluación de tu diagnóstico, así mismo para conocerte y resolver cualquier duda que tengas.',
      },
      {
        question: '¿Qué debo llevar a mi primera cita?',
        answer: 'Solo necesitas llegar puntual y, si tienes radiografías o estudios dentales recientes, traerlos. Nosotros nos encargamos del resto: ficha digital, scanner 3D y todo el material clínico.',
      },
      {
        question: '¿La primera consulta incluye limpieza dental?',
        answer: 'La limpieza es opcional en la misma cita. Si tu agenda y diagnóstico lo permiten, podemos realizarla el mismo día para que aproveches al máximo tu visita.',
      },
      {
        question: '¿Cuánto cuesta la primera consulta?',
        answer: 'Contáctanos por WhatsApp o llamada y con gusto te compartimos la información de costos y opciones disponibles para tu evaluación inicial.',
      },
    ],
    ctaTitle: '¿Listo para conocer el estado de tu sonrisa?',
    ctaSubtitle: 'Agenda tu primera consulta y comienza tu camino hacia una sonrisa saludable, con un plan claro y sin presiones.',
  },
};

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId] : null;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-3xl font-bold text-dental-gray mb-4">Servicio no encontrado</h1>
          <Link to="/" className="text-teal-600 hover:text-teal-700 font-semibold">
            Volver al inicio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url(/primera-consulta-hero.png)' }}
      >
        <div className="absolute inset-0 bg-dental-gray/30"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-white/90 font-semibold mb-8 transition-colors text-base sm:text-lg"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            Volver al inicio
          </Link>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/90 font-semibold text-xs sm:text-sm tracking-wider mb-3 sm:mb-4">
              SERVICIOS
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 whitespace-pre-line leading-tight">
              {service.heroTitle}
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dental-gray text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-dental-gray/90 transition-all duration-300 hover:scale-105 text-center"
              >
                Agendar Cita
              </a>
              <a
                href="tel:+50255139358"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                Llamar al +502 5513-9358
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dental-gray mb-5 sm:mb-6 text-balance">
                {service.headline}
              </h2>

              <ul className="space-y-3 sm:space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-dental-gray flex-shrink-0 mt-1" />
                    <span className="text-dental-gray/80 text-base sm:text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                <a
                  href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20agendar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                >
                  Agendar Cita
                </a>
                <a
                  href="tel:+50255139358"
                  className="border-2 border-teal-600 text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-teal-50 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Llamar
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative order-first md:order-last"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[280px] sm:h-[360px] md:h-[400px]">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coral-400 to-coral-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-10 w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-20 right-40 w-3 h-3 bg-teal-300 rounded-full"></div>
          <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 right-20 w-4 h-4 bg-yellow-400 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dental-gray text-center mb-8 sm:mb-12 text-balance"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {service.stepsTitle}
          </motion.h2>

          <div className="space-y-5 sm:space-y-8">
            {service.steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-cream-50 rounded-2xl p-5 sm:p-8 shadow-sm"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                    {step.number}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-dental-gray mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-dental-gray/80 leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10 sm:mt-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-dental-gray text-white px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-dental-gray/90 transition-all duration-300 hover:scale-105"
            >
              Agendar Ahora
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-teal-400">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dental-gray text-center mb-8 sm:mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Preguntas Frecuentes
          </motion.h2>

          <div className="space-y-3 sm:space-y-4">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-5 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  aria-expanded={openFaq === index}
                >
                  <span className="text-base sm:text-lg font-semibold text-dental-gray">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-dental-gray flex-shrink-0 leading-none">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-5 sm:px-8 pb-5 sm:pb-6">
                    <p className="text-dental-gray/80 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-cream-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-teal-600 mx-auto mb-5 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dental-gray mb-5 sm:mb-6 text-balance">
              {service.ctaTitle}
            </h2>
            <p className="text-base sm:text-xl text-dental-gray/80 mb-7 sm:mb-8 text-pretty">
              {service.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Agendar Cita
              </a>
              <a
                href="tel:+50255139358"
                className="border-2 border-teal-600 text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-teal-50 transition-all duration-300 inline-flex items-center justify-center"
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
