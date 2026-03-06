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
  subMenus?: string[]
  path?: string
}

export const menus: Menu[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Users",
    path: "/users",
  },
  {
    title: "Posts",
    subMenus: ["All Posts", "Create Post", "Edit Post", "Delete Post"],
    path: "/posts",
  },
  {
    title: "Comments",
    subMenus: ["All Comments", "Filter by Post", "Add Comment"],
    path: "/comments",
  },
  {
    title: "Todos",
    subMenus: ["All Todos", "Add Todo", "Completed / Pending"],
    path: "/todos",
  },
  {
    title: "Albums",
    subMenus: ["All Albums", "Album Details", "Add Album / Add Photo"],
    path: "/albums",
  },
  {
    title: "Settings",
    subMenus: ["Theme", "API Settings"],
    path: "/settings",
  },
]