import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ overflow: "hidden", position: "relative" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
