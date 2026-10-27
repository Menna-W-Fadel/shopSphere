import { Product,PaginatedApiResponse } from "../types/products";
import { apiClient } from "./apiClient";

export type ProductsParams={
    page:number;
    limit:number;
    sort:string;
    category:string,
    search:string;
}

export async function getProducts(
//     params:ProductsParams={
//     page: 0,
//     limit: 0,
//     sort: "",
//     category: "",
//     search: ""
// }
):Promise<PaginatedApiResponse<Product[]>>{
    const response = await apiClient.get<PaginatedApiResponse<Product[]>>('/products');
    return response.data;
}