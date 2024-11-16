"use client";

import { useUIStore } from "@/store";

export const MenuButton = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  return (
    <button className="transition-all hover:underline" onClick={() => openSideMenu()}>
      Menu
    </button>
  );
};
