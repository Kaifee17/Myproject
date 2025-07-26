import React from 'react';
import ImageTrail from '../../../ImageTrail/ImageTrail/ImageTrail';
import Makeup from '../../assets/1Web.webp'
import bike from '../../assets/bike.webp'
import mixed from '../../assets/mixed.webp'
import watchshop from '../../assets/watchshop.webp'
import varnmala from '../../assets/varnmala.webp'
import appleodd from '../../assets/appleodd.webp'
import builder from '../../assets/builder.webp'
const CTASection = () => {
  return (
    <section className="relative bg-pink-400 text-white py-16 text-center 
    overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-[500px] z-0">
        <ImageTrail
          items={[
           
           bike,
            mixed,
           varnmala,
           Makeup,
           watchshop,
            appleodd,
            'https://picsum.photos/id/1029/300/300',
            builder,
          ]}
          variant={1}
        />
      </div>


      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="mb-8 text-lg font-serif">
          Let's bring your ideas to life — contact us today.
        </p>
        <a
          href="/services"
          className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Explore More
        </a>
      </div>
    </section>
  );
};

export default CTASection;
