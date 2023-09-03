import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import carts from '../reducerSlice/cart';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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
    reducer: persistedReducer,
    devTools: true,
    middleware: [logger]

})
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;