"use client";

import Logo from "@/app/ui/Logo";
import SidebarItem from "@/app/ui/SidebarItem";
import { menuItems, socialItems } from "@/constants/sidebarMenuItems";
import SocialMedia from "@/app/ui/SocialMedia";
import HamburgerMenuButton from "@/app/ui/HamburgerMenuButton";
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
        className={`fixed top-0 left-0 z-40 w-16 h-screen transition-transform -translate-x-full ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 shadow-md shadow-gray-700 overflow-x-visible`}
        aria-label="Sidebar"
      >
        <div>
          {isOpen && (
              <HamburgerMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          )}
        </div>
        <div className="h-full px-3 py-4 bg-[#121212] flex flex-col items-center">
          {/* Logo */}
          <Logo />
          <SidebarMenu />
          <div className="py-5 mt-5 border-t border-gray-700 w-full">
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
