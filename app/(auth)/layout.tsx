import Image from "next/image";
import React, { FC } from "react";
interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen p-7 gap-12">
      <div className="hidden md:flex bg-[#7152F3]/5 rounded-4xl w-7/12 items-center justify-end h-full">
        <Image
          src="/dashboard.png"
          alt="dashboardpng"
          width={685}
          height={300}
          className="h-10/12 w-8/12"
        />
      </div>
      <div className="flex w-5/12  ">{children}</div>
    </div>
  );
};

export default AuthLayout;
