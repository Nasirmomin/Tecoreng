import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Linkedin from '../assets/LinkedinFollow.213bb388.svg';
import Twitter from '../assets/TwitterFollow.99d320e4.svg';
import Facebook from '../assets/FbFollow.8f432841.svg';
import Pinterest from '../assets/PinterestFollow.24dedd45.svg';
import Behance from '../assets/behanceFollow.8020f39c.svg';
import Medium from '../assets/mediumFollow.e83b68d2.svg';
import Dribble from '../assets/dribbleFollow.57dc1fb5.svg';
import Skype from '../assets/skype.fa9016d5.svg';
import Phone from '../assets/phone.fd7b91e0.svg';
import Upload from '../../tecoreng.com-svg/upload.svg';

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        idea: '',
        file: null,
        captcha: '',
    });

    const [captchaValid, setCaptchaValid] = useState(false); // Track CAPTCHA status

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
        // Handle form submission logic here
    };

    return (
        <div className="max-w-screen-xl mx-auto py-16 px-4 lg:px-8">
            <div className="flex flex-wrap justify-between">
                {/* Left Section */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-white">
                    <h3 className="text-3xl font-bold mb-12 ml-16">We Are Here To Help You</h3>
                    <p className="text-4xl font-bold mb-14 ml-16 leading-relaxed">
                        Let’s Transform Your <br /> Vision Into Value.
                    </p>

                    <p className="text-lg font-medium mb-4 ml-16">Contact us:</p>
                    <ul className="mb-12">
                        <li className="text-md mb-6 ml-10">
                            <img src={Skype} alt="Skype" className="inline mr-2 w-4 h-4 text-blue-500" />
                            biz.tecoreng
                        </li>
                        <li className="text-md mb-6 ml-10">
                            <img src={Phone} alt="Phone" className="inline mr-2 w-4 h-4 text-blue-500" />
                            +91 85117 46476
                        </li>
                    </ul>

                    <p className="text-3xl font-extrabold ml-16 mb-1">Our Socials:</p>
                    <p className="text-md font-semibold mt-4 ml-16">Don’t Miss To Follow Us On Our Social Networks Accounts.</p>
                    <div className="flex space-x-6 ml-16">
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

                {/* Right Section - Form */}
                <div className="w-16 lg:w-[45%] bg-gray-100 p-6 mr-3 rounded-3xl max-w-xl shadow-lg relative -mt-2 -ml-2">
                    <h3 className="text-5xl font-semibold ml-4 mb-1">
                        <span className="text-black">Get</span>{' '}
                        <span className="text-black">in</span>{' '}
                        <span className="bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text">
                            Touch
                        </span>
                    </h3>

                    <p className="text-lg ml-4 mb-6">
                        We are always ready to help. There are many ways to contact us. You may drop us a line, give us a call, or send an email.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6 relative">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full py-1 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
                                placeholder="Name"
                                required
                            />
                        </div>

                        <div className="mb-6 relative">
                            <input
                                type="text"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                className="w-full py-1 border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
                                placeholder="Contact Number"
                                required
                            />
                        </div>

                        <div className="mb-6 relative">
                            <textarea
                                name="idea"
                                value={formData.idea}
                                onChange={handleChange}
                                className="w-full py-1 border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
                                placeholder="Let's Talk About Your Idea"
                                required
                            />
                        </div>

                        <div className="mb-6 relative">
                            <label
                                htmlFor="file-upload"
                                className="w-full py-5 border-2 border-dotted border-gray-300 text-gray-600 text-center cursor-pointer focus:outline-none focus:ring-0 flex items-center justify-center space-x-3"
                            >
                                <img
                                    src={Upload}
                                    alt="Upload Icon"
                                    className="w-6 h-6 text-gray-600"
                                />
                                <span className="text-gray-600">Upload Additional File</span>
                                <input
                                    id="file-upload"
                                    type="file"
                                    name="file"
                                    onChange={handleChange}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                            </label>
                        </div>

                        <div className="mb-6 relative">
                            <ReCAPTCHA
                                sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY" // Replace with your Site Key
                                onChange={handleCaptchaChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-11/12 py-3 mt-4 ml-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold rounded-xl hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-lg hover:shadow-xl active:shadow-none transition-all duration-300"
                        >
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
