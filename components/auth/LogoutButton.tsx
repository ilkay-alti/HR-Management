"use client";
import { useLogout } from "@/hooks/useAuth";
import React from "react";
import Heading from "../custom/Heading";

const LogoutButton = () => {
  const logoutMutatiton = useLogout();

  const ahndleLogout = () => {
    logoutMutatiton.mutate();
  };

  return (
    <button
      onClick={ahndleLogout}
      disabled={logoutMutatiton.isPending}
      className="bg-red-400 px-4 py-2 rounded-md transition-all duration-300 hover:bg-red-400/90 active:bg-red-400/80"
    >
      <Heading size="body1" variant="bold" className="text-white">
        Logout
      </Heading>
    </button>
  );
};

export default LogoutButton;
