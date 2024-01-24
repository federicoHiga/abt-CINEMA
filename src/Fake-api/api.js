import axios from "axios"; 

export const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export const search = async (url, setData) => {
    const respuesta = await api.get(url) 
    setData(respuesta.data)
}

