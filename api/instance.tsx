import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:4000/api/"
})

<<<<<<< HEAD

=======
instance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);
>>>>>>> cec8d9660d5377e434196777e44eae2ba70dce74

export default instance