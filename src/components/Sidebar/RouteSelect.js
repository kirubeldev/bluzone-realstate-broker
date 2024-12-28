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

export const RouteSelect = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="space-y-1">
      <Link href={"/"}>
        <Route
          Icon={FiHome}
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
          Icon={FiPaperclip}
          selected={pathname === "/realstates"}
          title="Realstate"
        />
      </Link>

      <Link href={"/booking"}>
        <Route
          Icon={FiLink}
          selected={pathname === "/booking"}
          title="Booking"
        />
      </Link>

      <Link href={"/contact"}>
        <Route
          Icon={FiDollarSign}
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
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
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
