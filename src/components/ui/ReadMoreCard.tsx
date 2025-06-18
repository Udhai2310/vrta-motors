import { useNavigate } from "react-router-dom";
import minorServiceImg from '@/assets/minor-services.jpg';
import transmissionImg from '@/assets/transmission.jpg';
import diagnosticsImg from '@/assets/diagnostics.jpg';
import acServiceImg from '@/assets/ac-service.jpg';
import CodingImg from '@/assets/coding.jpg';
import ElectricalImg from '@/assets/electrical.jpg';

const imageMap: Record<string, string> = {
    'minor-service': minorServiceImg,
    'transmission': transmissionImg,
    'diagnostics': diagnosticsImg,
    'ac-service': acServiceImg,
    'electrical': ElectricalImg,
    'coding': CodingImg,
};

function ReadMoreCard(props) {
    const navigate = useNavigate();
    return (
        <div
            className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 h-96"
            style={{
                backgroundImage: `url(${imageMap[props.bImg]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition duration-300" />
            <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2">{props.title}</h3>
                    <p className="text-lg leading-relaxed">{props.desc}</p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <button 
                        className="border border-white text-white font-semibold px-5 py-2 rounded hover:bg-white hover:text-black transition"
                        onClick={()=>navigate('/readmore', { state: { key: props.id } })}
                    >
                        Read More
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded shadow-md transition"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReadMoreCard;
