import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/api/categoriesApi";
export function useCategories(){
    return useQuery({
        queryKey:["categories"],
        queryFn:async ()=>{
            const response = await getCategories();
            return response.data;
        }
    })
}