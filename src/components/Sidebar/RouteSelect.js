"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";

import { MdDashboard } from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import { TbBrandBooking } from "react-icons/tb";
import { GrContact } from "react-icons/gr";

export const RouteSelect = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="space-y-1">
      <Link href={"/"}>
        <Route
          Icon={MdDashboard}
          selected={pathname === "/"}
          title="Dashboard"
        />
      </Link>

      <Link href={"/partners"}>
        <Route
          Icon={FiUsers}
          selected={pathname === "/partners"}
          title="Partners"
        />
      </Link>

      <Link href={"/realstates"}>
        <Route
          Icon={BsHouse}
          selected={pathname === "/realstates"}
          title="Realstate"
        />
      </Link>

      <Link href={"/booking"}>
        <Route
          Icon={TbBrandBooking}
          selected={pathname === "/booking"}
          title="Booking"
        />
      </Link>

      <Link href={"/contact"}>
        <Route
          Icon={GrContact}
          selected={pathname === "/contact"}
          title="contact"
        />
      </Link>
    </div>
  );
};

const Route = ({ selected, Icon, title }) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-md transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-violet-500" : ""} />
      <span>{title}</span>
    </button>
  );
};
