import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CTASection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 text-white flex flex-col justify-center relative overflow-hidden" style={{ backgroundImage: 'url("/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/90 via-teal-700/85 to-teal-800/90"></div>
              <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">
                ¿Listo Para Transformar Tu Sonrisa?
              </h2>
              <p className="text-lg text-teal-50 mb-8">
                Agenda tu primera cita y recibe una valoración completa sin costo. Nuestro equipo te espera
                para diseñar el plan de tratamiento perfecto para ti.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-teal-50">Primera consulta sin costo</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-teal-50">Diagnóstico completo y personalizado</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-teal-50">Plan de tratamiento a tu medida</span>
                </div>
              </div>

              <a
                href="https://wa.me/50255139358?text=Hola%20Dental%20Expresiones%2C%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
              >
                Agenda Tu Cita Ahora
              </a>

              <p className="mt-6 text-sm text-teal-100">
                * Disponibilidad limitada. Agenda con anticipación.
              </p>
              </div>
            </div>

            <div className="p-12 flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
              <div className="w-full max-w-md">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Horarios de Atención</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                      <span className="text-slate-700 font-medium">Lunes a Viernes:</span>
                      <span className="text-teal-600 font-bold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                      <span className="text-slate-700 font-medium">Sábados:</span>
                      <span className="text-teal-600 font-bold">8:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                      <span className="text-slate-700 font-medium">Domingos:</span>
                      <span className="text-slate-400 font-bold">Cerrado</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl border border-teal-200">
                    <p className="text-sm text-slate-600 text-center">
                      Nos adaptamos a tu agenda para que nunca faltes a tu cita dental
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
      {showForm && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Solicita Tu Cita</h3>
              <button
                onClick={() => setShowForm(false)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {submitted ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">¡Solicitud Enviada!</h4>
                <p className="text-slate-600">
                  Gracias por tu interés. Nos pondremos en contacto contigo pronto para confirmar tu cita.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre completo"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="consulta">Consulta General</option>
                    <option value="blanqueamiento">Blanqueamiento</option>
                    <option value="implantes">Implantes</option>
                    <option value="ortodoncia">Ortodoncia</option>
                    <option value="coronas">Coronas y Puentes</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mensaje (opcional)"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
}
