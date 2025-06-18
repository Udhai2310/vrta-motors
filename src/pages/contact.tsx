import React from "react";
import { PhoneCall,Mail,MapPin} from "lucide-react";
import { useNavigate } from "react-router-dom";


const Contact: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[65vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/f8/a3/7d/f8a37d6b9aa7999a16abf4e318420665.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        <div className="relative z-10 text-center text-white space-y-4 px-4">
          {/* Breadcrumb */}
          <p className="text-lg font-medium tracking-wide text-gray-300">
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer hover:underline text-yellow-400"
            >
              HOME
            </span>{" "}
            &raquo; <span className="text-white">CONTACT US</span>
          </p>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl font-extrabold text-yellow-400 drop-shadow-lg tracking-wide">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* by mee*/}
      <section className="bg-white text-black py-16 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    {/* Left: Contact Details */}
    <div className="space-y-6">
      <h2 className="text-4xl font-bold leading-tight mb-6">
        Get In Touch To Schedule Your Service Appointment Today!
      </h2>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Contact Number:</h3>
        <p className="flex items-center gap-3 text-gray-800">
          <PhoneCall className="h-5 w-5 text-yellow-500" /> +91 9840364849
        </p>
        <p className="flex items-center gap-3 text-gray-800">
          <Mail className="h-5 w-5 text-yellow-500" /> info@auto.in
        </p>
      </div>

      <div className="space-y-4 pt-4">
        <h3 className="text-xl font-semibold">Address:</h3>
        <p className="flex items-center gap-3 text-gray-800">
          <MapPin className="h-5 w-5 text-yellow-500" /> Symphony Motors,
          OMR, Sholinganallur, Chennai
        </p>
      </div>
    </div>

    {/* Right: Enquiry Form */}
    <div className="bg-gray-100 p-8 rounded-2xl shadow-lg space-y-6">
      <h3 className="text-2xl font-bold mb-4">Enquire Now</h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="p-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="human" className="w-4 h-4" />
          <label htmlFor="human" className="text-gray-700">I am human</label>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300"
        >
          Book Now
        </button>
      </form>
    </div>
  </div>
</section>

{/* map */}
<section className="w-full">
  <iframe
    title="Garage Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0953468291263!2d80.22905781482058!3d12.89885779089544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dc0f4ed2793%3A0x88d46c6bd738c6e1!2sSymphony%20Enterprises!5e0!3m2!1sen!2sin!4v1718287700872!5m2!1sen!2sin"
    width="100%"
    height="450"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="border-0 grayscale"
  ></iframe>
</section>




      {/* Contact Action Buttons 
      <section className="bg-gradient-to-br from-gray-900 to-black py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
          {/* WhatsApp 
          <a
            href="https://wa.me/918939155504"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-green-500 text-white hover:text-black flex flex-col items-center justify-center space-y-3 p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-green-400"
          >
            <MessageCircle className="h-8 w-8" />
            <span className="text-lg font-semibold">WhatsApp</span>
          </a>

          {/* Book Appointment 
          <button
            onClick={() => alert("Booking feature coming soon!")}
            className="bg-gray-800 hover:bg-yellow-500 text-white hover:text-black flex flex-col items-center justify-center space-y-3 p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-yellow-400"
          >
            <Calendar className="h-8 w-8" />
            <span className="text-lg font-semibold">Book Appointment</span>
          </button>

          {/* Talk to Expert 
          <a
            href="tel:+918939155504"
            className="bg-gray-800 hover:bg-blue-500 text-white hover:text-black flex flex-col items-center justify-center space-y-3 p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-blue-400"
          >
            <Phone className="h-8 w-8" />
            <span className="text-lg font-semibold">Talk to an Expert</span>
          </a>
        </div>
      </section>*/}
    </>
  );
};

export default Contact;
