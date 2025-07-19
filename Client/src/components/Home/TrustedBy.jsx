import React from 'react';
import Strive from '../../assets/strive.png';
import Bytewise from '../../assets/Bytewise.png';
import Uber from '../../assets/Uber.png'
import Google from '../../assets/Google.jpeg'
import tencent from '../../assets/Tencentpng.png'
const TrustedBy = () => {
  const companies = [
    {
      logo : tencent
    },
    {
      logo : Google
    },
    {
      logo: Strive,
    },

    {
      
      logo:Uber
    },
    
    {
     
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQGLFfE6duvqsA/company-logo_200_200/B56ZVUFNakGoAI-/0/1740872409207?e=1756339200&v=beta&t=GcsfLaktRlSh4yM-yqpBbvPc3KJIe3Y8fJUoo8MNKCw',
    },
    {
      
      logo: Bytewise,
    },
    
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        Trusted by Leading Companies
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {companies.map((company, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={company.logo}
                className="h-12 object-contain mb-2"
              />
              <span className="text-sm font-medium text-gray-600 text-center">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
