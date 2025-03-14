import React, { FC } from "react";
import type { Metadata } from "next";
import "./globals.css";
import TanStackProvider from "@/components/provider/TanStack";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <TanStackProvider>
        <body>
          <div>{children}</div>
          <ToastContainer />
        </body>
      </TanStackProvider>
    </html>
  );
};

export default RootLayout;
