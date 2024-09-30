import React from 'react';
import { motion } from 'framer-motion';
import { FaRegHandPointRight } from "react-icons/fa";

const WebDevelopment = () => {
  // Animation properties for the title
  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  // Animation properties for the list with stagger effect
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adjust the delay between items here
        duration: 0.5,
      },
    },
  };

  // Animation properties for each list item
  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className='h-screen w-full relative flex overflow-hidden'>
      {/* Title on the left side */}
      <motion.h1
        className='absolute top-1/2 left-10 transform -translate-y-1/2 text-6xl font-light text-white'
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Web Development
      </motion.h1>

      {/* List on the right side */}
      <motion.div
        className='absolute top-1/2 right-5 transform -translate-y-1/2'
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        <ul className='pl-5 text-white gap-10 space-y-8 cursor-pointer'>
          {['Custom Web Application', 'E-Commerce Website', 'Responsive Web Design', 'Frontend & Backend Development'].map((item, index) => (
            <motion.li 
              key={index}
              className="flex items-center" // Ensure text and icon are aligned
              variants={itemVariants} 
              whileHover={{ scale: 1.05 }} // Hover effect: scale and color change for the whole item
              transition={{ duration: 0.2 }} // Duration of hover effect
            >
              {/* Icon initially hidden, appears when hovering over the entire list item */}
              <motion.span 
                className="mr-2"
                initial={{ opacity: 0, x: -10 }} // Icon starts hidden
                animate={{ opacity: 1, x: 0 }} // Animate to appear when hovering over the entire item
                whileHover={{ opacity: 1, x: 0 }} // Ensure it stays visible when hovered
                transition={{ duration: 0.2 }} // Smooth transition for the icon
              >
                <FaRegHandPointRight />
              </motion.span>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default WebDevelopment;
