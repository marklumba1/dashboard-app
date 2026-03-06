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
    title: string,
    subMenus?: string[]
}