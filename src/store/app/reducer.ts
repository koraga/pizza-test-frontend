import {
    APP_FETCH_FAILED,
    APP_HIDE_LOADER,
    APP_SHOW_LOADER,
    AppActionTypes,
    AppState,
} from '@/store/app/types'

export const appInitialState: AppState = {
    error: false,
    loader: false,
}

export const appReducer = (state = appInitialState, action: AppActionTypes): AppState => {
    switch (action.type) {
        case APP_SHOW_LOADER:
            return {
                ...state,
                loader: true,
            }
        case APP_HIDE_LOADER:
            return {
                ...state,
                loader: false,
            }
        case APP_FETCH_FAILED:
            return {
                ...state,
                error: true,
                errorMessage: action.payload,
            }
        default:
            return state
    }
}
