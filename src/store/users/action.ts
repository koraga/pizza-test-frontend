import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import {
    USERS_ADD_USER,
    USERS_FETCH,
    USERS_REMOVE_USERS_FROM_STORE,
    USERS_UPDATE_USER,
    UsersActionType,
    UsersState,
} from '@/store/users/types'
import { getUsers } from '@/api/users/getUsers'
import { AppActionTypes, fetchFailed, hideLoader, showLoader } from '@/store/app'
import { IUser } from '@/interfaces/users'

type ActionTypes = UsersActionType | AppActionTypes
type ThunkResult<R> = ThunkAction<R, UsersState, undefined, ActionTypes>
type Dispatch = ThunkDispatch<UsersState, undefined, ActionTypes>

export const fetchUsers = (): ThunkResult<void> => async (dispatch: Dispatch) => {
    dispatch(showLoader())
    try {
        const response = await getUsers()
        dispatch(hideLoader())
        dispatch({
            type: USERS_FETCH,
            payload: response.data,
        })
    } catch (error) {
        dispatch(fetchFailed(error.message))
        dispatch(hideLoader())
    }
}

export const removeUsersFromStore = (): UsersActionType => ({
    type: USERS_REMOVE_USERS_FROM_STORE,
})

export const updateUser = (user: IUser): UsersActionType => ({
    type: USERS_UPDATE_USER,
    payload: user,
})

export const addUser = (user: IUser): UsersActionType => ({
    type: USERS_ADD_USER,
    payload: user,
})
