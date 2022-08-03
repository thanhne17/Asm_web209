import { ProductType } from "../types/products";
import instance from "./instance";

export const list = () => {
    const url = "products";
    return instance.get(url);
}

export const getAll = () => {
    const url = "products";
    return instance.get(url);
}

export const remove = (_id:number) => {
    const url = `product/${_id}`;
    return instance.delete(url)
}

export const detail = (slug: any | undefined) => {
    const url = `product/${slug}`;
    return instance.get(url);
}

export const create = (product: ProductType) => {
    const url = `product`;
    return instance.post(url, product)
}

export const update = (product: ProductType) => {
    const url = `product/${product._id}`;
    return instance.put(url, product)
}

export const searchProduct = (query: string) => {
    const url = `product?q=${query}`;
    return instance.get(url)
}