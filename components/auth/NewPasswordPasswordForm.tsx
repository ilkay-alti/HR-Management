"use client";
import React, { FC } from "react";
import Heading from "../custom/Heading";
import { useNewPassword } from "@/hooks/useAuth";
import AnimatedInput from "../custom/AnimatedInput";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { toast } from "react-toastify";

interface NewPasswordPasswordFormProps {
  token: string;
}

const NewPasswordPasswordForm: FC<NewPasswordPasswordFormProps> = ({
  token,
}) => {
  const [password, setPassword] = React.useState("");
  const [correctPassword, setCorrectPassword] = React.useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleCorrectPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCorrectPassword(e.target.value);
  };

  const NewPasswordMutation = useNewPassword();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== correctPassword) {
      toast.error("Passwords do not match");
    } else {
      NewPasswordMutation.mutate({ token: token, password: password });
    }
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
            Change Password
          </Heading>
          <Heading size={"body1"} variant={"light"} className="text-[#A2A1A8] ">
            Enter your email address to get a password reset link.
          </Heading>
        </div>

        <form onSubmit={handleLogin}>
          <div className="flex flex-col py-1.5 gap-4">
            {/* Password Input */}
            <AnimatedInput
              label="Password"
              placeholder="Enter new password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {/* Correctly password */}
            <AnimatedInput
              label="Password"
              placeholder="Enter new password"
              type="password"
              value={correctPassword}
              onChange={handleCorrectPasswordChange}
            />
          </div>

          {/* Return Button */}
          <button
            type="submit"
            disabled={NewPasswordMutation.isPending}
            className="bg-[#7152F3] p-4 rounded-md w-full transition-all duration-300 hover:bg-[#7152F3]/90 active:bg-[#7152F3]/80"
          >
            <Heading size={"body1"} variant={"light"} className="text-white">
              {NewPasswordMutation.isPending
                ? "Changing in..."
                : "Change Password"}
            </Heading>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPasswordPasswordForm;
