"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
