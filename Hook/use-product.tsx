import useSWR from "swr";
import { create, list, remove, update } from "../api/product";
import { ProductType } from "../types/products";

const useProducts = () => {
    const getall = async (url: string) => {
        const {data} = await list(url)
        return data
    }
    const { data, error, mutate } = useSWR("/products", getall,  );

    // create
    const add = async (item: ProductType) => {
        const {data : products} = await create(item);
        return ([...data, products]);
    };
    const dele = async (id) => {
        const {data} = await remove(id);
        return data;    
    };
    const edit = async (item: ProductType) => {
        const {data : products} = await update(item);
        return data;
    };


    return {
        add,
        getall,
        dele,
        edit,
        data,
        error,
    };
};

export default useProducts;
