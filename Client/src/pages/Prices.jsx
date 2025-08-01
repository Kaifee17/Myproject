import React from 'react';
import Testi from '../components/Home/Testimonials';
import Port from '../components/Portfolio/PortfolioSlider';

const LandingPage = () => {
  const plans = [
    {
      title: 'Startup Plan',
      price: '₹27,999/($320)',
      desc: 'Best For Startup’s',
      renewal: 'Annual Renewal 2999/-',
      features: [
        'Basic tech stack used for cost-efficiency and faster development',
        'Essential features only (no custom modules or advanced logic)',
        'Standard design layout to avoid extra design costs',
        'Limited business emails (enough for initial setup)',
        'No third-party integrations beyond standard tools (like chat, WhatsApp)',
        'Single language and region support',
        'Admin panel with basic controls only',
        'No advanced animations, SEO tools, or dashboards',
        'Ideal for launching a presence, not scaling or complex needs',
        'Upgradable later — advanced features are offered in higher plans',
      ],
      functionality: [
      'Basic Live Chat Integration',
      'Simple Contact Form (No Auto-response)',
      'Click-to-Call Button',
      'WhatsApp Chat Button Only',
      'Lead Capture (Manual Follow-up)',
      ],

      security: [
        'Free SSL Certificate',
        'Technical Support 1 Year',
        'Annual Renewal 2999/-',
      ],
    },
    {
      title: 'Classic Plan',
      price: '₹48,999/($560)',
      desc: 'Best for Startups & Small Businesses',
      badge: 'POPULAR',
      renewal: 'Annual Renewal 3499/-',
      features: [
        'Balanced tech stack with performance and flexibility',
        'Includes basic SEO tools and tracking setup',
        'Enhanced design layout with additional sections',
        'More business email accounts included',
        'Blog or news module available',
        'Google Maps & form validations',
        'Admin panel with extra controls',
        'Multi-device testing',
        'Scalable to mid-level requirements',
        'Better suited for growing businesses',
      ],
      functionality: [
      'Live Chat with Email Notification',
      'Advanced Contact Forms with Validation',
      'WhatsApp + Messenger Integration',
      'Newsletter Signup Form',
      'Lead Capture with Auto-Reply Email',
],

      security: [
        'Free SSL Certificate',
        'Technical Support 1 Year',
        'Basic Firewall Setup',
        'Annual Renewal 3499/-',
      ],
    },
    {
      title: 'Premium Plan',
      price: '₹61,999/($710)',
      desc: 'Best For Enterprises',
      renewal: 'Annual Renewal 3999/-',
      features: [
        'Advanced tech stack with high scalability',
        'Custom design and animation support',
        'Advanced SEO optimization',
        'Unlimited business emails',
        'CRM, payment gateway or third-party integrations',
        'Custom dashboards and analytics',
        'Advanced admin panel with roles and permissions',
        'Multi-language or multi-region support',
        'Performance optimized with caching & speed enhancements',
        'Perfect for established or scaling companies',
      ],
      functionality: [
  'Multi-Channel Live Chat (WhatsApp, Messenger, Webchat)',
  'Smart Forms with Conditional Logic & Auto-Reply',
  'Appointment Booking System with Calendar Sync',
  'Advanced Lead Management Dashboard',
  'CRM, Email Marketing & Payment Gateway Integrations',
],

      security: [
        'Free SSL Certificate',
        'Priority Technical Support (1 Year)',
        'Advanced Firewall & Monitoring',
        'Data Backup Setup',
        'Annual Renewal 3999/-',
      ],
    },
    {
      title: 'Custom Plan',
      price: '₹ ???',
      desc: 'Best For Custom Website',
      renewal: 'Annual Renewal 4499/-',
      features: [
        'Fully customized tech stack and design',
        'Tailored features as per business requirement',
        'API integrations, unique workflows',
        'Built for high flexibility and scalability',
        'Custom quote after discussion',
        'Best suited for complex business operations',
      ],
      functionality: [
  'Custom Feature Development After Discussion',
  'Workflow Automation Based on Requirements',
  'Third-party or Internal Tool Integration',
],

      security: [
        'Enterprise-grade SSL & firewalls',
        'Full compliance with project needs',
        'Custom support and maintenance options',
        'Annual Renewal 4499/-',
      ],
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-br from-pink-400 to-pink-700 text-gray-800">

      <section className="text-center py-24 px-4">
        <h2 className="font-inter text-xl text-white font-semibold mt-5">Website Start's @ 12999/-</h2>
        <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mt-4 text-white">
          Best Website Design Company That Will Increase Your Online Presences
        </h1>
        <p className="font-inter mt-4 text-lg text-white">5000+ Businesses Trusted Webdone</p>
        <button className="font-inter mt-6 px-6 py-3 bg-pink-400 hover:bg-pink-600 text-white font-semibold rounded-full">
          <a href="/contact">💬 TALK TO WEBSITE EXPERT !</a>
        </button>
      </section>


      <section className="px-4 py-4">
        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all"
            >
              {plan.badge && (
                <div className="bg-pink-500 text-white px-3 py-1 rounded-full inline-block text-xs mb-2">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-lg font-bold text-pink-400">{plan.title}</h3>
              <p className="text-xl font-bold">{plan.price}</p>
              <p className="text-sm mb-4">{plan.desc}</p>
              <button className="mb-4 px-4 py-2 bg-pink-400 hover:bg-pink-600 text-white rounded-full text-sm">
                <a href="/request-quote">⚙ Choose Plan</a>
              </button>

              {/* Features Section */}
              <p className="font-semibold text-pink-500 mt-2">Why This Plan?</p>
              <ul className="text-sm space-y-1 mb-4">
                {plan.features?.map((feat, i) => (
                  <li key={i}>• {feat}</li>
                ))}
              </ul>

              {/* Functionality Section */}
              <p className="font-semibold text-pink-500">Functionality</p>
              <ul className="text-sm space-y-1 mb-4">
                {plan.functionality?.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              {/* Website Security Section */}
              <p className="font-semibold text-pink-500">Website Security</p>
              <hr className="my-1" />
              <ul className="text-sm space-y-1">
                {plan.security?.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Portfolio & Testimonials */}
        <div className="py-8 mt-5">
          <Port />
          <Testi />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
