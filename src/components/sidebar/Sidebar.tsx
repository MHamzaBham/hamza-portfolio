"use client";

import Logo from "@/app/(main)/ui/Logo";
import SidebarItem from "@/app/(main)/ui/SidebarItem";
import { menuItems, socialItems } from "@/constants/sidebarMenuItems";
import SocialMedia from "@/app/(main)/ui/SocialMedia";
import HamburgerMenuButton from "@/app/(main)/ui/HamburgerMenuButton";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
          <HamburgerMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      <aside
        id="logo-sidebar"
        className={`dark:bg-[#121212] bg-[#f4f4f4] fixed top-0 left-0 z-40 w-16 h-screen transition-transform -translate-x-full  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 shadow-md dark:shadow-gray-700 shadow-gray-300 overflow-x-visible`}
        aria-label="Sidebar"
      >
        <div>
          {isOpen && (
              <HamburgerMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          )}
        </div>
        <div className="h-full px-3 py-4 flex flex-col items-center">
          {/* Logo */}
          <Logo />
          <SidebarMenu />
          <div className="py-5 mt-5 border-t dark:border-gray-700 border-gray-300 w-full">
            {/* Social Media Icons */}
            <SocialMenu />
          </div>
        </div>
      </aside>
    </>
  );
}

function SidebarMenu() {
  return (
    <ul className="space-y-2 font-medium w-full">
      {menuItems.map((item, index) => (
        <SidebarItem key={`${index}-${item.name}`} sidebarItem={item} />
      ))}
    </ul>
  );
}

function SocialMenu() {
  return (
    <ul className="space-y-1 font-medium w-full">
      {socialItems.map((item, index) => (
        <SocialMedia key={`${index}-${item.name}`} socialItem={item} />
      ))}
    </ul>
  );
}
