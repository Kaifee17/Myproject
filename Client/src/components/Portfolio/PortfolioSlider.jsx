<Swiper
  slidesPerView={1} // Default for mobile
  centeredSlides={true}
  spaceBetween={30}
  loop={true}
  navigation={true}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: { slidesPerView: 1 },   // Mobile (≤640px)
    768: { slidesPerView: 2 },   // Tablets (≥768px)
    1024: { slidesPerView: 3 },  // Desktop (≥1024px)
  }}
  modules={[Navigation, Pagination, Autoplay]}
  className="portfolio-swiper"
/>
