import { AxiosRequestConfig, isAxiosError } from "axios";
import { api } from "./api";

export const apiRequest = async <T>(config: AxiosRequestConfig):Promise<T> => {
    try {
        const response = await api.request<T>(config)
        return response.data
    } catch (error) {
        if (isAxiosError(error)) throw error;
        throw new Error(`Unexpected error: ${String(error)}`);
    }
}