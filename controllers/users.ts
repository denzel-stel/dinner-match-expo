import { AxiosResponse } from "axios";
import axios from "./axios";
import {NewUser} from "@dinner_match/database/models/User";
const getUser = async (id:number): Promise<AxiosResponse>  => {
    return axios.get("/auth/users/" + id);
}

const createUser = async (user: NewUser): Promise<AxiosResponse>  => {
    return axios.post("/auth/users", user);
}

export { getUser, createUser }