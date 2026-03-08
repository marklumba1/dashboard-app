import { fetchUser } from "@/lib/user"
import { useQuery } from "@tanstack/react-query"

export const useFetchUser = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: () => fetchUser(),
        staleTime: Infinity,       
    })
}