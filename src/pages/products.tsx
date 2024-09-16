import { useState } from 'react';
import { Product } from '../interfaces/Product';
import { Footer } from '../components/footer';
import { FaSearch, FaBars } from 'react-icons/fa'; // Importamos el ícono de menú

// Datos de ejemplo con más categorías y productos
const productsData: Product[] = [
  { id: 1, name: "Lipstick Red", description: "Bright red lipstick.", price: "20.00", category: "Lipsticks", imageUrl: "/path-to-lipstick-image.jpg" },
  { id: 2, name: "Foundation Light", description: "Light tone foundation.", price: "35.00", category: "Foundations", imageUrl: "/path-to-foundation-image.jpg" },
  { id: 3, name: "Mascara Volume", description: "Mascara for voluminous lashes.", price: "15.00", category: "Mascara", imageUrl: "/path-to-mascara-image.jpg" },
  { id: 4, name: "Blush Pink", description: "Soft pink blush.", price: "25.00", category: "Blush", imageUrl: "/path-to-blush-image.jpg" },
  { id: 5, name: "Eyeliner Black", description: "Long-lasting black eyeliner.", price: "18.00", category: "Eyeliner", imageUrl: "/path-to-eyeliner-image.jpg" },
  { id: 6, name: "Concealer Medium", description: "Medium tone concealer.", price: "22.00", category: "Concealers", imageUrl: "/path-to-concealer-image.jpg" },
  { id: 7, name: "Eyeshadow Palette", description: "10 color eyeshadow palette.", price: "40.00", category: "Eyeshadow", imageUrl: "/path-to-eyeshadow-image.jpg" },
  { id: 8, name: "Setting Spray", description: "Matte finish setting spray.", price: "28.00", category: "Setting Spray", imageUrl: "/path-to-spray-image.jpg" },
  { id: 9, name: "Lip Gloss Clear", description: "Clear lip gloss for shiny lips.", price: "12.00", category: "Lip Gloss", imageUrl: "/path-to-lipgloss-image.jpg" },
  { id: 10, name: "Bronzer Bronze", description: "Bronzer for a sun-kissed glow.", price: "30.00", category: "Bronzer", imageUrl: "/path-to-bronzer-image.jpg" },
  // Más productos...
];

export const Products = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [filter, setFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú desplegable

  const handleFilterChange = (category: string) => {
    setFilter(category);
    if (category) {
      setProducts(productsData.filter(product => product.category === category));
    } else {
      setProducts(productsData); // Sin filtro
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setProducts(
      productsData.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
      )
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col"> {/* Asegura que la página ocupe toda la pantalla */ }
      <div className="flex-grow p-4 pt-24"> {/* Ajuste para el contenido principal */ }
        <h2 className="text-2xl font-bold mb-6">Makeup Products</h2> {/* Agregado mb-6 para margen inferior */}

        {/* Buscador de productos con lupa */ }
        <div className="mb-4 flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="border p-2 pl-8 w-64 rounded-lg"
            />
            <FaSearch className="absolute left-2 top-3 text-gray-500" /> {/* Ícono de lupa */}
          </div>
        </div>

        {/* Botón de menú para pantallas pequeñas */}
        <div className="md:hidden mb-4">
          <button onClick={toggleMenu} className="flex items-center space-x-2 border p-2 rounded-lg">
            <FaBars />
            <span>Categorías</span>
          </button>
        </div>

        {/* Filtros de categorías, visibles siempre en pantallas medianas y grandes */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <button
            onClick={() => handleFilterChange("")}
            className={`mr-2 font-semibold p-2 transition duration-200 ${filter === "" ? 'underline text-black' : 'hover:underline hover:text-black'}`}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("Lipsticks")}
            className={`mr-2 font-semibold p-2 transition duration-200 ${filter === "Lipsticks" ? 'underline text-black' : 'hover:underline hover:text-black'}`}
          >
            Lipsticks
          </button>
          <button
            onClick={() => handleFilterChange("Foundations")}
            className={`mr-2 font-semibold p-2 transition duration-200 ${filter === "Foundations" ? 'underline text-black' : 'hover:underline hover:text-black'}`}
          >
            Foundations
          </button>
          <button
            onClick={() => handleFilterChange("Mascara")}
            className={`mr-2 font-semibold p-2 transition duration-200 ${filter === "Mascara" ? 'underline text-black' : 'hover:underline hover:text-black'}`}
          >
            Mascara
          </button>
          <button
            onClick={() => handleFilterChange("Blush")}
            className={`mr-2 font-semibold p-2 transition duration-200 ${filter === "Blush" ? 'underline text-black' : 'hover:underline hover:text-black'}`}
          >
            Blush
          </button>
          <button
            onClick={() => handleFilterChange("Eyeliner")}
            className={`mr-2 font-semibold p-2 transition duration-200 ${filter === "Eyeliner" ? 'underline text-black' : 'hover:underline hover:text-black'}`}
          >
            Eyeliner
          </button>
          <button
            onClick={() => handleFilterChange("Concealers")}
            className={`mr-2 font-semibold p-2 transition duration-200 ${filter === "Concealers" ? 'underline text-black' : 'hover:underline hover:text-black'}`}
          >
            Concealers
          </button>
          <button
            onClick={() => handleFilterChange("Eyeshadow")}
            className={`mr-2 font-semibold p-2 transition duration-200 ${filter === "Eyeshadow" ? 'underline text-black' : 'hover:underline hover:text-black'}`}
          >
            Eyeshadow
          </button>
          <button
            onClick={() => handleFilterChange("Setting Spray")}
            className={`mr-2 font-semibold p-2 transition duration-200 ${filter === "Setting Spray" ? 'underline text-black' : 'hover:underline hover:text-black'}`}
          >
            Setting Spray
          </button>
          <button
            onClick={() => handleFilterChange("Lip Gloss")}
            className={`mr-2 font-semibold p-2 transition duration-200 ${filter === "Lip Gloss" ? 'underline text-black' : 'hover:underline hover:text-black'}`}
          >
            Lip Gloss
          </button>
          <button
            onClick={() => handleFilterChange("Bronzer")}
            className={`font-semibold p-2 transition duration-200 ${filter === "Bronzer" ? 'underline text-black' : 'hover:underline hover:text-black'}`}
          >
            Bronzer
          </button>
        </div>

        {/* Lista de productos */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {products.map((product: Product) => (
            <div key={product.id} className="border p-4 rounded-lg">
              <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <p className="font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
