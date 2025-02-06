import React from 'react';
import { FaPhone, FaVoicemail, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContractInfo = () => {
    return (
        <section className="relative  bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Get in Touch
        </h2>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Feel free to reach out to me for any inquiries or collaboration.
        </p>
        <div className="flex justify-center space-x-12 animate__animated animate__fadeIn animate__delay-3s">
          <div className="flex items-center space-x-3">
            <i className="fas fa-envelope text-xl"></i>
            <a href="mailto:your-email@example.com" className="text-lg font-semibold hover:text-teal-200">
            <div className='flex'>
            <MdEmail className='mt-1 mx-2'/>
              fazleazim622@gmail.com


                </div>
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <i className="fas fa-phone-alt text-xl"></i>
            <a href="tel:+1234567890" className="text-lg font-semibold hover:text-teal-200">
                <div className='flex'>
              <FaPhone className='mt-1 mx-2'></FaPhone>
              01618506709


                </div>
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <i className="fab fa-whatsapp text-xl"></i>
            <a href="https://wa.me/+1234567890" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-teal-200">
            <div className='flex'>
              <FaWhatsapp className='mt-1 mx-2'></FaWhatsapp>
              01618506709


                </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    );
};

export default ContractInfo;