import { motion } from 'framer-motion';

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dental-gray mb-4">
            Visítanos
          </h2>
          <p className="text-lg text-dental-gray/80 max-w-2xl mx-auto">
            Estamos ubicados en Portal Solé, con fácil acceso desde la carretera a El Salvador
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-teal-600/30 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-br from-slate-100 to-white p-8 rounded-3xl shadow-2xl border border-slate-200">
            <div className="overflow-hidden rounded-2xl">
              <iframe
                title="Ubicación de Dental Expresiones en Portal Solé, Carretera a El Salvador"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6424564883584!2d-90.46738982485303!3d14.534214178125868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a3f2d2b67f1b%3A0x6a2e2d8b4e7e6f8d!2sPortal%20Sol%C3%A9!5e0!3m2!1ses-419!2sgt!4v1718492000000!5m2!1ses-419!2sgt"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Km 18.5, Carretera a El Salvador, Portal Solé, 2do nivel, local 15, Guatemala. Teléfono: +502 5513-9358.
                </p>
              </div>
              <a
                href="https://waze.com/ul?ll=14.534214,-90.465195&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#33ccff] hover:bg-[#1ab8ec] text-white font-bold rounded-lg shadow-md transition-colors duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.5 10.5c0-5.25-4.25-9.5-9.5-9.5S2.5 5.25 2.5 10.5c0 2.39.88 4.57 2.34 6.23L12 23l7.16-6.27c1.46-1.66 2.34-3.84 2.34-6.23zM12 13a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                </svg>
                <span>Cómo llegar con Waze</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
