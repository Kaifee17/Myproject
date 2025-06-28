import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper core styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // For autoplay


import './style.css';


import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Material UI Rating
import Rating from '@mui/material/Rating';
import Fit from '../../assets/Fitness.jpg'
import Ecom from '../../assets/Ecommerce.jpg'
import Port from '../../assets/Portfolio.jpg'
import Restraunt from '../../assets/Restraunt.jpg'
import Realstate from '../../assets/Realstate.jpg'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    image: Ecom,
    description: 'A modern e-commerce platform built with React and Stripe.',
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Portfolio Website',
    image: Port,
    description: 'A personal portfolio to showcase work and blog posts.',
    rating: 5,
  },
  {
    id: 3,
    title: 'Booking App',
    image: 'https://img.freepik.com/free-vector/hotel-booking-application-interface-concept_23-2148575768.jpg',
    description: 'An appointment scheduling app with admin dashboard.',
    rating: 4,
  },
  {
    id: 4,
    title: 'Restaurant Website',
    image:Restraunt,
    description: 'Responsive restaurant site with menu, reservations, and reviews.',
    rating: 4.2,
  },
  {
    id: 5,
    title: 'Real Estate Portal',
    image: Realstate,
    description: 'Listing platform for properties with map integration.',
    rating: 4.7,
  },
  {
    id: 6,
    title: 'Fitness App',
    image: Fit,
    description: 'Workout tracking app with user profiles and analytics.',
    rating: 4.3,
  },
];

const PortfolioSlider = (props) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Portfolio</h2>
        <Swiper
          slidesPerView={props.items }
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          pagination={{ type: 'fraction' }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="portfolio-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 min-h-[320px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>

                {/* Rating Stars */}
                <div className="flex justify-center mt-2 mb-2">
                  <Rating name="read-only" value={project.rating} precision={0.5} readOnly />
                </div>

                <p className="text-gray-600">{project.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PortfolioSlider;
