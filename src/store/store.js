import {combineReducers, configureStore} from "@reduxjs/toolkit";
import book from "./book";
import myBook from "./mybook";
import cart from "./cart";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage"

const reducer = combineReducers({
    book,
    myBook,
    cart
})

const persistConfig = {
    key: 'root', storage,
}


const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store)