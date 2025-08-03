  import React, { useContext, useState } from 'react';
  import { Mail, MapPin } from 'lucide-react';
  import { useNavigate } from 'react-router-dom';
  
  import { postData } from '../../utils/api';
import AppContext from '../../context/appContext';
import BlurText from '../../../BlurText/BlurText/BlurText'
  const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formFields, setFormFields] = useState({
      name: '',
      email: '',
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

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      const { name, email, message } = formFields;

      if (name==='' || email==='' || message==='') {
       context.alertBox('fill alll the field ', 'error');
        setIsLoading(false);
        return;
      }

      try {
        const res = await postData('/api/contactForm/contact', formFields);
        console.log('Message sent successfully', res);

        context.alertBox('Message sent successfully', 'success');

        setFormFields({ name: '', email: '', message: '' });
        
      } catch (error) {
        console.error('Message Failed:', error);
        const errMsg = error?.response?.data?.message || 'Something went wrong!';
        context.alertBox(errMsg, 'error');
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="w-full md:w-1/2 p-6 bg-black rounded-xl shadow flex flex-col
           h-[500px]">
          {/* Top Half - Contact Info */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl font-serif font-bold mb-4 text-center">
          <div className="flex justify-center w-full">
          <BlurText
          text="Contact Information"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-white font-playfair"
          />
          </div>
        </h2>

            <p className="mb-6 font-poppins text-center text-gray-200">
              Feel free to reach out to us anytime.
            </p>
            <div className="flex font-poppins flex-col items-center text-gray-200 space-y-4">
            <div className="flex items-center">
            <Mail className="w-5 h-5 mr-3" />
            <span>webdone00@gmail.com</span>
            </div>
            <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-3" />
            <span>560066, Bangalore, India</span>
          </div>
          </div>
          </div>

        {/* Bottom Half - Quote */}
        <div className="flex-1 flex items-center justify-center border-t border-gray-700">
        <p className="text-gray-300 text-center font-normal font-serif  px-4">
        "If you’ve reached this address, congratulations — you’ve arrived at the home of the best websites in town."
        </p>
        </div>
      </div>



          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formFields.name}
                onChange={onChangeInput}
                className="w-full border border-gray-300 p-3 rounded"
                required
                disabled={isLoading}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formFields.email}
                onChange={onChangeInput}
                className="w-full border border-gray-300 p-3 rounded"
                required
                disabled={isLoading}
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formFields.message}
                onChange={onChangeInput}
                className="w-full border border-gray-300 p-3 rounded"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-emerald-500 text-white px-6 py-3 rounded transition ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-emerald-600'
                }`}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };

  export default ContactForm;
