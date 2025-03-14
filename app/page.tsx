import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center h-screen">
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <Link className="bg-red-100 px-20 py-10" href="/register">
        Register
      </Link>
      <Link className="bg-red-100 px-20 py-10" href="/login">
        Login
      </Link>
    </div>
  );
};
export default HomePage;
