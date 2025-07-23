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

        <div className="overflow-hidden">
  <div className="flex w-max animate-marquee">
    {[...testimonials, ...testimonials].map((testimonial, index) => (
      <div
        key={`${testimonial.id}-${index}`}
        className="min-w-[20rem] shrink-0 bg-black p-6 rounded-xl mx-4 text-white"
      >
        <div className="flex justify-center mb-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full border-2 border-gray-400 object-cover"
          />
        </div>
        <p className="italic mb-8 line-clamp-4">“{testimonial.feedback}”</p>
        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
        
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default Testimonials;
