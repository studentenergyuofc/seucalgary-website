import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { ExecMembers } from "@interfaces/ExecMembers";
import ImgComponent from "@shared/ImgComponent/ImgComponent";

function FlipCard(props: ExecMembers) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const controlsCard = useAnimation();
  const controlsText = useAnimation();

  const flipCard = () => {
    setIsOpen(!isOpen);
    controlsCard.start({ rotateY: isOpen ? 0 : 180 });
    controlsText.start({ rotateY: isOpen ? 0 : 180 });
  };

  return (
    <motion.div
      onClick={flipCard}
      className={`card ${isOpen ? "open" : ""}`}
      initial={false}
      animate={controlsCard}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", duration: 0.8 }}
    >
      <motion.div className="inner-card" initial={false} animate={controlsText}>
        {isOpen ? (
          <div className="card-content back">
            <p className="exec-question">
              What interests you in the energy sector?
            </p>
            <p className="exec-text">{props.text}</p>
            <p className="exec-question">Hobbies/ interests?</p>
            <p className="exec-text">{props.hobby}</p>
          </div>
        ) : (
          <div className="card-content">
            <div className="exec-img-container">
              <ImgComponent
                src={props.path}
                altimages={props.altimages}
                altimagesizes={props.altimagesizes}
                blurhash={props.blurhash}
              />
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
