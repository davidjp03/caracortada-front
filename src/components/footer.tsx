import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa'; // Asegúrate de que el ícono FaPhone está importado

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-4">
                    {/* Social icons */}
                    <div className="flex space-x-4">
                        <a href="https://instagram.com" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://facebook.com" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24} />
                        </a>
                        <Link to="/contact" className="hover:text-gray-300">
                            <FaEnvelope size={24} />
                        </Link>
                    </div>

                    {/* Phone number display at the bottom */}
                    <div className="text-center text-gray-400 text-sm flex justify-center items-center space-x-2">
                        <FaPhone size={16} />
                        <span>+1 420 069 0666</span> {/* Actualiza este número según sea necesario */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
