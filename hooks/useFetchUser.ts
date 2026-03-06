import { fetchUser } from "@/lib/user"
import { useQuery } from "@tanstack/react-query"

export const useFetchUser = (id: number) => {
    return useQuery({
        queryKey: ["user", id],
        queryFn: () => fetchUser(id),
    })
}