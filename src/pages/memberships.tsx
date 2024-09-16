import { Footer } from "../components/footer";
import { useNavigate } from "react-router-dom";

export const Memberships = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login"); // Ajusta la ruta según la configuración de tus rutas
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white text-gray-800 pt-20"> {/* Layout flexible para que el footer siempre quede al fondo */}
        {/* Sección de Membresías Exclusivas */}
        <section className="text-center py-16 flex-grow">
          <h1 className="text-4xl font-bold mb-4">Exclusive Memberships</h1>
          <p className="text-lg mb-6">
            Andrea offers exclusive memberships for fans and fashion enthusiasts. Members gain access to behind-the-scenes content, special discounts, and invitations to VIP events.
          </p>
          <button
            onClick={handleLoginRedirect}
            className="bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black border border-black transition-colors duration-300"
          >
            Join Now
          </button>
        </section>

        {/* Footer siempre en la parte inferior */}
        <Footer />
      </div>
    </>
  );
};
