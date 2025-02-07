import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <div className="flex justify-center">
            <section className="max-w-4xl mx-auto px-8 py-12 border-2 border-blue-600 rounded-lg shadow-lg bg-white text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold text-gray-900 mb-6"
                >
                    About Me
                </motion.h2>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                    className="text-gray-700 text-lg leading-relaxed space-y-4"
                >
                    <p>
                        Hi! I'm <strong>Md Fazle Azim</strong>, a passionate <strong>Frontend & MERN Stack Developer</strong>. My journey into programming started with a curiosity about web applications, which led me to master <strong>React, JavaScript, Node.js, and MongoDB</strong>.
                    </p>
                    <p>
                        I specialize in <strong>building scalable, user-friendly web apps</strong> with a keen eye for <strong>clean UI, performance optimization, and backend logic</strong>. I enjoy solving problems and continuously learning new technologies.
                    </p>
                    <p>
                        Beyond coding, I have a strong interest in <strong>fitness, gaming, and exploring the latest tech trends</strong>. I thrive on challenges and collaborations that push my skills to the next level.
                    </p>
                    <p>
                        Let's connect and create something innovative together!
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutMe;
