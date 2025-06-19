import React from 'react';
import { useNavigate } from "react-router-dom";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[65vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:`url('https://i.pinimg.com/736x/f8/a3/7d/f8a37d6b9aa7999a16abf4e318420665.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        <div className="relative z-10 text-center text-white space-y-4 px-4">
          <p className="text-lg font-medium tracking-wide text-gray-300">
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer hover:underline text-yellow-400"
            >
              HOME
            </span>{" "}
            &raquo; <span className="text-white">ABOUT US</span>
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-yellow-400 drop-shadow-lg tracking-wide">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <p className="text-xl leading-relaxed tracking-wide capitalize">
            At VRTA Motors, we are dedicated to delivering top-quality automotive service with a commitment to customer satisfaction. As a trusted multi-brand service provider in Chennai, we offer a wide range of solutions, from routine maintenance to advanced diagnostics and complex repairs. Our team of certified technicians uses state-of-the-art tools and genuine parts to ensure your vehicle performs smoothly, safely, and efficiently. We believe in building long-term relationships through honesty, reliability, and expert care. With every service, our goal is to make your driving experience safer and stress-free, ensuring you hit the road with complete peace of mind.
          </p>
        </div>
      </section>

      {/* New Beginning Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-full">
            <img
              src="https://i.pinimg.com/736x/37/f1/9d/37f19d0a467ec3593fb84dbe9c558bf5.jpg"
              alt="Symphony Motors"
              className="w-full h-full object-cover rounded-2xl"
              style={{
                clipPath: "polygon(0 0, 95% 0, 100% 5%, 100% 100%, 0% 100%)",
              }}
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold text-gray-900">
              New Beginnings With VRTA Motors
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are excited to announce a bold new chapter as VRTA Motors, now proudly operating from Medavakkam.With renewed passion and commitment, we look forward to continuing our journey with you — delivering excellence, innovation, and trusted service.Thank you for being a part of our story.Here’s to new roads ahead — together!— Team VRTA Motors
            </p>
          </div>
        </div>
      </section>

{/* Mission Section */}
<section className="grid grid-cols-1 md:grid-cols-2 min-h-[450px]">
  {/* Left Side - Black Background with CTA */}
  <div className="bg-black text-white flex flex-col justify-center px-10 py-12 space-y-6">
    <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
      Transform Your Driving Experience
    </h2>
    <p className="text-lg text-gray-300">
      Book your appointment now for expert service and unparalleled care. Your vehicle deserves the best attention.
    </p>
    <button
      onClick={() => navigate("/appointment")}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-semibold rounded w-fit"
    >
      Make an Appointment
    </button>
  </div>

 {/* Right Side - Image with Mission Card */}
 <div className="relative w-full h-[450px]">
    <img
      src="https://i.pinimg.com/736x/f7/cb/6f/f7cb6f45b1b9506bb8dfdfec8e9d31e2.jpg"
      alt="Garage Workshop"
      className="w-full h-full object-cover"
    />
    {/* Overlay Card */}
    <div className="absolute bottom-6 left-6 bg-white bg-opacity-95 p-6 rounded shadow-xl max-w-sm">
      <h3 className="text-2xl font-bold mb-2 text-gray-900">Our Mission</h3>
      <p className="text-gray-700 text-base leading-relaxed">
        Our mission is to deliver unparalleled automotive services through exceptional craftsmanship, innovative solutions, and unwavering commitment to customer satisfaction, ensuring every vehicle performs at its best.
      </p>
    </div>
  </div>
</section>

{/* space 
<section>
    <h1>    -------</h1>
</section>*/}

{/* FAQ Section */}
<section className="bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-left">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">
      {[
        {
          question: "What types of services do you offer?",
          answer:
            "We provide a wide range of services, including accidental repairs, engine overhauls, transmission work, and all electrical services. Our experienced technicians ensure quality care for all vehicle types."
        },
        {
          question: "How long does a typical repair take?",
          answer:
            "Repair times vary based on the service needed, but we strive for quick turnaround times without compromising quality. Our team will provide an estimated completion time when you book your service."
        },
        {
          question: "Do you offer warranties on your services?",
          answer:
            "Yes, we stand behind our work and offer warranties on repairs and parts. This commitment ensures you can trust the quality of our services."
        },
        {
          question: "Can I schedule an appointment online?",
          answer:
            "Absolutely! You can easily book an appointment through our website’s “Book Now” page at your convenience. Our team will confirm your booking promptly."
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept various payment methods, including cash, credit cards, and digital payment options. Our goal is to provide you with a hassle-free payment experience."
        },
        {
          question: "How do I know if my vehicle needs repairs?",
          answer:
            "Pay attention to unusual sounds, warning lights, or changes in performance. If you notice any issues, it’s best to consult our technicians for a comprehensive inspection."
        }
       ].map((item, index) => (
        <div key={index}>
          {/* Question Box */}
          <details className="group border border-gray-300 rounded-lg overflow-hidden">
            <summary className="bg-gray-100 px-6 py-4 text-lg font-semibold text-gray-900 cursor-pointer flex justify-between items-center hover:bg-yellow-50 transition-all duration-300">
              {item.question}
              <span className="text-black transform group-open:rotate-180 transition-transform">▲</span>
            </summary>

            {/* Answer Box */}
            <div className="bg-white px-6 py-4 text-gray-700 text-base leading-relaxed border-t border-gray-200">
              {item.answer}
            </div>
          </details>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
};

export default About;