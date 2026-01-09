import React, { useState } from "react";

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "919840364849";
    const text = `Name: ${formData.name}%0aMobile: ${formData.mobile}%0aMessage: ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="bg-gray-100 p-8 rounded-2xl shadow-lg space-y-6">
        <h3 className="text-2xl font-bold mb-4">Enquire Now</h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </>
  );
}

export default EnquiryForm;
