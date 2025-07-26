import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './style.css';

import Movie from '../../assets/movi.webp';
import Coding from '../../assets/study.webp';
import Dashboard from '../../assets/sales.webp';
import Restraunt from '../../assets/Burges.webp';
import Learn from '../../assets/courses.webp';

const projects = [
  {
    id: 1,
    title: 'Moviepedia',
    link: 'https://moviepediav1.netlify.app/',
    image: Movie,
  },
  {
    id: 2,
    title: 'Learnify',
    link: 'https://learnify-ten-zeta.vercel.app/',
    image: Learn,
  },
  {
    id: 3,
    title: 'Dashboard',
    link: 'https://dashboard-five-kappa-83.vercel.app/dashboard',
    image: Dashboard,
  },
  {
    id: 4,
    title: 'StudyNotion',
    link: 'https://studynotion-r9xx.vercel.app/',
    image: Coding,
  },
  {
    id: 5,
    title: 'Food Website',
    link: 'https://food-website-indol-seven.vercel.app/book.html',
    image: Restraunt,
  },
];

const PortfolioSlider = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-bold mb-8">Our Portfolio</h2>

        <Swiper
          slidesPerView={1} // Default: 1 slide on mobile
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },   
            768: { slidesPerView: 2 },  
            1024: { slidesPerView: 3 },  
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="portfolio-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-[300px] bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Hover overlay message */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-20">
                  <div className="text-white text-center space-y-2">
                    <div className="font-serif text-lg font-semibold">{project.title}</div>
                    <div className="font-serif text-xl font-medium">Click here to explore the website</div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PortfolioSlider;
