import { apiRequest } from "./apiRequest";
import type { CreatePost, Post } from "@/types/common";

export const fetchPosts = () =>
  apiRequest<Post[]>({
    url: "/posts",
    method: "GET",
  });

export const createPost = (post: CreatePost) =>
  apiRequest({
    url: "/posts",
    method: "POST",
    data: post,
  });
