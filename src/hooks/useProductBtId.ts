import { useQuery } from "@tanstack/react-query";
import { getProductByID } from "@/api/productsApi";

export function useProductById(productId:string){
    return useQuery({
        queryKey:['product',productId],
        queryFn:async () => {
            const response = await getProductByID(productId);
            return response.data;
        }
    })
}