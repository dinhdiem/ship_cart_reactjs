import axios from "axios";
import { ProductType } from "../types/product";

const instance = axios.create({
    baseURL: "http://localhost:3001"
})

export const list = () =>{
    const url = `/products`;
    return instance.get(url);
}

export const remove = (id: number) => {
    const url = `/products/${id}`
    return instance.delete(url);
}

export const add = (products: ProductType) =>{
    const url = `products/`;
    return instance.post(url, products)
}

export const read = (id: number) => {
    const url = `/products/${id}`;
    return instance.get(url)
}

export const update = (product: ProductType) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product);
}