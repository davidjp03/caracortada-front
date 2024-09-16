import { Footer } from "../components/footer";
import { Event } from "../interfaces/Event";
export const Events = () => {
    // Datos de ejemplo para los eventos de moda
    const eventsData: Event[] = [
      {
        id: 1,
        name: "Spring Fashion Show 2024",
        date: "March 21, 2024",
        location: "New York City, NY",
        models: ["Jane Doe", "Emily Smith", "Ava Brown"],
        products: ["Lipstick Red", "Eyeshadow Palette", "Setting Spray"],
      },
      {
        id: 2,
        name: "Summer Fashion Gala 2024",
        date: "June 15, 2024",
        location: "Los Angeles, CA",
        models: ["Sophia Johnson", "Lily Taylor"],
        products: ["Foundation Light", "Blush Pink", "Mascara Volume"],
      },
      {
        id: 3,
        name: "Autumn Couture Week 2024",
        date: "October 3, 2024",
        location: "Paris, France",
        models: ["Olivia Williams", "Isabella Martinez"],
        products: ["Eyeliner Black", "Lip Gloss Clear", "Bronzer Bronze"],
      },
    ];
  
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow p-4 pt-24">
          <h2 className="text-2xl font-bold mb-6">Fashion Events</h2>
          <p className="mb-4">
            Explore the upcoming fashion events and shows. Find all the details about the date, location, participating models, and products showcased at each event.
          </p>
  
          {/* Lista de eventos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsData.map((event) => (
              <div key={event.id} className="border p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p className="mt-2"><strong>Participating Models:</strong></p>
                <ul className="list-disc list-inside mb-2">
                  {event.models.map((model, index) => (
                    <li key={index}>{model}</li>
                  ))}
                </ul>
                <p className="mt-2"><strong>Products Showcased:</strong></p>
                <ul className="list-disc list-inside">
                  {event.products.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  };