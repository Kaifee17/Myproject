import React from 'react';
import Strive from '../../assets/strive.png';
import Bytewise from '../../assets/Bytewise.png';
import Uber from '../../assets/Uber.png';
import Google from '../../assets/Google.jpeg';
import tencent from '../../assets/Tencentpng.png';
import alphabet from '../../assets/Alphabet.webp';
import IBM from '../../assets/IBM.webp';
import ASML from '../../assets/ASML.webp';
import tsmc from '../../assets/tsmc.webp';
import Airwallex from '../../assets/Airwallex.webp';
import Verizon from '../../assets/Verizon.webp';
import Salesforce from '../../assets/Salesforce.webp';


const TrustedBy = () => {
  const companies = [
    { logo: tencent },
    { logo: alphabet },
    { logo: Google },
    { logo: Strive },
    { logo: IBM },
    { logo: ASML },
    { logo: tsmc },
    { logo: Airwallex },
    { logo: Verizon },
    { logo: Salesforce },
    {
      logo:
        'https://media.licdn.com/dms/image/v2/D560BAQGLFfE6duvqsA/company-logo_200_200/B56ZVUFNakGoAI-/0/1740872409207?e=1756339200&v=beta&t=GcsfLaktRlSh4yM-yqpBbvPc3KJIe3Y8fJUoo8MNKCw',
    },
    { logo: Uber },
    { logo: Bytewise },
  ];

  // Duplicate the logos for seamless loop
  const scrollingLogos = [...companies, ...companies];

  return (
    <>
      {/* Inline Tailwind-style animation using @layer */}
      <style>{`
        

        @layer utilities {
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }
      `}</style>

      <section className="bg-white py-12 px-4 md:px-10 overflow-hidden">
        <h2 className="text-center font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-10">
          Trusted by Leading Companies
        </h2>

        <div className="relative w-full">
          <div className="flex w-max animate-scroll space-x-12">
            {scrollingLogos.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-16 w-40"
              >
                <img
                  src={company.logo}
                  alt={`Logo ${index}`}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedBy;
