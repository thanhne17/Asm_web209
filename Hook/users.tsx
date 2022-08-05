import axios from "axios";
import useSWR from "swr";
import { remove } from "../api/auth";


import { UserType } from "../types/user";

const useUsers = () => {
    const fetcher = (args) => axios.get(args).then(res => res.data)

    const { data, error, mutate } = useSWR("http://localhost:4000/api/users", fetcher);

    // create
  
    const dele = async (id) => {
        await remove(id);
        mutate (data.filter(user => user._id !== id));    
    };

   


    return {
        dele,
        data,
        error,
    };
};

export default useUsers;
