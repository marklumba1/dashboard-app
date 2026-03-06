"use client";
import { useAuth } from "@/providers/AuthProvider";
import { Menu, User } from "@/types/common";

interface SidebarProps {
  brand: string;
  menus: Menu[];
}
export const Sidebar: React.FC<SidebarProps> = ({ brand, menus }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  return (
    <nav className="bg-gray-700 text-white p-5 pr-20 rounded-4xl flex flex-col gap-3">
      <h1 className="font-semibold text-3xl">{brand}</h1>
      <div>
        <p className="text-2xl text-nowrap">{user?.name}</p>
        <p>{user?.email}</p>
      </div>

      <ul className="mt-auto flex gap-1 flex-col">
        {menus.map((menu, index) => (
          <li key={index}>{menu.title}</li>
        ))}
      </ul>
    </nav>
  );
};
