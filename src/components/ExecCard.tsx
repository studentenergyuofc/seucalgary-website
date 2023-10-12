import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

function FlipCard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const controls = useAnimation();

  const flipCard = () => {
    setIsOpen(!isOpen);
    controls.start({rotateY: isOpen ? 0 : 180});
  };

  return (
    <motion.div
      onClick={flipCard}
      className={`card ${isOpen ? 'open' : ''}`}
      initial={false}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', duration: 0.5 }}
    >
      <motion.h2>{isOpen ? 'Back Side' : 'Front Side'}</motion.h2>
      <motion.div className="card-content">
        <p>Card content goes here.</p>
      </motion.div>
    </motion.div>
  );
}

export default FlipCard;






