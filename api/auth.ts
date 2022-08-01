import {UserType} from "../types/user"
import instance from "./instance";

export const signup = (data: UserType) => {
    const url = "/signup";
    return instance.post(url, data)
}

export const signin = (data: UserType) => {
    const url = "/signin";
    return instance.post(url, data)
}