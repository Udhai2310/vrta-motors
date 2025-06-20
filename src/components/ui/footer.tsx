import React from "react";
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { Link } from "react-router-dom";


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10 mb-10">

          {/* Logo and Address */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-4 pl-10"  >
              <img src={logo} alt="VRTA Motors" className="h-14 w-auto" />
              <p className="text-sm text-gray-300 leading-6 font-medium">
                VRTA Motors<br /> Multi-Brand<br />
                Medavakkam, Chennai, Tamil Nadu 
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 pl-20">
            <h3 className="text-lg font-bold text-yellow-400 mb-2">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 font-medium">
            <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/#services" className="hover:text-yellow-400">Services</Link></li>
           <li><Link to="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
<div className="space-y-6 pr-20 ">
  <h3 className="text-xl font-bold text-yellow-400 mb-6">Services</h3>
  <ul className="space-y-3 font-medium">
    <li>
      <Link to="/#services?highlight=1" className="text-gray-300 hover:text-yellow-400 transition-all duration-300">
        Periodic Services & Suspension Repair
      </Link>
    </li>
    <li>
      <Link to="/#services?highlight=2" className="text-gray-300 hover:text-yellow-400 transition-all duration-300">
        Engine Overhaul & transmission Overhaul
      </Link>
    </li>
    <li>
      <Link to="/#services?highlight=3" className="text-gray-300 hover:text-yellow-400 transition-all duration-300">
        Full Body Painting & Accident Repairs
      </Link>
    </li>
    <li>
      <Link to="/#services?highlight=4" className="text-gray-300 hover:text-yellow-400 transition-all duration-300">
        All Electrical & Electronic Services
      </Link>
    </li>
  </ul>
</div>


          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-400">Contact Info</h3>
            <div className="flex items-center space-x-2 font-medium text-gray-300">
              <Mail className="h-5 w-5 text-yellow-400"/>
              <span>vrtamotors@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 font-medium text-gray-300">
              <Phone className="h-5 w-5 text-yellow-400"/>
              <span>9840364849</span>
            </div>
            <div className="flex items-center space-x-2 font-medium text-gray-300">
              <MapPin className="h-5 w-5 text-yellow-400"/>
              <span> Krishnaveni Nagar, Medavakkam, Chennai, Tamil Nadu 600100</span>
            </div>

            <div className="mt-30">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Join the Conversation</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-4 rounded-xl hover:bg-gradient-to-br hover:from-yellow-500 hover:to-yellow-600 hover:text-black transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-4 rounded-xl hover:bg-gradient-to-br hover:from-yellow-500 hover:to-yellow-600 hover:text-black transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://wa.me/9876543210" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-4 rounded-xl hover:bg-gradient-to-br hover:from-yellow-500 hover:to-yellow-600 hover:text-black transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg">
                <MessageCircle className="h-6 w-6" />
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-10 text-center border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">© 2025 VRTA Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
