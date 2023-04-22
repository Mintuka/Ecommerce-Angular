import axios from "axios"
import { UserCredentials } from "src/types/UserCredentials"
import { UserData } from "src/types/UserData"

const url = 'http://localhost:5000/api/v1/'
var token = ''
if ( localStorage.getItem('user') !== null ) {
    const user: any = JSON.parse(localStorage.getItem('user') || '')   
    token = user.token
} 

const authAxios = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const logInUser = (userCredentials: UserCredentials) => axios.post(url+'user/log-in', userCredentials)
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })

export const createUser = (userData: UserData) => axios.post(url+'user/sign-up', userData)
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })

export const addItem = (newItem: Object) => authAxios.post(url+'item', newItem)
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })