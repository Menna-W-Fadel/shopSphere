import { useQuery } from "@tanstack/react-query";
import { getProducts, ProductsParams } from "../api/productsApi";

export function useProducts(
// params:ProductsParams={
//     page: 0,
//     limit: 0,
//     sort: "",
//     category: "",
//     search: ""
//}
){
    return useQuery({
        queryKey:['products'],
        queryFn:async ()=>{
            const response = await getProducts();
            return response.data;
        }
    })
}