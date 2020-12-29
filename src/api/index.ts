import Axios, { AxiosInstance } from 'axios'

const axiosConfig = {
    baseURL: 'http://localhost:3030',
}

export const axiosInstance: AxiosInstance = Axios.create(axiosConfig)
