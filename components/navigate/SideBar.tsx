"use client";
import {
  ArrowLeftToLineIcon,
  ArrowRightToLineIcon,
  BlocksIcon,
  CalendarCheck2Icon,
  LayoutDashboardIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Heading from "../custom/Heading";
import Link from "next/link";
import LogoutButton from "../auth/LogoutButton";

const navigation = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboardIcon className="h-6 w-6 " />,
  },
  {
    id: 2,
    name: "All Employees",
    href: "/employees",
    icon: <UsersIcon className="h-6 w-6 " />,
  },
  {
    id: 3,
    name: "All Departments",
    href: "/departments",
    icon: <BlocksIcon className="h-6 w-6 " />,
  },
  {
    id: 4,
    name: "Attendance",
    href: "/attendance",
    icon: <CalendarCheck2Icon className="h-6 w-6 " />,
  },
];

const SideBar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const pathname = usePathname();

  const handleChangeSize = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`bg-[#7152F3]/5 h-full max-w-72 w-full rounded-4xl p-7 flex flex-col  justify-between ${isOpen ? "w-full" : "w-min"} transition-all duration-300`}
    >
      <div className="flex flex-col gap-9">
        {/* SideBarTop */}
        <div className="flex justify-between items-center ">
          {isOpen && (
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" width={40} height={40} alt="logo" />
              <Heading size={"h5"} variant={"bold"}>
                HRMS
              </Heading>
            </div>
          )}
          <button
            onClick={handleChangeSize}
            className="cursor-pointer hover:bg-[#7152F3]/10 p-2 rounded-lg"
          >
            {isOpen ? (
              <ArrowLeftToLineIcon className="h-6 w-6" />
            ) : (
              <ArrowRightToLineIcon className="h-6 w-6 " />
            )}
          </button>
        </div>

        {/* SideBarNavigation */}
        <div className="flex flex-col gap-2.5">
          {navigation.map((nav) => (
            <Link
              key={nav.id}
              href={nav.href}
              className={`flex items-center space-x-2 p-2 rounded-r-lg border-l-4 hover:bg-[#7152F3]/10 ${
                pathname === nav.href
                  ? "bg-[#7152F3]/5 border-[#7152F3] text-[#7152F3]"
                  : "border-transparent"
              }`}
            >
              {nav.icon}
              {isOpen && (
                <Heading
                  size={"body1"}
                  variant={"bold"}
                  className={pathname === nav.href ? "text-[#7152F3]" : ""}
                >
                  {nav.name}
                </Heading>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <LogoutButton showText={isOpen} />
        {/* //! darklıghtbutton */}
      </div>
    </div>
  );
};

export default SideBar;
