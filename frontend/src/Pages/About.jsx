// install framer-motion if not already installed
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-8 lg:px-16 text-gray-800">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
          About CareerKhoj
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Your all-in-one career companion — helping you build resumes, search jobs, and grow professionally.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-10 items-center mb-20"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          alt="Mission"
          className="w-full max-w-xs mx-auto"
        />
        <div>
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            We aim to make career-building tools accessible and effective for everyone, from students to professionals.
          </p>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-10 items-center mb-20"
      >
        <div>
          <h2 className="text-3xl font-semibold text-pink-500 mb-4">Core Values</h2>
          <ul className="space-y-3 text-gray-700 text-lg list-disc list-inside">
            <li><strong>Empowerment:</strong> Tools to take control of your career.</li>
            <li><strong>Innovation:</strong> AI-assisted job matching and resume feedback.</li>
            <li><strong>Accessibility:</strong> Easy-to-use, inclusive tools for all.</li>
          </ul>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3446/3446676.png"
          alt="Values"
          className="w-full max-w-xs mx-auto"
        />
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-green-600 mb-4">
          Ready to Launch Your Career?
        </h2>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          Get started with CareerKhoj today — your professional future begins here.
        </p>
        <a
          href="/auth"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition"
        >
          Join Now
        </a>
      </motion.div>
    </div>
  );
};

export default About;
