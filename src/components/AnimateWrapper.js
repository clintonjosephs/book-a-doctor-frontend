/* eslint-disable react/prop-types */
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimateWrapper = ({
  children, initial, animate, transition, exit,
}) => (
  <AnimatePresence>
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      { children }
    </motion.div>
  </AnimatePresence>
);

export default AnimateWrapper;
