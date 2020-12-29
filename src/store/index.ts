import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { appReducer } from '@/store/app'
import { usersReducer } from '@/store/users'

const rootReducer = combineReducers({
    appStore: appReducer,
    usersStore: usersReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['appStore'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk]

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export const persistor = persistStore(store)
