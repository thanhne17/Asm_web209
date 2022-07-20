import { ProductType } from "../types/products";
import instance from "./instance";

export const list = () => {
    const url = "/products";
    return instance.get(url);
}

export const remove = (_id:number) => {
    const url = `/product/${_id}`;
    return instance.delete(url)
}

export const detail = (_id: string | undefined) => {
    const url = `/product/${_id}`;
    return instance.get(url);
}

export const create = (product: ProductType) => {
    const url = `/product`;
    return instance.post(url, product)
}

export const update = (product: ProductType) => {
    const url = `/product/${product._id}`;
    return instance.put(url, product)
}