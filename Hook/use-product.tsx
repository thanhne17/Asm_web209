import axios from "axios";
import useSWR from "swr";
import { create, list } from "../api/product";
interface IProduct {
    id?: number;
    name: string;
}
const useProducts = () => {
    const fetcher = (args) => axios.get(args).then(res => res.data)
    const { data, error, mutate } = useSWR("http://localhost:4000/api/products", fetcher);

    // create
    const create = async (item: IProduct) => {
        const product = await create(item);
        mutate([...data, product]);
    };

    return {
        create,
        data,
        error,
    };
};

export default useProducts;
