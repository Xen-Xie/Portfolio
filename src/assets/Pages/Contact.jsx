import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import emailjs from 'emailjs-com';
import { FaCheckCircle } from 'react-icons/fa';

const MotionDiv = motion.div;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        company_name: formData.company,
        message: formData.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '', company: '' });
      setError(null);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setError('Something went wrong. Please try again later.');
    });
  };

  return (
    <section className="px-6 py-10 max-w-4xl mx-auto space-y-10 font-inter text-clean dark:text-ground">
      {/* Header */}
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-clean dark:text-ground font-poppins">Contact Me</h1>
        <p className="mt-2">
          Feel free to reach out for freelance work, collaborations, or any questions you might have.
        </p>
      </MotionDiv>

      {/* Form */}
      <MotionDiv
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 border border-clean dark:border-clean rounded-md bg-ground text-clean font-outfit"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2 border border-clean dark:border-clean rounded-md bg-ground text-clean font-outfit"
              />
            </div>

            <div>
              <label htmlFor="company" className="block mb-2">Company (optional)</label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 border border-clean dark:border-clean rounded-md bg-ground text-clean font-outfit"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-4 py-2 border border-clean dark:border-clean rounded-md bg-ground text-clean font-outfit"
              />
            </div>

            <Button type="submit" variant='bordered' className="w-full rounded-full border-clean dark:border-ground">
              Send Message
            </Button>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-2 text-center text-green-500">
            <FaCheckCircle className="text-3xl" />
            <p>Thank you! I’ll reply as soon as possible.</p>
          </div>
        )}

        {error && <p className="text-red-500 text-center">{error}</p>}
      </MotionDiv>

      {/* Social Links */}
      <MotionDiv
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-x-4 mt-10"
      >
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          GitHub
        </a>
      </MotionDiv>
    </section>
  );
}

export default Contact;
