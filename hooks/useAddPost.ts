import { createPost } from "@/lib/posts"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"


export const useAddPost = () => {
    const queryClient = useQueryClient()
    const router = useRouter()
    return useMutation({
        mutationFn: createPost,
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries({queryKey: ["posts"]})
        }
    })
}