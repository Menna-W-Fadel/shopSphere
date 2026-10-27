import { useQuery } from "@tanstack/react-query";
import { getProductByID } from "@/api/productsApi";
import { Product } from "@/types/products";

export async function useProductById(productId:string){
    return useQuery({
        queryKey:['product',productId],
        queryFn:async ():Promise<Product> => {
            const response = await getProductByID(productId);
            return response.data;
        }
    })
}