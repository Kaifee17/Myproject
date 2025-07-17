import React from 'react';
import Testi from '../components/Home/Testimonials'
import Port from '../components/Portfolio/PortfolioSlider'
const LandingPage = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-pink-400 to-pink-700 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-24 px-4">
        <h2 className="text-xl text-white font-semibold">Website Start's @ 6999/-</h2>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-4">
          Best Website Design Company That Will Increase Your Online Presences ✅
        </h1>
        <p className="mt-4 text-lg">5000+ Businesses Trusted Webdone</p>
        <button className="mt-6 px-6 py-3 bg-pink-400 hover:bg-pink-600 text-white font-semibold rounded-full">
          <a href="/contact">💬 TALK TO WEBSITE EXPERT !</a>
          
        </button>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-4">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: 'Startup Plan',
              price: '₹6,999/-',
              desc: 'Best For Startup’s',
              renewal: 'Annual Renewal 2999/-',
            },
            {
              title: 'Classic Plan',
              price: '₹11,999/-',
              desc: 'Best For Small / Medium Business',
              badge: 'POPULAR',
              renewal: 'Annual Renewal 3499/-',
            },
            {
              title: 'Premium Plan',
              price: '₹15,999/-',
              desc: 'Best For Enterprises',
              renewal: 'Annual Renewal 3999/-',
            },
            {
              title: 'Custom Plan',
              price: '₹ ???',
              desc: 'Best For Custom Website',
              renewal: 'Annual Renewal 4499/-',
            }
          ].map((plan, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all">
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

              {/* Website Features */}
              <ul className="text-sm space-y-1">
                {[
                  'Modern Website (Pages based on plan)',
                  'Dynamic Website',
                  'Domain Configuration',
                  'Hosting Configuration',
                  'Business Emails (count varies)',
                  '100% Mobile Friendly',
                  'Website Admin Panel',
                  'Google Search Console Setup',
                  'Unlimited Images & Videos'
                ].map((feat, i) => (
                  <li key={i}>✅ {feat}</li>
                ))}
              </ul>

              {/* Functionality */}
              <p className="mt-4 font-semibold text-pink-500">Functionality</p>
              <ul className="text-sm space-y-1">
                {[
                  'Live Chat',
                  'Contact Form',
                  'Click to Call Button',
                  'Whatsapp Integration',
                  'Lead Generation Form'
                ].map((func, i) => (
                  <li key={i}>✅ {func}</li>
                ))}
              </ul>

              {/* Website Security */}
              <p className="mt-4 font-semibold text-pink-500">Website Security</p>
              <hr className="my-1" />
              <ul className="text-sm space-y-1">
                <li>✅ Free SSL Certificate</li>
                <li>✅ Technical Support 1 Year</li>
                <li>✅ {plan.renewal}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className='py-8 mt-5 '>
           <Port/>
          <Testi/>
         
        </div>
        
      </section>
    </div>
  );
};

export default LandingPage;
