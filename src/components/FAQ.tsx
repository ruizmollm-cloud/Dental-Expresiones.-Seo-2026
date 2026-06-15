import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: '¿Dónde están ubicados y qué áreas atienden?',
    answer:
      'Estamos en Carretera a El Salvador, en un punto de fácil acceso con parqueo. Atendemos a pacientes de Fraijanes, Santa Catarina Pinula, Condominio El Sausalito y residenciales pasando Casa de Dios.',
  },
  {
    question:
      '¿Qué tipo de atención puedo esperar en Dental Expresiones si me genera ansiedad ir al dentista?',
    answer:
      'Encontrarás un equipo médico que destaca por su paciencia, amabilidad y profesionalismo. Nos especializamos en atender a pacientes que valoran la explicación detallada y un trato delicado que disipe los nervios de la consulta clínica.',
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="preguntas-frecuentes" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-dental-gray text-center mb-12 text-balance"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
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
                className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
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
                <div className="px-6 sm:px-8 pb-5 sm:pb-6">
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
  );
}
