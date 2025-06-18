import { useLocation } from 'react-router-dom';
import ReadMoreData from "@/pages/readmoreData.js";
import EnquiryForm from '@/components/enquiryform';

function ReadMore() {
    const location = useLocation();
    const key = location.state?.key;

    if (!key) return <div>No key provided!</div>;

    return (
        <>
            {ReadMoreData.map((n) => {
                if (key === n.id) {
                    return (
                        <>
                            {/* Background Section */}
                            <div
                                className="bodyRm min-h-[60vh] sm:min-h-[70vh] bg-cover bg-center flex items-center justify-center relative"
                                style={{ backgroundImage: `url('${n.backgroundImg}')` }}
                            >
                                <div className="absolute inset-0 bg-black/60"></div>
                                <div className="relative z-10 text-center px-4 py-12 max-w-3xl mx-auto">
                                    <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4">{n.HeaderTitle}</h1>
                                    <p className="text-white text-base sm:text-lg">{n.headerDesc}</p>
                                </div>
                            </div>
                            
                            {/* Main Content + Enquiry Form Section */}
                            <div className="container mx-auto px-4 py-12">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Main Content */}
                                    <div className="flex-1">
                                        <div className="bg-white bg-opacity-95 rounded-xl shadow-lg p-6 mb-8">
                                            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">{n.pageTitle}</h2>
                                            <p className="text-gray-700 mb-6">{n.pageDesc}</p>
                                            <ul className="space-y-4">
                                                {n.pagePoints.map(point => (
                                                    <li key={point.id} className="flex items-start">
                                                        <span className="mt-1 mr-3 text-yellow-500">●</span>
                                                        <div>
                                                            <span className="font-semibold">{point.li}</span>
                                                            <span className="text-gray-600"> {point.content}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/* If you have more sections like pageTitle1/pageDesc1, render them here */}
                                        {n.pageTitle1 && (
                                            <div className="bg-white bg-opacity-95 rounded-xl shadow-lg p-6 mb-8">
                                                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">{n.pageTitle1}</h2>
                                                <p className="text-gray-700 mb-6">{n.pageDesc1}</p>
                                                <ul className="space-y-4">
                                                {n.pagePoints1.map(point => (
                                                    <li key={point.id} className="flex items-start">
                                                        <span className="mt-1 mr-3 text-yellow-500">●</span>
                                                        <div>
                                                            <span className="font-semibold">{point.li}</span>
                                                            <span className="text-gray-600"> {point.content}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                            </div>
                                        )}
                                    </div>
                                    {/* Enquiry Form */}
                                    <div className="lg:w-[350px] w-full flex-shrink-0">
                                        <EnquiryForm />
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                }
                return null;
            })}
        </>
    );
}

export default ReadMore;
