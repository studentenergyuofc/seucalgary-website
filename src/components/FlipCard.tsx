import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

type cardProps = {
  name : string,
  execImg : string,
  position : string,
  major : string,
}

function FlipCard({name, execImg, position, major} : cardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const controlsCard = useAnimation();
  const controlsText = useAnimation();

  const flipCard = () => {
    setIsOpen(!isOpen);
    controlsCard.start({rotateY: isOpen ? 0 : 180});
    controlsText.start({rotateY: isOpen ? 0 : 180});
  };

  return (
    <motion.div
      onClick={flipCard}
      className={`card ${isOpen ? 'open' : ''}`}
      initial={false}
      animate={controlsCard}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', duration: 0.8 }}
      >
      <motion.div 
      className="inner-card"
      initial={false}
      animate={controlsText}
      >
        {isOpen? (
          <div className="card-content back">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi culpa ipsa libero corporis, quae eum odio reprehenderit odit ullam magnam.</p>
          </div>
        ) : (
        <div className="card-content">
          <div className="exec-img-container">
            <img src={execImg} alt="exec-img" className="exec-img"/>
          </div>
          <h4>{name}</h4>
          <h6>{position}</h6>
          <p>{major}</p>
        </div>
        )}
      </motion.div>
    </motion.div>

  );
}

export default FlipCard;






