"use client";
import React, { useState } from "react";
import AnimatedInput from "../custom/AnimatedInput";

interface ForgotPasswordModalProps {
  onClose: () => void; // Modal'ı kapatmak için fonksiyon
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  onClose,
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div
      className="fixed inset-0 flex items-center  justify-end "
      onClick={onClose} // Dışarı tıklandığında modal'ı kapat
    >
      <div
        className="max-w-5/12 w-full h-full p-8 rounded-lg shadow-lg text-white bg-white "
        onClick={(e) => e.stopPropagation()} // İçeri tıklamada modal'ı kapatma
      >
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold">Şifremi Unuttum</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <AnimatedInput
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#3399FF] text-[#151936] font-bold text-xl p-2 rounded-md w-full"
              // disabled={isLoading}
            >
              {/* {isLoading ? "Loading..." : "Submit Request"} */} ss
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
