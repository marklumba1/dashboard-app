import { User } from "@/types/common"
import { apiRequest } from "./apiRequest"

export const fetchUser = (id: number) => {
    return apiRequest<User>({
        url: `/users/${id}`,
        method: "GET"
    })
}