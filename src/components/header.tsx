import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-10 shadow-md bg-opacity-70">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Cambio de texto por imagen */}
            <h1 className="text-2xl font-bold">
              <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Scarface_movie_red_logo.png" alt="La Care Cortada Logo" style={{ height: '50px' }} />
              </Link>
            </h1>
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Home</Link>
              <Link to="/models" className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Models</Link>
              <Link to="/makeup-products" className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Products</Link>
              <Link to="/events" className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Events</Link>
              <Link to="/memberships" className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Memberships</Link>
              <Link to="/contact" className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Contact Us</Link>
            </nav>
            {/* Botón de menú para pantallas pequeñas */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Menú desplegable para pantallas pequeñas */}
        {isMenuOpen && (
          <div className="md:hidden bg-black text-white bg-opacity-50 w-full">
            <nav className="flex flex-col space-y-2 px-4 py-3">
              <Link to="/" className="text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/models" className="text-white" onClick={() => setIsMenuOpen(false)}>Models</Link>
              <Link to="/makeup-products" className="text-white" onClick={() => setIsMenuOpen(false)}>Products</Link>
              <Link to="/events" className="text-white" onClick={() => setIsMenuOpen(false)}>Events</Link>
              <Link to="/memberships" className="text-white" onClick={() => setIsMenuOpen(false)}>Memberships</Link>
              <Link to="/contact" className="text-white" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
