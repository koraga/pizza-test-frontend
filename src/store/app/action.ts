import {
    APP_FETCH_FAILED,
    APP_HIDE_LOADER,
    APP_SHOW_LOADER,
    AppActionTypes,
} from '@/store/app/types'

export const showLoader = (): AppActionTypes => ({
    type: APP_SHOW_LOADER,
})

export const hideLoader = (): AppActionTypes => ({
    type: APP_HIDE_LOADER,
})

export const fetchFailed = (errorMessage: string): AppActionTypes => ({
    type: APP_FETCH_FAILED,
    payload: errorMessage,
})
