import { IUsers, IUser } from '@/interfaces/users'

export const USERS_FETCH = 'USERS_FETCH'
export const USERS_REMOVE_USERS_FROM_STORE = 'USERS_REMOVE_USERS_FROM_STORE'
export const USERS_UPDATE_USER = 'USERS_UPDATE_USER'
export const USERS_ADD_USER = 'USERS_ADD_USER'

interface FetchAction {
    type: typeof USERS_FETCH
    payload: IUsers
}

interface RemoveUsersFromStore {
    type: typeof USERS_REMOVE_USERS_FROM_STORE
}

interface UpdateUser {
    type: typeof USERS_UPDATE_USER
    payload: IUser
}

interface AddUser {
    type: typeof USERS_ADD_USER
    payload: IUser
}

export interface UsersState {
    users: IUsers
}

export type UsersActionType = FetchAction | RemoveUsersFromStore | UpdateUser | AddUser
