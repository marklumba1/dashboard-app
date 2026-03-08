import { fetchUser } from "@/lib/user"
import { useQuery } from "@tanstack/react-query"

export const useFetchUser = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: () => fetchUser(),
        staleTime: Infinity,        // user never becomes stale
    refetchOnMount: false,      // don't refetch when component mounts
    refetchOnWindowFocus: false // don't refetch when switching tabs
    })
}