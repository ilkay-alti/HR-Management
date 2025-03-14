"use client";
import { useLogout } from "@/hooks/useAuth";
import React, { ElementType } from "react";
import Heading from "../custom/Heading";
import { LogInIcon } from "lucide-react";

interface LogoutButtonProps {
  className?: string;
  showText?: boolean;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({
  className,
  showText = true,
}) => {
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const Tag: ElementType = "button";

  return (
    <Tag
      onClick={handleLogout}
      disabled={logoutMutation.isPending}
      className={`bg-red-400 w-full flex items-center justify-center gap-3 px-2 py-3 rounded-md transition-all duration-300 hover:bg-red-400/90 active:bg-red-400/80 ${className}`}
    >
      {showText && (
        <Heading size="body1" variant="bold" className="text-white">
          Logout
        </Heading>
      )}
      <LogInIcon className="h-5 w-5 text-white" />
    </Tag>
  );
};

export default LogoutButton;
