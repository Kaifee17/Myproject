import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    name: 'Nabeel Siddiqui',
    role: 'CEO,Strive Traning Institute',
    feedback:
      'Working with this team was an incredible experience. The website exceeded all our expectations.',
    avatar: '',
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
    <section className="bg-pink-400 min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">What Our Clients Say</h2>

        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Navigation]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto text-left">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <span className="text-sm text-gray-500">{testimonial.role}</span>
                  </div>
                </div>
                <p className="text-gray-700">&ldquo;{testimonial.feedback}&rdquo;</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
