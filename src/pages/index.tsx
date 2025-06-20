import React,{ useState, useEffect, useRef } from "react";
import { Wrench, Car, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate} from "react-router-dom";
import shopImg from '@/assets/shop.jpg';
import workImg from '@/assets/work.jpg';
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ReadMoreCard from "@/components/ui/ReadMoreCard.tsx";
import BookForm from '../components/bookform';
import { useLocation, useSearchParams } from "react-router-dom";


const Index = () => {

 
const location = useLocation();
  const [searchParams] = useSearchParams();
 
  useEffect(() => {
    if (location.hash === "#services") {
      const el = document.getElementById("services");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  

  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let startTime: number;
      let animationFrame: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);
    return count;
  };

  const yearsCount = useCounter(20);
  const customersCount = useCounter(2500);
  const carsCount = useCounter(5000);

  

//added for experience 

const CounterCard = ({ icon: Icon, value, label, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white border border-gray-200/60 rounded-2xl shadow-lg p-10 transition-all duration-300 hover:scale-105 hover:shadow-yellow-300/50 group"
  >
    <div className="mb-5 flex justify-center">
      <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center shadow-inner group-hover:bg-yellow-200 transition-colors duration-300">
        <Icon className="w-10 h-10 text-yellow-600" strokeWidth={1.5} />
      </div>
    </div>
    <div className="text-5xl font-bold text-center text-gray-800 tracking-wide">
      <CountUp end={value} duration={2.5} separator="," />+
    </div>
    <p className="mt-3 text-lg font-medium text-center text-gray-600">{label}</p>
  </motion.div>
);

const CountersSection = ({ yearsCount, customersCount, carsCount }: any) => (
  <section className="py-20 px-6 sm:px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-yellow-50">
    <div className="max-w-7xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-extrabold text-black-600">Why Choose Us?</h2>
      <p className="mt-4 text-lg text-gray-600">
        Experience, trust, and customer satisfaction over the years
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <CounterCard icon={Wrench} value={yearsCount} label="Years in Repair" delay={0.1} />
      <CounterCard icon={CheckCircle} value={customersCount} label="Happy Customers" delay={0.2} />
      <CounterCard icon={Car} value={carsCount} label="Serviced Cars" delay={0.3} />
    </div>
  </section>
);


//added

const steps = [
  {
    id: 1,
    icon: "📥",
    title: "Flexible & Expert Vehicle Drop/Pick-Up",
    description:
      "Customers can drop off their vehicle or request a pick-up by our technician, who will inspect and transport it safely to our workshop.",
  },
  {
    id: 2,
    icon: "🔧",
    title: "Precision Service & Diagnostics",
    description:
      "We use advanced diagnostic tools to accurately identify issues and service your car with professional care.",
  },
  {
    id: 3,
    icon: "✔️",
    title: "Rigorous Quality Assurance",
    description:
      "After servicing, we conduct strict inspection and test driving to ensure everything meets our standards.",
  },
  {
    id: 4,
    icon: "🚘",
    title: "Timely Vehicle Drop-Off",
    description:
      "We return your vehicle at your convenience and ensure you're fully satisfied with the service.",
  },
];


  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [open, setOpen] = useState(false);


  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-700"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?...')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Expert Car Service
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mt-2">
                You Can Trust
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional automotive care with certified technicians and state-of-the-art equipment
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-12 py-6 text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25 rounded-xl"
              onClick={() => setOpen(true)}
            >
              Book Appointment Now
            </Button>
            {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white rounded-xl p-8 w-full max-w-lg relative">
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            {/* Form goes here */}
            <BookForm onClose={() => setOpen(false)} />
          </div>
        </div>
      )}
          </div>
        </div>
      </section>


      {/* Welcome Section */}

      <section className="flex flex-col md:flex-row items-center justify-center bg-white py-16 px-4">
  {/* Left: Image */}
  <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
    <img
      src={shopImg}// Replace with your image path
      alt="Car Service"
      className="rounded-lg shadow-lg max-w-full h-auto"
    />
  </div>
  {/* Right: Text */}
  <div className="md:w-1/2 w-full md:pl-12 text-center md:text-left">
    <h2 className="text-4xl font-bold mb-6">
      Welcome To <span className="text-yellow-600">VRTA Motors</span> – Where Your Car Deserves The Best!
    </h2>
    <p className="text-xl text-gray-600 mb-6">
      At VRTA Motors, we understand that your vehicle is more than just a means of transportation – 
      it's your trusted companion on life's journey. Our team of certified technicians combines years 
      of experience with cutting-edge diagnostic equipment to deliver exceptional automotive care. 
      From routine maintenance to complex repairs, we treat every vehicle with the precision and attention 
      it deserves. Trust us to keep your car running smoothly, safely, and efficiently, so you can drive 
      with complete confidence knowing your vehicle is in expert hands.
    </p>
   
  </div>
</section>

<hr className="border-t border-yellow-300 my-8" />

{/* Our Section */}

<section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Our Premium Services</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Professional automotive care for all your vehicle needs with certified expertise.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        { id:1, 
          title: "Periodic Services & Suspension Repairs",
          desc: "Smooth rides start with timely care",
          bg: "minor-service",
        },
        { id:2,
          title: "Engine Overhaul & Automatic Transmission Overhaul",
          desc: "Power restored, performance assured",
          bg: "transmission",
        },
        { id:3,
          title: "Full Body Painting & Accident Repairs",
          desc: "Crash to classy – full body repair & paint",
          bg: "diagnostics",
        },
        { id:4,
          title: "All Electrical & Electronic Services",
          desc: "We fix every wire and warning light",
          bg: "electrical",
        },
        { id:5,
          title: "Programming & Coding",
          desc: "Smart coding for smarter drives",
          bg: "coding",
        },
        { id:6,
          title: "AC and services",
          desc: "Cool comfort, guaranteed",
          bg: "ac-service",
        },
      ].map((service, index) => (
        <ReadMoreCard 
        id = {service.id}
        bImg = {service.bg}
        index = {index}
        title = {service.title}
        desc = {service.desc}

        />
      ))}
    </div>
  </div>
</section>

<hr className="border-t border-yellow-300 my-8" />

{/* counter services */}

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
  <CountersSection
  yearsCount={yearsCount}
  customersCount={customersCount}
  carsCount={carsCount}
/>

</section>

  



      {/* Why Choose VRTA Motors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-10">
                Why Choose <span className="text-yellow-600">VRTA Motors</span>?
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Trusted Service", desc: "15+ years of reliable automotive care you can depend on" },
                  { title: "Trained Experts", desc: "Certified technicians with extensive automotive expertise" },
                  { title: "Genuine Parts", desc: "Only authentic parts to ensure quality and longevity" },
                  { title: "Pick-up & Drop", desc: "Convenient vehicle collection and delivery service" },
                  { title: "Transparent Pricing", desc: "No hidden costs, fair and competitive pricing" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
                    <CheckCircle className="h-7 w-7 text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-primary/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <img 
                src={workImg} 
                alt="Professional mechanic working on a car"
                className="relative rounded-2xl shadow-2xl w-50 h-50 transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-8 leading-tight">
            Unlock Peak Performance – Schedule Your Service With Us
          </h2>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-16 py-6 text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25 rounded-xl"
          >
            Book Appointment Now
          </Button>
        </div>
      </section>

{/* animated workflow 22 */}

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-black-600 mb-6 text-center">
          Our Work Flow
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 text-center">
          A smooth journey from pick-up to delivery with expert care at every step.
        </p>
        {/* Emoji animation  */}
        <div className="relative mt-12 h-16">
          <div
            className="absolute transition-all duration-700 text-3xl"
            style={{ left: `${(currentStep / (steps.length - 1)) * 100}%` }}
          >
            🚶‍♂️‍➡️
          </div>
        </div>

        {/* Connector with Icons */}
        <div className="flex items-center justify-between relative mb-16">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div
                className={`z-10 w-12 h-12 flex items-center justify-center rounded-full text-2xl transition-all duration-500 ${
                  currentStep === index
                    ? "bg-yellow-500 text-white scale-110"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {step.icon}
              </div>
              {index !== steps.length - 1 && (
                <div
                  className={`flex-1 h-1 transition-all duration-500 ${
                    currentStep > index ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`rounded-xl p-6 shadow-lg transition-all duration-500 border text-center h-full flex flex-col justify-between ${
                currentStep === index
                  ? "bg-yellow-50 border-yellow-500 scale-105"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3 className="text-lg font-bold text-yellow-700 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};


export default Index;
