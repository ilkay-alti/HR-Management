"use client";
import React, { useState } from "react";
import AnimatedInput from "../custom/AnimatedInput";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Heading from "../custom/Heading";
import { useVerify2FA } from "@/hooks/useAuth";

const OTPForm = () => {
  const [OTP, setOTP] = useState("");

  const Verify2FA = useVerify2FA();

  const handleOTP = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Verify2FA.mutate({ token: OTP });
  };

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOTP(e.target.value);
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
            Enter OTP
          </Heading>
          <Heading size={"body1"} variant={"light"} className="text-[#A2A1A8] ">
            We have share a code of your registered email address
            robertallen@example.com
          </Heading>
        </div>

        <form onSubmit={handleOTP}>
          <div className="flex flex-col py-1.5 gap-4">
            {/* Email Input */}
            <AnimatedInput
              label="OTP Key"
              placeholder="Enter your OTP Key"
              type="text"
              value={OTP}
              onChange={handleOTPChange}
            />
          </div>

          {/* Return Button */}
          <button
            type="submit"
            disabled={Verify2FA.isPending}
            className="bg-[#7152F3] p-4 rounded-md w-full transition-all duration-300 hover:bg-[#7152F3]/90 active:bg-[#7152F3]/80"
          >
            <Heading size={"body1"} variant={"light"} className="text-white">
              {Verify2FA.isPending ? "Verifying in..." : "Verify OTP code"}
            </Heading>
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPForm;
