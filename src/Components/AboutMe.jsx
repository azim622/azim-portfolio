import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <div className="flex justify-center">
            <section className="max-w-4xl mx-auto px-6 py-12 text-center border-2 border-blue-600 rounded-lg shadow-lg bg-white">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold text-gray-900 my-8"
                >
                    About Me
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                    className="text-gray-700 text-lg leading-relaxed"
                >
                    Hi! I'm Md Fazle Azim, a passionate Frontend & MERN Stack Developer. My journey into programming started with a curiosity about web applications, which led me to master **React, JavaScript, Node.js, and MongoDB**.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-700 text-lg leading-relaxed mt-4"
                >
                    I specialize in **building scalable, user-friendly web apps** with a keen eye for **clean UI, performance optimization, and backend logic**. I enjoy solving problems and continuously learning new technologies.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-700 text-lg leading-relaxed mt-4"
                >
                    Beyond coding, I have a strong interest in **fitness, gaming, and exploring the latest tech trends**. I thrive on challenges and collaborations that push my skills to the next level.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-gray-700 text-lg leading-relaxed mt-4"
                >
                    Let's connect and create something innovative together!
                </motion.p>
            </section>
        </div>
    );
};

export default AboutMe;
