import {configureStore} from "@reduxjs/toolkit";
import user from "./user";
import book from "./book";

export const store = configureStore({
    reducer: {
        user,
        book
    }
})