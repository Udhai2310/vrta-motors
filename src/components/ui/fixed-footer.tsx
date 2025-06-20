import { MessageCircle, Calendar, Phone } from 'lucide-react'; // or your icons


const ContactActions = () => {
  return (
    <div className="relative">

      {/* Fixed bottom contact buttons */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <section className="bg-gradient-to-br from-gray-900 to-black py-3">
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-2 px-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919962098589"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-green-500 text-white hover:text-black flex flex-col items-center justify-center space-y-2 p-4 rounded-xl shadow-lg border border-gray-700 hover:border-green-400"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>

            {/* Book Appointment */}
            <button
              onClick={() => alert("Booking feature coming soon!")}
              className="bg-gray-800 hover:bg-yellow-500 text-white hover:text-black flex flex-col items-center justify-center space-y-2 p-4 rounded-xl shadow-lg border border-gray-700 hover:border-yellow-400"
            >
              <Calendar className="h-6 w-6" />
              <span className="text-sm font-medium">Book</span>
            </button>

            {/* Talk to Expert */}
            <a
              href="tel:+919840364849"
              className="bg-gray-800 hover:bg-blue-500 text-white hover:text-black flex flex-col items-center justify-center space-y-2 p-4 rounded-xl shadow-lg border border-gray-700 hover:border-blue-400"
            >
              <Phone className="h-6 w-6" />
              <span className="text-sm font-medium">Call</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactActions;
