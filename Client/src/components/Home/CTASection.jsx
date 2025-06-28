import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-pink-400 text-white py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Start Your Project?
      </h2>
      <p className="mb-8 text-lg">
        Let's bring your ideas to life — contact us today.
      </p>
      <a
        href="/services"
        className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
      >
        Explore More
      </a>
    </section>
  );
};

export default CTASection;
