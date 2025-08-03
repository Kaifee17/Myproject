import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Icons
import { FaLaptopCode, FaShoppingCart, FaMobileAlt, FaCogs, FaTools, FaCode } from 'react-icons/fa';

const services = [
  {
    title: 'Custom Website Development',
    slug: 'custom-website-development',
    description:
      'We design tailor-made websites that reflect your brand identity and deliver unique user experiences using the latest front-end and back-end technologies.',
    icon: <FaLaptopCode className="text-4xl text-pink-500" />,
  },
  {
    title: 'eCommerce Website Development',
    slug: 'ecommerce-website-development',
    description:
      'From intuitive product catalogs to seamless payment integrations, our eCommerce web solutions are conversion-driven and mobile-ready.',
    icon: <FaShoppingCart className="text-4xl text-pink-500" />,
  },
  {
    title: 'Responsive Web Design',
    slug: 'responsive-web-design',
    description:
      'Your website will look stunning on every device. We use responsive frameworks to ensure pixel-perfect visuals across desktops, tablets, and mobiles.',
    icon: <FaMobileAlt className="text-4xl text-pink-500" />,
  },
  {
    title: 'CMS Development',
    slug: 'cms-development',
    description:
      'Manage your content easily with CMS-based websites that are flexible, scalable, and easy to maintain.',
    icon: <FaCogs className="text-4xl text-pink-500" />,
  },
  {
    title: 'Web Application Development',
    slug: 'web-application-development',
    description:
      'Build custom web apps with real-time features, complex logic, or third-party integrations using tech like React, Node.js, Laravel, and more.',
    icon: <FaCode className="text-4xl text-pink-500" />,
  },
  {
    title: 'Website Maintenance',
    slug: 'website-maintenance',
    description:
      'Keep your site running smoothly with regular updates, security patches, and performance monitoring from our expert support team.',
    icon: <FaTools className="text-4xl text-pink-500" />,
  },
];

const Services = () => {
  return (
    <section className="pt-24 pb-16 px-6 bg-pink-400 text-white">
      <Helmet>
        <title>Website Development Services | WebDone.in</title>
        <meta
          name="description"
          content="Explore custom website design, eCommerce solutions, CMS development, responsive design, and ongoing maintenance from WebDone.in's expert developers."
        />
        <link rel="canonical" href="https://webdone.in/services" />
      </Helmet>

      <div className="max-w-6xl mx-auto text-center mb-12 mt-6">
        <h2 className="font-serif text-4xl font-bold mb-4">Our Website Development Services</h2>
        <p className="font-inter max-w-1xl mx-auto text-lg">
          Transform your online presence with high-performing websites that boost engagement and drive conversions.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Link
            to={`/services/${service.slug}`}
            key={index}
            className="bg-white text-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-200"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-jakarta font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
