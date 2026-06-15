import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cream-50 shadow-md py-4"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Dental Expresiones Logo"
              className="h-24 w-auto object-contain"
            />
          </div>

          <ul className="hidden md:flex items-center space-x-10 mr-8">
            <li className="ml-4">
              <button onClick={() => scrollToSection('inicio')} className="text-dental-gray hover:text-dental-teal transition-colors font-medium text-base">
                Inicio
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('servicios')} className="text-dental-gray hover:text-dental-teal transition-colors font-medium text-base">
                Servicios
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('testimonios')} className="text-dental-gray hover:text-dental-teal transition-colors font-medium text-base">
                Testimonios
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('ubicacion')} className="text-dental-gray hover:text-dental-teal transition-colors font-medium text-base">
                Ubicación
              </button>
            </li>
          </ul>

          <button
            onClick={() => scrollToSection('contacto')}
            className="hidden md:block bg-dental-teal text-white px-8 py-3 rounded-full font-medium text-sm hover:shadow-xl hover:bg-dental-teal/90 transition-all duration-300 whitespace-nowrap border-2 border-dental-teal"
          >
            +502 5513-9358
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-cream-200">
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-dental-gray hover:text-dental-teal transition-colors font-medium py-2">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicios')} className="block w-full text-left text-dental-gray hover:text-dental-teal transition-colors font-medium py-2">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonios')} className="block w-full text-left text-dental-gray hover:text-dental-teal transition-colors font-medium py-2">
                  Testimonios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('ubicacion')} className="block w-full text-left text-dental-gray hover:text-dental-teal transition-colors font-medium py-2">
                  Ubicación
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="w-full bg-dental-teal text-white px-6 py-2.5 rounded-full font-medium hover:shadow-xl transition-all duration-300 border-2 border-dental-teal"
                >
                  +502 5513-9358
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
