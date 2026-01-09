import React, { useState } from "react";

function BookForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "919840364849"; // Your WhatsApp number (with country code, no +)
    const text = `Name: ${form.name}%0aMobile: ${form.mobile}%0aEmail: ${form.email}%0aService: ${form.service}%0aMessage: ${form.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-4">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="bg-black text-white p-2 rounded w-1/2" required />
        <input name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange} className="bg-black text-white p-2 rounded w-1/2" required />
      </div>
      <div className="flex gap-4">
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="bg-black text-white p-2 rounded w-1/2" required />
        <select name="service" value={form.service} onChange={handleChange} className="bg-black text-white p-2 rounded w-1/2" required>
          <option value="">Select Service</option>
          <option value="Accidental Repairs">Accidental Repairs</option>
          <option value="Periodic Services">Periodic Services</option>
          <option value="AC and Services">AC and Services</option>
          <option value="Engine Overhaul & Transmission Overhaul">Engine Overhaul & Transmission Overhaul</option>
          <option value="All Electrical & Electronic Services">All Electrical & Electronic Services</option>
          <option value="Full Body Painting">Full Body Painting</option>
          <option value="Programming & Coding">Programming & Coding</option>
          <option value="Accidental repairs">Accidental repairs</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="bg-black text-white p-2 rounded w-full" />
      <button type="submit" className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-xl w-full">Book Now</button>
    </form>
  );
}

export default BookForm;