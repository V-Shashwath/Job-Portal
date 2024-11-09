import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-purple-950 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-24">
                    {/* About Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">About Us</h3>
                        <p className="text-sm">
                            We are a job portal dedicated to connecting job seekers with top recruiters.
                            Whether you're looking for your first job or your next opportunity, we help you find the perfect match.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                        <p className="text-sm mb-2">Email: support@jobportal.com</p>
                        <p className="text-sm mb-2">Phone: +1 (800) 123-4567</p>
                        <p className="text-sm">Address: 123 Job Street, City, Country</p>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-600">
                                <FaFacebook />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-400">
                                <FaTwitter />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-700">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-600">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} JobPortal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
