import { motion } from 'framer-motion';

export default function Hero() {


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="inicio"
      className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
      <div className="relative max-w-7xl mx-auto z-10 min-h-[600px] flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">No es solo una sonrisa,</span>
              <span className="block">es toda una armonía facial</span>
            </motion.h1>

            <motion.p
              className="text-2xl text-white max-w-2xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tu clínica de confianza en Carretera a El Salvador
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dental-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-dental-teal/90"
              >
                Agenda Tu Cita Ahora
              </a>
              <a
                href="tel:+50255139358"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dental-gray transition-all duration-300 inline-flex items-center justify-center"
              >
                Contáctanos +502 5513-9358
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
