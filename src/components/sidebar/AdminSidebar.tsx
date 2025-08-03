"use client";

import Logo from "@/app/(main)/ui/Logo";
import SidebarItem from "@/app/(main)/ui/SidebarItem";
import HamburgerMenuButton from "@/app/(main)/ui/HamburgerMenuButton";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { adminMenuItems } from "@/constants/adminSidebarMenuItems";
import { twMerge } from "tailwind-merge";

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {!isOpen && (
          <HamburgerMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      <aside
        id="logo-sidebar"
        className={twMerge(
          "fixed top-0 left-0 z-40 w-48 h-screen transition-transform -translate-x-full lg:translate-x-0 shadow-md shadow-gray-700 overflow-x-visible",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 bg-[#121212]">
          <div className="flex w-full items-start justify-between">
            {/* Logo */}
            <Logo />
            <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <RxHamburgerMenu className="h-5 w-5" />
            </button>
          </div>
          <SidebarMenu />
        </div>
      </aside>
    </div>
  );
}

function SidebarMenu() {
  return (
    <ul className="space-y-2 font-medium w-full">
      {adminMenuItems.map((item, index) => (
        <SidebarItem key={`${index}-${item.name}`} sidebarItem={item} isAdmin={true} />
      ))}
    </ul>
  );
}