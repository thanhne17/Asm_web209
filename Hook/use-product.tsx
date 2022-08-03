import axios from "axios";
import useSWR from "swr";
import { create, list, remove, update } from "../api/product";
import { ProductType } from "../types/products";

const useProducts = () => {
    const fetcher = (args) => axios.get(args).then(res => res.data)

    const { data, error, mutate } = useSWR("http://localhost:4000/api/products", fetcher);

    // create
    const add = async (item: ProductType) => {
        const products = await create(item);
        mutate ([...data, products]);
    };
    const dele = async (id) => {
        await remove(id);
        mutate (data.filter(item => item._id !== id));    
    };

    const edit = async (item: ProductType) => {
        const {data : products} = await update(item);
        return data;
    };


    return {
        add,
        dele,
        data,
        error,
    };
};

export default useProducts;
