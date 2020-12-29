export const APP_SHOW_LOADER = 'APP_SHOW_LOADER'
export const APP_HIDE_LOADER = 'APP_HIDE_LOADER'
export const APP_FETCH_FAILED = 'APP_FETCH_FAILED'

interface AppShowLoaderAction {
    type: typeof APP_SHOW_LOADER
}

interface AppHideLoaderAction {
    type: typeof APP_HIDE_LOADER
}

interface AppFetchFailedAction {
    type: typeof APP_FETCH_FAILED
    payload: string
}

export interface AppState {
    error: boolean
    errorMessage?: string
    loader: boolean
}

export type AppActionTypes = AppShowLoaderAction | AppHideLoaderAction | AppFetchFailedAction
