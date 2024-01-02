import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import { ExecMembers } from "../vite-env";

// type cardProps = {
//   name : string,
//   execImg : string,
//   position : string,
//   major : string,
// }

function FlipCard(props : ExecMembers) {
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
            <img src={props.path} alt="exec-img" className="exec-img"/>
          </div>
          <h4>{props.name}</h4>
          <h6>{props.position}</h6>
          <p>{props.major}</p>
        </div>
        )}
      </motion.div>
    </motion.div>

  );
}

export default FlipCard;






