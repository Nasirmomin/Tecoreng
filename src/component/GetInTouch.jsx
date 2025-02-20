import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Linkedin from '../../tecoreng.com-svg/linkedin.svg';
import Twitter from '../../tecoreng.com-svg/twitter.svg';
import Facebook from '../../tecoreng.com-svg/fb.svg';
import Pinterest from '../../tecoreng.com-svg/Pinterest.svg';
import Behance from '../../tecoreng.com-svg/Behance.svg';
import Medium from '../../tecoreng.com-svg/Medium.svg';
import Dribble from '../../tecoreng.com-svg/Dribblbe.svg';
import Skype from '../../tecoreng.com-svg/skype.svg';
import Phone from '../../tecoreng.com-svg/phone.svg';
import Upload from '../../tecoreng.com-svg/upload.svg';

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        idea: '',
        file: null,
        captcha: '',
    });

    const [captchaValid, setCaptchaValid] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValid(value ? true : false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaValid) {
            alert('Please complete the CAPTCHA.');
            return;
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto py-10 px-4 lg:px-8">
            <div className="flex flex-wrap justify-between">
                {/* Left Section - Hidden on Small Screens */}
                <div className="hidden lg:block w-full lg:w-1/2 mb-8 lg:mb-0 text-white">
                    <h3 className="text-3xl font-bold mb-6 ml-8">We Are Here To Help You</h3>
                    <p className="text-2xl font-bold mb-8 ml-8 leading-relaxed">
                        Let’s Transform Your <br /> Vision Into Value.
                    </p>

                    <p className="text-lg font-medium mb-4 ml-8">Contact us:</p>
                    <ul className="mb-8">
                        <li className="text-md mb-6 ml-8">
                            <img src={Skype} alt="Skype" className="inline mr-2 w-4 h-4 text-blue-500" />
                            biz.tecoreng
                        </li>
                        <li className="text-md mb-6 ml-8">
                            <img src={Phone} alt="Phone" className="inline mr-2 w-4 h-4 text-blue-500" />
                            +91 85117 46476
                        </li>
                    </ul>

                    <p className="text-2xl font-extrabold ml-8 mb-1">Our Socials:</p>
                    <p className="text-md font-semibold mt-4 ml-8">Don’t Miss To Follow Us On Our Social Networks Accounts.</p>
                    <div className="flex space-x-6 ml-8">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={Twitter} alt="Twitter" className="w-8 h-8 hover:scale-105 transition-transform duration-300" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={Facebook} alt="Facebook" className="w-8 h-8 hover:scale-105 transition-transform duration-300" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="LinkedIn" className="w-8 h-8 hover:scale-105 transition-transform duration-300" />
                        </a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                            <img src={Pinterest} alt="Pinterest" className="w-8 h-8 hover:scale-105 transition-transform duration-300" />
                        </a>
                        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                            <img src={Behance} alt="Behance" className="w-8 h-8 hover:scale-105 transition-transform duration-300" />
                        </a>
                        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                            <img src={Dribble} alt="Dribble" className="w-8 h-8 hover:scale-105 transition-transform duration-300" />
                        </a>
                        <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
                            <img src={Medium} alt="Medium" className="w-8 h-8 hover:scale-105 transition-transform duration-300" />
                        </a>
                    </div>
                </div>

                {/* Right Section - Form (Always Visible) */}
                <div className="w-full md:w-[60%] lg:w-[45%] bg-white p-3 sm:p-8 md:p-6 mr-3 rounded-3xl max-w-xl shadow-lg relative">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold ml-4 mb-1">
                        <span className="text-black">Get</span>{' '}
                        <span className="text-black">in</span>{' '}
                        <span className="bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text">
                            Touch
                        </span>
                    </h3>
                    <p className="text-md sm:text-lg ml-4 mb-6">
                        We are always ready to help. There are many ways to contact us. You may drop us a line, give us a call, or send an email.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6 relative">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full py-2 border-b-2 border-gray-300 focus:outline-none text-sm sm:text-base" placeholder="Name" required />
                        </div>
                        <div className="mb-6 relative">
                            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="w-full py-2 border-b-2 border-gray-300 focus:outline-none text-sm sm:text-base" placeholder="Contact Number" required />
                        </div>
                        <div className="mb-6 relative">
                            <input type='email' name="email" value={formData.idea} onChange={handleChange} className="w-full py-2 border-b-2 border-gray-300 focus:outline-none text-sm sm:text-base" placeholder="Email" required />
                        </div>
                        <div className="mb-6 relative">
                            <input type='text' name="idea" value={formData.idea} onChange={handleChange} className="w-full py-2 border-b-2 border-gray-300 focus:outline-none text-sm sm:text-base" placeholder="Let's Talk About Your Idea" required />
                        </div>
                        <div className="mb-6 md:-ml-14 relative">
                            <div className="lg:max-w-md  mx-auto sm:max-w-[80%] sm:ml-4">
                                <ReCAPTCHA
                                    sitekey="6LcVnswqAAAAADxZhbbgkXWT74LvdHb3LAR8BDwD"
                                    onChange={handleCaptchaChange}
                                    className="mx-auto"
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full py-3 mt-4 bg-orange-500 text-white font-semibold rounded-xl">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;