import { axiosInstance } from '@/api'

import { IUsers } from '@/interfaces/users'
import { FunctionRequest } from '@/api/types'

export const getUsers: FunctionRequest<IUsers> = () => {
    return axiosInstance.get<IUsers>('/users')
}
