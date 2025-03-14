"use client";
import Image from "next/image";
import React from "react";
import Heading from "../custom/Heading";
import { useLogin } from "@/hooks/useAuth";
import AnimatedInput from "../custom/AnimatedInput";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginMutation = useLogin();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginMutation.mutate({ email, password });
  };
  return (
    <div className="flex flex-col justify-center w-10/12 gap-10">
      {/* Top Section */}
      <div className="flex justify-start items-center gap-5">
        <Image src="/logo.jpg" alt="logo" width={60} height={60} />
        <Heading size={"h2"} variant={"bold"}>
          MHRS
        </Heading>
      </div>

      {/* Form Section */}
      <div className="flex flex-col gap-7">
        <div>
          <Heading size={"h4"} variant={"bold"}>
            Welcome
          </Heading>
          <Heading size={"body1"} variant={"light"} className="text-[#A2A1A8]">
            Please login here
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

            {/* Password Input */}
            <AnimatedInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          {/* Forgot Password Link */}
          <div className=" flex items-center justify-between mb-7">
            <Heading
              size={"body2"}
              variant={"light"}
              className="text-[#7152F3]"
            >
              <Link href={"/register"}>Create Account</Link>
            </Heading>
            <Heading
              size={"body2"}
              variant={"light"}
              className="text-[#7152F3]"
            >
              <Link href={"/forgot-password"}>Forgot Password?</Link>
            </Heading>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="bg-[#7152F3] p-4 rounded-md w-full transition-all duration-300 hover:bg-[#7152F3]/90 active:bg-[#7152F3]/80"
          >
            <Heading size={"body1"} variant={"light"} className="text-white">
              {loginMutation.isPending ? "Logging in..." : "Login"}
            </Heading>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
