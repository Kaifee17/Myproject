import React, { useContext, useState } from 'react';
import Strive from '../assets/strive.png';
import { useNavigate } from 'react-router-dom';
import { postData } from '../utils/api'; // Ensure this exists
import AppContext from '../context/appContext';


const RequestQuote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    priceRange: '',
    message: ''
  });

  const context = useContext(AppContext);
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = Object.values(formFields).every((field) => field.trim() !== '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await postData('/api/quote/submit-quote', formFields);
      console.log('Submission Success:', res);

      context.alertBox('Message sent successfully', 'success');

      setFormFields({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        priceRange: '',
        message: ''
      });

      navigate('/request-quote');
    } catch (error) {
      console.error('Submission Failed', error);
      const errMsg = error?.response?.data?.message || 'Something went wrong!';
      context.alertBox(errMsg, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row pt-20">
      {/* Left Panel */}
      <div className="md:w-1/2 bg-gradient-to-br from-orange-300 to-orange-600 text-white flex flex-col justify-center p-12">
        <h3 className="text-sm uppercase font-semibold tracking-wider">WebDone</h3>
        <h1 className="text-4xl font-extrabold leading-tight my-4">
          WebDone is here to help you with web
        </h1>

        <div className="my-6 space-y-4 text-lg">
          <p><strong>Expert</strong> Team Members</p>
          <p><strong>Results-Driven</strong> Approach</p>
          <p><strong>Streamlined</strong> Execution</p>
        </div>

        <h3 className="text-xs mt-10 tracking-wide">TRUSTED BY</h3>
        <div className="flex gap-4 mt-4">
          <img
            src="https://media.licdn.com/dms/image/v2/D560BAQGLFfE6duvqsA/company-logo_200_200/B56ZVUFNakGoAI-/0/1740872409207?e=1756339200&v=beta&t=GcsfLaktRlSh4yM-yqpBbvPc3KJIe3Y8fJUoo8MNKCw"
            alt="Tranquil AI"
            className="h-10"
          />
          <img src={Strive} alt="Strive Training" className="h-10" />
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="md:w-1/2 bg-white p-10 flex items-center justify-center">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold text-orange-600 uppercase mb-2">
            Request A Free Consultation
          </h2>
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
            Let's Create Something Amazing Together
          </h1>
          <h5 className="mb-6 font-semibold">
            Use the correct email because we will respond to your email
          </h5>

          <input
            type="text"
            name="name"
            value={formFields.name}
            onChange={onChangeInput}
            placeholder="Name*"
            disabled={isLoading}
            className="w-full border-b border-gray-300 py-2 mb-6 outline-none"
            required
          />
          <input
            type="text"
            name="companyName"
            value={formFields.companyName}
            onChange={onChangeInput}
            placeholder="Company Name*"
            disabled={isLoading}
            className="w-full border-b border-gray-300 py-2 mb-6 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formFields.email}
            onChange={onChangeInput}
            placeholder="Email*"
            disabled={isLoading}
            className="w-full border-b border-gray-300 py-2 mb-6 outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formFields.phone}
            onChange={onChangeInput}
            placeholder="Phone*"
            disabled={isLoading}
            className="w-full border-b border-gray-300 py-2 mb-6 outline-none"
            required
          />
          <input
            type="text"
            name="priceRange"
            value={formFields.priceRange}
            onChange={onChangeInput}
            placeholder="Your Approximated Price Range*"
            disabled={isLoading}
            className="w-full border-b border-gray-300 py-2 mb-6 outline-none"
            required
          />
          <textarea
            name="message"
            value={formFields.message}
            onChange={onChangeInput}
            placeholder="Your Message*"
            disabled={isLoading}
            className="w-full border-b border-gray-300 py-2 mb-6 outline-none"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`mt-4 px-6 py-3 text-white font-semibold rounded transition ${
              !isFormValid || isLoading
                ? 'bg-orange-300 cursor-not-allowed'
                : 'bg-orange-600 hover:bg-orange-700'
            }`}
          >
            {isLoading ? 'Submitting...' : 'SUBMIT →'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RequestQuote;
