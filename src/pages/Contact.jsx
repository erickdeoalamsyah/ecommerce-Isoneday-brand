
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  const MySwal = withReactContent(Swal);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format pesan untuk WhatsApp
    const whatsappNumber = "6285784400358"; // Ganti dengan nomor WhatsApp tujuan
    const message = `Hello, my name is ${formData.name}.%0A
    📞 Phone: ${formData.phone}%0A
    ✉️ Email: ${formData.email}%0A
    📝 Message: ${formData.message}`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

    // Tampilkan SweetAlert
    MySwal.fire({
      title: `Message Sent!`,
      text: `Thank you, ${formData.name}! We will contact you soon.`,
      icon: "success",
      background: "linear-gradient(to bottom, black, #7f1d1d)",
      color: "#e5e7eb",
    }).then(() => {
      // Redirect ke WhatsApp
      window.open(whatsappURL, "_blank");
    });
  };

  return (
    <>
      <Header />
      <section className="bg-gradient-to-b from-black to-red-900 text-white py-[5rem] font-[orbitron]">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-4xl">
          <h1 className="text-2xl font-bold mb-8 border-b border-gray-300 py-2">
            Contact Us
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/50 text-white text-sm border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-white"
                placeholder="Name..."
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-black/50 text-white text-sm border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-white"
                placeholder="Phone..."
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/50 text-sm text-white border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-white"
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black/50 text-sm text-white border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-white"
                placeholder="Your Message..."
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-[25%] text-sm bg-black/50 text-white rounded-md font-semibold py-2 px-4 hover:text-red-700"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="bg-gradient-to-t from-black to-red-900">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
