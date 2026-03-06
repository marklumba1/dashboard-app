"use client"
import { useAddPost } from "@/hooks/useAddPost"
import { useFetchPosts } from "@/hooks/useFetchPosts"

export default function Page(){
    const {data, isLoading, error} = useFetchPosts()
    const {mutate, isPending} = useAddPost()
    return <div className="overflow-auto">
        
        <button onClick={() => mutate({title: "asd", body: "asdasdasd"})} disabled={isPending}>Add post</button>
        {data && data.map(data => <p key={data.id}>{data.title}</p>)}
        
        </div>
}