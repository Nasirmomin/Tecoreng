import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import laptop from '../laptop.svg';
import logo from "../logo.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navItems = [
        { name: 'Services', link: '/services' },
        { name: 'About Us', link: '/about', hasArrow: true },
        { name: 'Career', link: '/careers' },
        { name: 'Portfolio', link: '/portfolio' },
        { name: 'Blog', link: '/blog' },
    ];

    return (
        <div
            className="App min-h-screen flex flex-col bg-[#01132E] text-white overflow-x-hidden"
            style={{
                backgroundImage: `url(${laptop})`,
                backgroundSize: 'cover',
                backgroundPosition: 'left top',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#01132E] shadow-md">
                <nav className="navbar flex items-center justify-between px-4 py-3">
                    <div className="logo">
                        <img src={logo} alt="Tecoreng Logo" className="h-10" />
                    </div>

                    <ul className={`nav-links md:flex gap-8 ml-auto hidden text-sm`} style={{ marginLeft: '3px' }}>
                        {navItems.map((item) => (
                            <li key={item.name} className="text-lg">
                                <a href={item.link} className="text-white hover:text-orange-500 no-underline flex items-center gap-1">
                                    {item.name}
                                    {item.hasArrow && (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-buttons hidden md:flex gap-4">
                        <button className="px-4 py-2 bg-transparent border-2 border-[#f5f5f5] text-white rounded-full hover:bg-gradient-to-r hover:from-[#FFA07A] hover:to-[#FF6347] hover:border-transparent">
                            Hire Developers
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-[#FFA07A] to-[#FF6347] text-white rounded-full hover:from-[#E25F3C] hover:to-[#C84F33]">
                            Get a Quote
                        </button>
                    </div>
                </nav>

                <ul
                    className={`nav-links md:hidden flex flex-col items-center gap-3 px-6 py-4 bg-[#001f3d] shadow-lg ${menuOpen ? 'block' : 'hidden'}`}
                >
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a href={item.link} className="text-white hover:text-orange-500 no-underline flex items-center gap-1">
                                {item.name}
                                {item.hasArrow && (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </a>
                        </li>
                    ))}
                    <div className="flex flex-col gap-4 w-full mt-4">
                        <button className="w-full px-4 py-2 bg-transparent border-2 border-[#f5f5f5] text-white rounded-full hover:bg-gradient-to-r hover:from-[#FFA07A] hover:to-[#FF6347] hover:border-transparent">
                            Hire Developers
                        </button>
                        <button className="w-full px-4 py-2 bg-gradient-to-r from-[#FFA07A] to-[#FF6347] text-white rounded-full hover:from-[#E25F3C] hover:to-[#C84F33]">
                            Get a Quote
                        </button>
                    </div>
                </ul>
            </header>
            <main className="flex-grow flex items-center justify-start">
                <section className="hero flex flex-col justify-start items-start h-full text-left">
                    <h1 className="data font-extrabold text-5xl md:text-6xl leading-tight transform translate-x-10 translate-y-10">
                        Web & Mobile App<br />
                        Development Company
                    </h1>
                </section>
            </main>

            <style >{`
                .hero h1 {
                    text-align: left;
                    color: white;
                    margin-left: 10%; /* Shift 10% to the right */
                    margin-top: 10%;  /* Shift 10% to the bottom */
                }

                @media (max-width: 1024px) {
                    .App {
                        background-size: contain;
                        background-position: center;
                    }

                    .hero h1 {
                        font-size: 4rem; /* Adjusted for medium screens */
                        margin-left: 5%; /* Slightly reduced on medium screens */
                        margin-top: 5%;
                        line-height: 1.4;
                    }
                }

                @media (max-width: 768px) {
                    .App {
                        background-size: 150% 150%;
                        background-position: top center;
                    }

                    .hero h1 {
                        font-size: 3rem; /* Adjusted for smaller screens */
                        margin-left: 5%; /* Maintain alignment for smaller screens */
                        margin-top: 5%;
                        line-height: 1.4;
                    }
                }

                @media (max-width: 480px) {
                    .App {
                        background-size: 200% 200%;
                        background-position: center;
                    }

                    .hero h1 {
                        font-size: 2rem; /* Adjusted for mobile screens */
                        margin-left: 2%;
                        margin-top: 2%;
                    }
                }
            `}</style>
        </div>
    );
};

export default Navbar;
