import React, { useState } from 'react';
import USA from '../assets/USA.webp';
import UK from '../assets/UK.webp';
import AUS from '../assets/AUS.webp';
import Ind from '../assets/India.webp';

const testimonials = [
  {
    id: 1,
    name: 'Nabeel Siddiqui',
    role: 'CEO, Strive Training Institute',
    feedback:
      'Working with this team was an incredible experience. The website exceeded all our expectations.',
    avatar: Ind,
  },
  {
    id: 2,
    name: 'Ritwik',
    role: 'CTO, Tranquil AI',
    feedback:
      'They understood our vision and delivered exactly what we needed. Highly recommended!',
    avatar: Ind,
  },
  {
    id: 3,
    name: 'Bytewise',
    role: 'Marketing Head, Bytewise',
    feedback:
      'The team was professional, creative, and delivered on time. Couldn’t ask for more.',
    avatar: Ind,
  },
  {
    id: 4,
    name: 'Sarah Gonzales',
    role: 'Founder, TechBridge Solutions',
    feedback:
      'Their attention to detail and commitment to quality was exceptional. We are beyond satisfied.',
    avatar: USA,
  },
  {
    id: 5,
    name: 'Jake Martin',
    role: 'Head of Product, InnovateX',
    feedback:
      'The project was delivered ahead of schedule and the quality was outstanding. Great communication!',
    avatar: USA,
  },
  {
    id: 6,
    name: 'Emily Sanchez',
    role: 'Marketing Director, Horizon Media',
    feedback:
      'From start to finish, the team was reliable, creative, and technically excellent.',
    avatar: UK,
  },
  {
    id: 7,
    name: 'Liam Robinson',
    role: 'COO, SynergyTech',
    feedback:
      'A fantastic experience! The backend integration and frontend polish really impressed us.',
    avatar: AUS,
  },
  {
    id: 8,
    name: 'Torres Walker',
    role: 'VP of Operations, CloudLogic Inc',
    feedback:
      'They understood complex requirements quickly and executed them with precision. Brilliant job!',
    avatar: USA,
  },
  {
    id: 9,
    name: 'Daniel Scott',
    role: 'CTO, BlueNova Technologies',
    feedback:
      'Efficient, transparent, and always responsive. Their team made a real impact on our platform.',
    avatar: UK,
  },
  {
    id: 10,
    name: 'Jessica Miller',
    role: 'CEO, Visionary Designs',
    feedback:
      'The UI/UX was spot on and the final delivery exceeded our expectations. Highly professional!',
    avatar: USA,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="mt-34 py-16 bg-gradient-to-br from-pink-400 to-pink-700">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mt-10 mb-12 text-white">
          What Our Clients Say
        </h2>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-black text-white p-6 rounded-xl shadow-md border border-gray-700 mx-auto w-full max-w-sm h-[320px] transition-all duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full border-2 border-gray-400 object-cover"
              />
            </div>
            <p className="italic mb-8">“{testimonials[currentIndex].feedback}”</p>
            <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
            <p className="text-sm">{testimonials[currentIndex].role}</p>
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={handlePrev}
              className="bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
