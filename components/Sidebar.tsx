"use client";
import { Menu } from "@/types/common";
import { Avatar } from "./Avatar";
import { Grip } from "lucide-react";
import Link from "next/link";
import { useFetchUser } from "@/hooks/useFetchUser";

interface SidebarProps {
  brand: string;
  menus: Menu[];
}
export const Sidebar: React.FC<SidebarProps> = ({ brand, menus }) => {
  const {data: user} = useFetchUser()
  return (
    <nav className="bg-gray-700 text-white py-20 px-30 pr-40 rounded-4xl flex flex-col items-center gap-3">
      <h1 className="font-semibold text-3xl mb-5">{brand}</h1>
      <div className="relative">
        {user?.name && <Avatar name={user?.name} />}
        <Grip
          size={60}
          className="absolute text-gray-500 z-10 bottom-[50%] left-[50%]"
        />
      </div>

      <div className="text-center">
        <p className="font-semibold text-nowrap">{user?.name}</p>
        <p className="text-sm">{user?.email}</p>
      </div>

      <div className="flex gap-5 mt-10 flex-col">
        {menus.map((menu, index) => {
          return (
              <Link key={index} className="z-20" href={menu.path}>{menu.title}</Link>
          );
        })}
      </div>
    </nav>
  );
};
