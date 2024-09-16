import { Footer } from "../components/footer";

export const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white text-gray-800 pt-20"> {/* Layout flexible para que el footer siempre quede al fondo */}
        {/* Sección de Bienvenida */}
        <section className="text-center py-16 flex-grow">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a La Care Cortada</h1>
          <p className="text-lg">
            Descubre nuestros modelos destacados, productos de maquillaje exclusivos y los próximos eventos de moda.
          </p>
        </section>

        {/* Sección de Modelos Destacados */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Modelos Destacados</h2>
          <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-y-0"> {/* flex-wrap para que las tarjetas se ajusten en pantallas pequeñas */}
            {/* Tarjetas de modelos */}
            <div className="bg-gray-100 p-4 rounded-lg w-full sm:w-auto">
              <img src="/path-to-model-image.jpg" alt="Modelo 1" className="mb-4 rounded w-full h-32 object-cover" />
              <h3 className="text-xl font-semibold">Modelo 1</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg w-full sm:w-auto">
              <img src="/path-to-model-image.jpg" alt="Modelo 2" className="mb-4 rounded w-full h-32 object-cover" />
              <h3 className="text-xl font-semibold">Modelo 2</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg w-full sm:w-auto">
              <img src="/path-to-model-image.jpg" alt="Modelo 3" className="mb-4 rounded w-full h-32 object-cover" />
              <h3 className="text-xl font-semibold">Modelo 3</h3>
            </div>
          </div>
        </section>

        {/* Sección de Productos de Maquillaje */}
        <section className="py-16 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-8">Productos de Maquillaje</h2>
          <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-y-0">
            {/* Tarjetas de productos */}
            <div className="bg-gray-100 p-4 rounded-lg w-full sm:w-auto">
              <img src="/path-to-product-image.jpg" alt="Producto 1" className="mb-4 rounded w-full h-32 object-cover" />
              <h3 className="text-xl font-semibold">Producto 1</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg w-full sm:w-auto">
              <img src="/path-to-product-image.jpg" alt="Producto 2" className="mb-4 rounded w-full h-32 object-cover" />
              <h3 className="text-xl font-semibold">Producto 2</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg w-full sm:w-auto">
              <img src="/path-to-product-image.jpg" alt="Producto 3" className="mb-4 rounded w-full h-32 object-cover" />
              <h3 className="text-xl font-semibold">Producto 3</h3>
            </div>
          </div>
        </section>

        {/* Sección de Eventos Próximos */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Próximos Eventos</h2>
          <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-y-0">
            {/* Tarjetas de eventos */}
            <div className="bg-gray-100 p-4 rounded-lg w-full sm:w-auto">
              <h3 className="text-xl font-semibold">Evento 1</h3>
              <p className="text-sm">Fecha: 01/09/2024</p>
              <p className="text-sm">Ubicación: Ciudad 1</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg w-full sm:w-auto">
              <h3 className="text-xl font-semibold">Evento 2</h3>
              <p className="text-sm">Fecha: 15/09/2024</p>
              <p className="text-sm">Ubicación: Ciudad 2</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg w-full sm:w-auto">
              <h3 className="text-xl font-semibold">Evento 3</h3>
              <p className="text-sm">Fecha: 30/09/2024</p>
              <p className="text-sm">Ubicación: Ciudad 3</p>
            </div>
          </div>
        </section>

        {/* Footer siempre en la parte inferior */}
        <Footer />
      </div>
    </>
  );
};
