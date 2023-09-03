import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import carts from '../reducerSlice/cart';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { logger } from 'redux-logger';
const reducer = combineReducers({
    carts
    // rides
    //..
})
const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [logger]

})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;