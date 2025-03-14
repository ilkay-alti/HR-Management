import SideBar from "@/components/navigate/SideBar";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen p-5">
      <SideBar />
      <div className="bg-red-100 grow">{children}</div>
    </div>
  );
};

export default AppLayout;
