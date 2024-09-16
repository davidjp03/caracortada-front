import { Footer } from "../components/footer";
import Swal from 'sweetalert2';

export const Contact = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "33ab8f0c-7f87-42dc-8523-d3be13735229");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Email successfully sent!",
        icon: "success",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-white flex flex-col items-center justify-center flex-grow">
        <div className="max-w-md w-full p-4 text-black rounded-lg shadow-md pt-16">
          <h1 className="text-3xl font-bold mb-4 text-center pb-4">Contact Us</h1>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1">
                Full name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1">
                Comments/Questions:
              </label>
              <textarea
                id="message"
                name="message"
                className="p-3 h-32 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white border border-black hover:bg-white hover:text-black font-semibold rounded focus:outline-none focus:ring-2 focus:ring-black"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};
