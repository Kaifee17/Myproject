import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const teamMembers = [
  {
    name: 'Kaifee',
    role: 'CEO & Full Stack developer',
    field: 'React, Tailwind , expressjs , mongodb , shadcnui , material ui ',
    image: '/team/kaif.jpg'
  },
  {
    name: 'Saifee',
    role: 'CTO',
    field: 'Node.js, MongoDB',
    image: '/team/kaif.jpg'
  },
  {
    name: 'Anubhav',
    role: 'Team Lead',
    field: 'Google Search, Analytics',
    image: '/team/kaif.jpg'
  },
  {
    name: 'Ayush',
    role: 'UI/UX & Frontend',
    field: 'Elementor, WooCommerce',
    image: '/team/kaif.jpg'
  },
  {
    name: 'Devesh',
    role: 'API Specialist and Backend',
    field: 'REST, GraphQL',
    image: '/team/kaif.jpg'
  }
];

const About = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 bg-pink-400">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>

        <p className="text-white text-lg max-w-3xl mx-auto mb-8">
          We are a team of <strong>20+ experienced software engineers</strong> with deep industry experience.
          Our members have worked at some of the biggest companies in tech, bringing real-world knowledge and 
          proven development practices into every project we handle.
        </p>

        <p className="text-white text-lg max-w-3xl mx-auto mb-12">
          Whether it's building web apps, managing APIs, developing WordPress sites, or implementing SEO and 
          web scraping solutions, we approach every task with <strong>precision, quality, and full accuracy</strong>. 
          Our mission is to deliver reliable, scalable, and impactful digital solutions to help your business grow.
        </p>

        {/* Swiper Team Slider */}
        <h3 className="text-3xl font-semibold text-white mb-6">Meet Our Team</h3>
        <div className="max-w-5xl mx-auto mb-16">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-md p-6 text-center h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold text-pink-500">{member.name}</h4>
                  <p className="text-gray-700">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.field}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-left max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-white mb-4 text-center">Why Choose Us?</h3>
          <ul className="text-white text-lg list-disc list-inside">
            <li>Proven track record with Fortune 500 companies</li>
            <li>On-time delivery with 100% client satisfaction</li>
            <li>End-to-end development – from design to deployment</li>
            <li>24/7 support and maintenance services</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
