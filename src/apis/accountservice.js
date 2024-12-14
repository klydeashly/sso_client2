import axios from "axios"
import instance from "./instance"

const accountservice = {
    login: async(data) => {
        return await instance.post('User', data)
    },
    confirmationGetUserData: async(data) => {
        return await instance.post('User/login-confirmation/user-data', data)
    },
    confirmLogin: async(data) => {
        return await instance.post('User/login-confirmation', data)
    }

}

export default accountservice;