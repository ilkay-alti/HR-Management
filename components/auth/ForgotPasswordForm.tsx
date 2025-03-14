"use client";
import React from "react";
import Heading from "../custom/Heading";
import { useForgetPassword } from "@/hooks/useAuth";
import AnimatedInput from "../custom/AnimatedInput";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = React.useState("");

  const useForgetPasswordMutation = useForgetPassword();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    useForgetPasswordMutation.mutate({ email });
  };
  return (
    <div className="flex flex-col justify-center w-full grow gap-10 pr-30">
      {/* Top Section */}
      <Link href={"/login"} className="flex justify-start items-center gap-3">
        <ArrowLeft />
        <Heading size={"body1"}>Back</Heading>
      </Link>

      {/* Form Section */}
      <div className="flex flex-col gap-7">
        <div>
          <Heading size={"h4"} variant={"bold"}>
            Forgot Password
          </Heading>
          <Heading size={"body1"} variant={"light"} className="text-[#A2A1A8] ">
            Enter your registered email address. we’ll send you a code to reset
            your password.
          </Heading>
        </div>

        <form onSubmit={handleLogin}>
          <div className="flex flex-col py-1.5 gap-4">
            {/* Email Input */}
            <AnimatedInput
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          {/* Return Button */}
          <button
            type="submit"
            disabled={useForgetPasswordMutation.isPending}
            className="bg-[#7152F3] p-4 rounded-md w-full transition-all duration-300 hover:bg-[#7152F3]/90 active:bg-[#7152F3]/80"
          >
            <Heading size={"body1"} variant={"light"} className="text-white">
              {useForgetPasswordMutation.isPending
                ? "Sending in..."
                : "Send Mail"}
            </Heading>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
