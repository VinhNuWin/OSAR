import React from "react";
import { motion } from "framer-motion";
import "../styles.css";
import { Spinner } from "@chakra-ui/react";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate="animationOne"
      >
        <Spinner size="md" color="blue" />
      </motion.div>
    </>
  );
};

export default Loader;
