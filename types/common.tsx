import { Home, Users, FileText, MessageCircle, CheckSquare, Image, Settings } from "lucide-react"
import { ElementType } from "react"

export type Post = {
    id: number,
    title: string,
    body: string
}

export type User = {
    id: number,
    name: string,
    email: string
}

export type CreatePost = Omit<Post, "id">

export type UpdatePost = Partial<Omit<Post, "id">>

export type Menu = {
  title: string
  path: string
}

export const menus: Menu[] = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "Users", path: "/users" },
  { title: "Posts", path: "/posts" },
  { title: "Comments", path: "/comments" },
  { title: "Todos", path: "/todos" },
  { title: "Albums", path: "/albums" },
  { title: "Settings", path: "/settings" },
]