import type { Product } from "../types/product";

const BASE_URL="https://dummyjson.com/products";

interface ProductsResponse{
    products:Product[];
}

export const fetchProducts=async():Promise<Product[]>=>{
    const response=await fetch(BASE_URL);

    if(!response.ok){
        throw new Error("Failed to fetch products");
    }

    const data:ProductsResponse=await response.json();

    return data.products;
}


export const fetchSingleProduct=async(id:string):Promise<Product>=>{
    const response=await fetch(`${BASE_URL}/${id}`);

    if(!response.ok){
        throw new Error("Failed to fetch product");
    }

    return response.json();
}

