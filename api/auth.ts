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
export const remove = (_id: number) => {
    const url = `user/${_id}`
    return instance.delete(url)
}