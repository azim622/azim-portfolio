import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContractInfo = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white py-16 px-4">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Feel free to reach out to me for any inquiries or collaboration.
        </p>

        {/* Contact Options */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:space-x-12 animate__animated animate__fadeIn animate__delay-3s">
          {/* Email */}
          <div className="flex items-center space-x-3">
            <MdEmail className="text-2xl" />
            <a href="mailto:fazleazim622@gmail.com" className="text-lg font-semibold hover:text-teal-200 transition">
              fazleazim622@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <FaPhone className="text-2xl" />
            <a href="tel:+8801618506709" className="text-lg font-semibold hover:text-teal-200 transition">
              01618506709
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center space-x-3">
            <FaWhatsapp className="text-2xl" />
            <a href="https://wa.me/+8801618506709" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-teal-200 transition">
              01618506709
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractInfo;
