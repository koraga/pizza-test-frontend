import { IUser, IUsers } from '@/interfaces/users'

export const getUserById = (users: IUsers, id: number): IUser | undefined =>
    users.find(user => user.id === id)
