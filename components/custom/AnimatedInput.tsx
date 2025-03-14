import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "./Heading";

interface AnimatedInputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({
  label = "Email Address", // Varsayılan label
  placeholder = "Email", // Varsayılan placeholder
  type = "text", // Varsayılan input tipi
  value = "", // Input değeri
  onChange, // Input değişikliği handler'ı
  className = "", // Ekstra class'lar
  inputClassName = "", // Input için ekstra class'lar
  labelClassName = "", // Label için ekstra class'lar
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  return (
    <div
      className={`flex flex-col justify-start items-start border border-[#7152F3] rounded-md px-4  h-14 ${className}`}
    >
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Heading
              size={"label"}
              variant={"light"}
              className={`text-[#7152F3] absolute  ${labelClassName}`}
            >
              {label}
            </Heading>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.input
        type={type}
        placeholder={isFocused ? "" : placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`border-none outline-none rounded-md w-full bg-transparent h-full ${inputClassName}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: isFocused ? 1 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default AnimatedInput;
