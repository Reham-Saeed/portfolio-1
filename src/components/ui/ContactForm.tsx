import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_ypwsetm',   
      'template_9yl78bm',       
      e.target as HTMLFormElement,
      'GZUI94ILhX2n3TBqc'         
    )
      .then((response) => {
        console.log('Message sent successfully:', response);
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        setIsSubmitting(false);
        setSubmitStatus('error');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg flex items-center">
          <span>Message sent successfully! I'll get back to you soon.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg flex items-center">
          <span>There was an error sending your message. Please try again.</span>
        </div>
      )}

      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name" 
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          placeholder="Enter your full name"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email" 
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          placeholder="Enter your email address"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message" 
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors resize-none"
          placeholder="Type your message here..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-4 rounded-lg text-white font-medium flex items-center justify-center transition-all duration-300 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'}`}
      >
        {isSubmitting ? (
          <span className="flex items-center">Sending...</span>
        ) : (
          <span>Send Message</span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
