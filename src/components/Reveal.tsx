import React, {useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props{
    children: JSX.Element;
    width?: "fit-content" | "60%";
}

export const Reveal = ({children, width = "60%"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView){
            mainControls.start("visible");
        }
    }, [isInView]);

    return(
        <div ref={ref} className="mission-text" style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div variants={{hidden: {opacity:0, y:75}, visible: {opacity: 1, y:0}}} initial="hidden" animate={mainControls} transition={{duration: 0.8, delay: 0.30}}>{children}</motion.div>
        </div>
    );
};