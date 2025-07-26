import React from 'react';
import Byte from '../assets/Bytewise.png';
import USA from '../assets/USA.webp';
import UK from '../assets/UK.webp';
import AUS from '../assets/AUS.webp';
import Ind from '../assets/India.webp';

const testimonials = [
  {
    id: 1,
    name: 'Giovanni G',
    feedback:
      'I have used these guys for multiple projects and have always been impressed with their execution, delivery and communication. Love their work and will continue to use in the future.',
    avatar: Ind,
  },
  {
    id: 2,
    name: 'Gaganpreet S',
    feedback:
      'My to go to freelancer team for designing and innovation. Will hire again for sure.',
    avatar: Ind,
  },
  {
    id: 3,
    name: 'Sarah C',

    feedback:
      'The effective way of getting in things done, were over my expectations. Communication, making sure I understood they were working with me. Professionalism, giving value to my request but at the same time making sure it align with my brand.',
    avatar: Ind,
  },
  {
    id: 4,
    name: 'Alex G',

    feedback:
      'They were awesome to work with.. nothing was a problem for him and he helped out with all my requests. Top creator! Will use again for sure.',
    avatar: USA,
  },
  {
    id: 5,
    name: 'Aleksandra C',

    feedback:
      'The project was delivered ahead of schedule and the quality was outstanding. Great communication!',
    avatar: USA,
  },
  {
    id: 6,
    name: 'Thiruarul S',

    feedback:
      'From start to finish, the team was reliable, creative, and technically excellent.',
    avatar: UK,
  },
  {
    id: 7,
    name: 'Ted R',

    feedback:
      'A fantastic experience! The backend integration and frontend polish really impressed us.',
    avatar: AUS,
  },
  {
    id: 8,
    name: 'Kenny',

    feedback:
      'Very good experience working with Webdone. Very patient, accommodated multiple changes and turned around each change quickly. Quality of work was very good. Thank you.',
    avatar: USA,
  },
  {
    id: 9,
    name: 'Matthew P',

    feedback:
      'These freelancer was absolutely fantastic – so dedicated and hardworking. They really went above and beyond, and the quality of Their work was excellent from start to finish. I couldn’t be happier and will 100% be using them again for future projects!',
    avatar: UK,
  },
  {
    id: 10,
    name: 'Eric S',
    feedback:
      'The work was done on time, very responsive and talented I will work again with Webdone  in the near futur I recommend this artist to anyone looking for a fast, professional and well oriented project',
    avatar: USA,
  },
];

const Testimonials = () => {
  const doubled = [...testimonials, ...testimonials]; // For infinite scroll effect

  return (
    <section className="mt-34 py-16 bg-gray-500">

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mt-10 mb-12 text-black">
          What Our Clients Say
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-marquee">
            {doubled.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-80 shrink-0 bg-gradient-to-br from-black to-gray-800 p-6 rounded-xl shadow-md border border-gray-700 h-[320px]"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-gray-400 object-cover"
                  />
                </div>
                <p className="font-lato text-white mb-12  line-clamp-4">
                  “{testimonial.feedback}”
                </p>
                <h4 className="font-serif font-semibold text-lg text-white">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
