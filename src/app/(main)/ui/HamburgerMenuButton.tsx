"use client";
import { RxHamburgerMenu } from "react-icons/rx";

interface HamburgerMenuButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function HamburgerMenuButton({
  isOpen,
  setIsOpen,
}: HamburgerMenuButtonProps) {
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`flex w-16  ${isOpen ? "" : "absolute"} z-10 lg:hidden block`}
    >
      <button className="cursor-pointer m-auto mt-4" onClick={handleClick}>
        <RxHamburgerMenu className="h-5 w-5" />
      </button>
    </div>
  );
}
