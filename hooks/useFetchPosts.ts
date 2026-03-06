import { fetchPosts } from "@/lib/posts"
import { useQuery } from "@tanstack/react-query"

export const useFetchPosts = () => useQuery({queryKey: ["posts"], queryFn: fetchPosts})