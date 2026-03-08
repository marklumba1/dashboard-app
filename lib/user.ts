import { User } from "@/types/common"
import { apiRequest } from "./apiRequest"

export const fetchUser = () => {
    return apiRequest<User>({
        url: `/users/1`,
        method: "GET"
    })
}