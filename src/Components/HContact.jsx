import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { Link } from '@heroui/react';

function HContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elementPosition = document.getElementById('contact').offsetTop;
      const windowHeight = window.innerHeight;

      // When the element is in view, set the visibility to true
      if (scrollY + windowHeight > elementPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mb-5"> {/* Flex container to center content */}
      <motion.h1
        id="contact"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-2xl font-bold font-poppins"
      >
        “Got a project idea? Let's connect!”
      </motion.h1>
      <Link href='/contact'>
      <Button variant="bordered" className="w-[150px] border-clean dark:border-ground font-inter hover:scale-105 transition-all duration-300">
        Contact Me
      </Button>
      </Link>
    </div>
  );
}

export default HContact;
