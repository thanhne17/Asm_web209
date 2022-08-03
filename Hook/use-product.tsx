import axios from "axios";
import useSWR from "swr";
import { create, list, remove, update } from "../api/product";
import { ProductType } from "../types/products";

const useProducts = () => {
<<<<<<< HEAD
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
=======
    const fetcher = (args) => axios.get(args).then(res => res.data)
    const { data, error, mutate } = useSWR("http://localhost:4000/api/products", fetcher);

    // create
    const create = async (item: IProduct) => {
        const product = await create(item);
        mutate([...data, product]);
>>>>>>> cec8d9660d5377e434196777e44eae2ba70dce74
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
