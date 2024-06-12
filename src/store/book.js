import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk(
    'book/getBook',
    async function (_, {rejectWithValue}) {
        try {
            // debugger
            const res = await axios.get('http://127.0.0.1:8000/api/book')
            return res.data.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const addMyBook = createAsyncThunk(
    'book/addMyBook',
    async function ({token, book}, {rejectWithValue}) {
        try {
            await axios.post(
                'http://127.0.0.1:8000/api/user/book',
                {bookId: book.id},
                {headers: {'Authorization': token}})
            return book
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

export const getMyBook = createAsyncThunk(
    'book/getMyBook',
    async function (token, {rejectWithValue}) {
        try {
            // debugger
            const {data} = await axios.get(
                'http://127.0.0.1:8000/api/user/book',
                {headers: {'Authorization': token}})
            return data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


export const deleteMyBook = createAsyncThunk(
    'book/deleteMyBook',
    async function ({token, id}, {rejectWithValue}) {
        try {
            // debugger
            await axios.delete(
                `http://127.0.0.1:8000/api/user/book/${id}`,
                {headers: {'Authorization': token}})

            return id
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const deleteBook = createAsyncThunk(
    'book/deleteBook',
        async function ({id,token}, rejectWithValue){
            try{
                await axios.delete(
                    `http://127.0.0.1:8000/api/admin/book/${id}`,
                    {headers: {'Authorization': token}})
                return id;
            }catch (e) {
                return rejectWithValue(e.message)
            }
        }
)

export const createBook = createAsyncThunk(
    'book/createBook',
        async function ({token, data}, rejectWithValue){
            try{
                console.log(data)
                const res = await axios.post(
                    `http://127.0.0.1:8000/api/admin/book`,
                    data,
                    {headers: {'Authorization': token}})
                return res.data.data
            }catch (e) {
                return rejectWithValue(e.message)
            }
        }
)

const bookSlice = createSlice({
    name: "book",
    initialState: {
        books: [],
        myBooks: [],
        loading: false,
        error: null
    },
    reducers: {
        setMyBooks(state, action) {
            state.myBooks = [...state.myBooks, action.payload]
        }
    },
    extraReducers: {
        [addMyBook.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [addMyBook.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.myBooks = [...state.myBooks, action.payload]
        },
        [addMyBook.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getMyBook.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null
        },
        [getMyBook.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            // console.log(action.payload)
            state.myBooks = [...state.myBooks, ...action.payload]
        },
        [getMyBook.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [deleteMyBook.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null
        },
        [deleteMyBook.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.myBooks = state.myBooks.filter(item =>  item.id !== action.payload)
        },
        [deleteMyBook.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getBooks.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null
        },
        [getBooks.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.books = action.payload
        },
        [getBooks.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [deleteBook.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null
        },
        [deleteBook.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.books = state.books.filter(item => item.id !== action.payload)
        },
        [deleteBook.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [createBook.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null
        },
        [createBook.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.books = [...state.books, action.payload]
        },
        [createBook.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

// export const {setMyBooks} = bookSlice.actions
export default bookSlice.reducer
