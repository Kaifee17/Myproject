import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Not required but good for clarity
import { Pagination, Autoplay } from 'swiper/modules'; // ✅ import Autoplay
import Strive from '../../assets/strive.png'
const testimonials = [
  {
    id: 1,
    name: 'Nabeel Siddiqui',
    role: 'CEO,Strive Traning Institute',
    feedback:
      'Working with this team was an incredible experience. The website exceeded all our expectations.',
    avatar: 'https://strivetraininginstitute.com/wp-content/uploads/2022/07/LOGO-01.png',
  },
  {
    id: 2,
    name: 'Ritwik ',
    role: 'CTO, Tranquil Ai',
    feedback:
      'They understood our vision and delivered exactly what we needed. Highly recommended!',
    avatar: 'https://media.licdn.com/dms/image/v2/D560BAQGLFfE6duvqsA/company-logo_200_200/B56ZVUFNakGoAI-/0/1740872409207?e=1756339200&v=beta&t=GcsfLaktRlSh4yM-yqpBbvPc3KJIe3Y8fJUoo8MNKCw',
  },
  {
    id: 3,
    name: 'Michael Smith',
    role: 'Marketing Head, Brandly',
    feedback:
      'The team was professional, creative, and delivered on time. Couldn’t ask for more.',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our Clients Say
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]} // ✅ include Autoplay here
          pagination={{ clickable: true }}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000, // ✅ delay in ms
            disableOnInteraction: false, // keeps autoplay running after interaction
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gray-100 p-8 rounded-xl shadow hover:shadow-md transition">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-gray-400"
                  />
                </div>
                <p className="text-gray-700 mb-4">“{testimonial.feedback}”</p>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
