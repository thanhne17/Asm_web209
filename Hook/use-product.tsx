import useSWR from "swr";
import { create, list } from "../api/product";
interface IProduct {
    id?: number;
    name: string;
}
const useProducts = () => {
    const { data, error, mutate } = useSWR("/products", list);

    // create
    const create = async (item: IProduct) => {
        const product = await create(item);
        // mutate([...data, product]);
    };

    return {
        create,
        data,
        error,
    };
};

export default useProducts;
