"use client";
import { useAuth } from "@/providers/AuthProvider";
import { Menu } from "@/types/common";
import { Avatar } from "./Avatar";
import { Grip } from "lucide-react";

interface SidebarProps {
  brand: string;
  menus: Menu[];
}
export const Sidebar: React.FC<SidebarProps> = ({ brand, menus }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  return (
    <nav className="bg-gray-700 -z-20 text-white p-15 pr-25 rounded-4xl flex flex-col items-center gap-3">
      <h1 className="font-semibold text-3xl mb-5">{brand}</h1>
      <div className="relative">
        {user?.name && <Avatar name={user?.name} />}
        <Grip
          size={60}
          className="absolute text-gray-500 -z-10 bottom-[50%] left-[50%]"
        />
      </div>

      <div className="text-center">
        <p className="font-semibold text-nowrap">{user?.name}</p>
        <p className="text-sm">{user?.email}</p>
      </div>

      <ul className="flex gap-5 mt-10 flex-col">
        {menus.map((menu, index) => {
          return (
            <li key={index} className="gap-2">
              <p className=" capitalize font-bold tracking-wider text-gray-400">{menu.title}</p>
              <div className="ml-2">
                {menu.subMenus?.map((subMenu, index) => (
                  <p key={index}>{subMenu}</p>
                ))}
              </div>
            </li>
          );
        })}
      </ul>

      <button className="mt-auto">Add Post</button>
    </nav>
  );
};
