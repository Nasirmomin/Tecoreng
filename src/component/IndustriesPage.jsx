import Supply from '../assets/supply-chain-logistics.ca505939.webp'
import Health from '../assets/healthcare.1e469520.webp'
import Education from '../assets/education.58704c82.webp'
import Banking from '../assets/Banking.ac0ca362.webp'
import Ecommerce from '../assets/E-commerce.498b7a79.webp'
import Travel from '../assets/Travel.6c977598.webp'

const IndustriesPage = () => {
    return (
        <div className="bg-[#01132E] text-white p-8 sm:p-12 md:p-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-left">
                Industries We are Experts In
            </h1>

            <div className="grid grid-cols-12 gap-6">
                {/* First Row */}
                <div className="col-span-6 relative rounded-xl overflow-hidden group">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src={Supply}
                            alt="Supply Chain & Logistics"
                            className="w-full h-48 object-cover transition-transform duration-300 opacity-80 group-hover:scale-110 group-hover:opacity-100"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300 rounded-xl">
                        <h2 className="text-lg md:text-xl font-bold text-white text-center px-4 transform group-hover:scale-105 transition-transform duration-300">Supply Chain & Logistics</h2>
                    </div>
                </div>

                <div className="col-span-3 relative rounded-xl overflow-hidden group">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src={Health}
                            alt="Healthcare"
                            className="w-full h-48 object-cover transition-transform duration-300 opacity-80 group-hover:scale-110 group-hover:opacity-100"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300 rounded-xl">
                        <h2 className="text-lg md:text-xl font-bold text-white text-center px-4 transform group-hover:scale-105 transition-transform duration-300">Healthcare</h2>
                    </div>
                </div>

                <div className="col-span-3 relative rounded-xl overflow-hidden group">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src={Education}
                            alt="Education"
                            className="w-full h-48 object-cover transition-transform duration-300 opacity-80 group-hover:scale-110 group-hover:opacity-100"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300 rounded-xl">
                        <h2 className="text-lg md:text-xl font-bold text-white text-center px-4 transform group-hover:scale-105 transition-transform duration-300">Education</h2>
                    </div>
                </div>

                {/* Second Row - Modified width distribution */}
                <div className="col-span-3 relative rounded-xl overflow-hidden group">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src={Banking}
                            alt="Banking"
                            className="w-full h-48 object-cover transition-transform duration-300 opacity-80 group-hover:scale-110 group-hover:opacity-100"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300 rounded-xl">
                        <h2 className="text-lg md:text-xl font-bold text-white text-center px-4 transform group-hover:scale-105 transition-transform duration-300">Banking</h2>
                    </div>
                </div>

                <div className="col-span-3 relative rounded-xl overflow-hidden group">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src={Ecommerce}
                            alt="E-commerce"
                            className="w-full h-48 object-cover transition-transform duration-300 opacity-80 group-hover:scale-110 group-hover:opacity-100"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300 rounded-xl">
                        <h2 className="text-lg md:text-xl font-bold text-white text-center px-4 transform group-hover:scale-105 transition-transform duration-300">E-commerce</h2>
                    </div>
                </div>

                <div className="col-span-6 relative rounded-xl overflow-hidden group">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src={Travel}
                            alt="Travel"
                            className="w-full h-48 object-cover transition-transform duration-300 opacity-80 group-hover:scale-110 group-hover:opacity-100"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300 rounded-xl">
                        <h2 className="text-lg md:text-xl font-bold text-white text-center px-4 transform group-hover:scale-105 transition-transform duration-300">Travel</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustriesPage;