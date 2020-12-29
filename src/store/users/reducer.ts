import {
    USERS_ADD_USER,
    USERS_FETCH,
    USERS_REMOVE_USERS_FROM_STORE,
    USERS_UPDATE_USER,
    UsersActionType,
    UsersState,
} from '@/store/users/types'

export const usersInitialState: UsersState = {
    users: [],
}

export const usersReducer = (
    state: UsersState = usersInitialState,
    action: UsersActionType
): UsersState => {
    switch (action.type) {
        case USERS_FETCH:
            return {
                ...state,
                users: action.payload,
            }
        case USERS_REMOVE_USERS_FROM_STORE:
            return {
                ...state,
                users: [],
            }
        case USERS_UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.payload.id ? action.payload : user
                ),
            }
        case USERS_ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        default:
            return state
    }
}
