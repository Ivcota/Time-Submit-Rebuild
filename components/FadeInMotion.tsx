import { motion } from "framer-motion";
import React, { FC } from "react";

const FadeInMotion: FC = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInMotion;
