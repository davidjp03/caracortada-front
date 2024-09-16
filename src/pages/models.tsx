import { Footer } from "../components/footer";
import { Model } from "../interfaces/Model"; // Importar la interfaz

export const Models = () => {
  // Datos de ejemplo para los modelos
  const modelsData: Model[] = [
    {
      id: 1,
      name: "Jane Doe",
      portfolio: "/path-to-portfolio-jane.jpg",
      bookingInfo: "Available for events and campaigns. Contact: jane@models.com",
      achievements: "Featured in 5 fashion shows, 3 magazine covers, and 10 marketing campaigns.",
    },
    {
      id: 2,
      name: "Emily Smith",
      portfolio: "/path-to-portfolio-emily.jpg",
      bookingInfo: "Available for bookings. Contact: emily@models.com",
      achievements: "Worked in international campaigns and featured on various magazine covers.",
    },
    {
      id: 3,
      name: "Ava Brown",
      portfolio: "/path-to-portfolio-ava.jpg",
      bookingInfo: "Available for makeup branding campaigns. Contact: ava@models.com",
      achievements: "Participated in multiple beauty contests and represented major brands.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow p-4 pt-24">
        <h2 className="text-2xl font-bold mb-6">Model Management</h2>
        <p className="mb-4">
          Our diverse team of models brings creativity, professionalism, and energy to every project they participate in. From international campaigns to exclusive events, these models are the face of our brand. Each model has a unique profile showcasing their portfolio, booking information, and notable achievements.
        </p>

        {/* Lista de modelos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modelsData.map((model) => (
            <div key={model.id} className="border p-4 rounded-lg shadow-lg">
              <img src={model.portfolio} alt={`${model.name}'s portfolio`} className="w-full h-64 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
              <p className="mb-2"><strong>Booking Information:</strong> {model.bookingInfo}</p>
              <p><strong>Achievements:</strong> {model.achievements}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
