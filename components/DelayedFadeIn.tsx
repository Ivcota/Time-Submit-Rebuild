import { motion } from "framer-motion";
import React, { FC } from "react";

const DelayedFadeIn: FC = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default DelayedFadeIn;
