import axios from "axios"

const url = 'http://localhost:5000/api/v1/'
var token = ''
if ( localStorage.getItem('user') !== null ) {
    const user: any = JSON.parse(localStorage.getItem('user') || '')   
    token = user.token
    console.log(token)
} 

const authAxios = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const addItemToCart = (items: Object) => authAxios.put(url+'cart', items)
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })

export const getCart = () => authAxios.get(url+'cart')
                            .catch(error => {
                                return {data: error.response.data, status: error.response.status}
                            })