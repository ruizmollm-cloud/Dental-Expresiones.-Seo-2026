import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Dental Expresiones Logo"
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 leading-relaxed">
              Tu salud dental es nuestra prioridad. Un equipo cercano y profesional que cuida
              la sonrisa de tu familia en Carretera a El Salvador, con un trato delicado y
              explicaciones claras en cada visita.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Horarios de Atención</h4>
            <div className="space-y-3">
              <div className="flex flex-col">
                <span className="text-slate-400 text-sm">Lunes a Viernes:</span>
                <span className="text-teal-400 font-semibold">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-sm">Sábados:</span>
                <span className="text-teal-400 font-semibold">8:00 AM - 1:00 PM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-sm">Domingos:</span>
                <span className="text-slate-500 font-semibold">Cerrado</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Ubicación</h4>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border border-slate-700 bg-slate-800">
                <iframe
                  title="Ubicación de Dental Expresiones"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.2859733575614!2d-90.5042696!3d14.6396821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a3ab11e9f297%3A0x6b4fb2bbfd7398b1!2sDental%20Expresiones!5e0!3m2!1ses!2sgt!4v1718485200000!5m2!1ses!2sgt"
                  width="100%"
                  height="192"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-48 w-full"
                ></iframe>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-2">
                  <p className="text-slate-300 leading-relaxed">
                    Portal Solé, Km 18.5, Carr. a El Salvador local 15, Guatemala 01062
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Clínica dental en Carretera al Salvador, atendiendo la zona de Fraijanes y Santa Catarina Pinula.
                  </p>
                  <a
                    href="https://waze.com/ul/h9fxdtmj69"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 transition-colors font-medium"
                  >
                    Abrir en Waze →
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <a href="tel:+50255139358" className="text-slate-400 hover:text-teal-400 transition-colors">
                  +502 5513-9358
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <a href="mailto:dentalexpresiones@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors">
                  dentalexpresiones@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>

            <div className="mt-8">
              <p className="text-slate-400 text-sm">
                Síguenos en redes sociales para tips de salud dental y promociones especiales.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; 2024 Dental Expresiones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
