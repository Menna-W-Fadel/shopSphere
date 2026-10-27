import { Category } from "@/types/categories";
import { apiClient } from "./apiClient";
import { ApiResponse } from "@/types/products";

export async function getCategories():Promise<ApiResponse<Category[]>>{
    const response = await apiClient.get<ApiResponse<Category[]>>('/categories')
    return response.data;
}